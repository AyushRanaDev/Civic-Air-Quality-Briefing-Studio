type Finding = { id: string; text: string; evidence: string[] };
const stakeholders = ['Ward Officer', 'Housing Society', 'School'] as const;
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST required' });
  const { stakeholder, findings, quality } = req.body as { stakeholder: string; findings: Finding[]; quality: unknown };
  if (!stakeholders.includes(stakeholder as typeof stakeholders[number]) || !Array.isArray(findings)) return res.status(400).json({ error: 'Invalid briefing input' });
  const key = process.env.GROQ_API_KEY;
  if (!key) return res.status(503).json({ error: 'AI is not configured. Add GROQ_API_KEY in Vercel project settings.' });
  const evidenceIds = new Set(findings.map(f => f.id));
  const prompt = `You are drafting cautious, practical civic air-quality actions for a ${stakeholder}. Use ONLY these validated findings and IDs: ${JSON.stringify(findings)}. Data quality: ${JSON.stringify(quality)}. Return strict JSON only: {"actions":[{"priority":"P1|P2|P3","action":"...","why":"...","evidenceIds":["E1"],"responsibleParty":"...","timeline":"24h|this week|this month","feasibility":"high|medium|low"}]}. Every evidence ID must be present. Do not state a pollution source as fact; say pattern consistent with, not confirmed by data. Make actions specific to this stakeholder.`;
  try { const upstream = await fetch('https://api.groq.com/openai/v1/chat/completions',{method:'POST',headers:{Authorization:`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({model:'llama-3.3-70b-versatile',temperature:.2,response_format:{type:'json_object'},messages:[{role:'system',content:'Return valid JSON and nothing else.'},{role:'user',content:prompt}]})}); if(!upstream.ok)return res.status(upstream.status).json({error:'AI request failed'}); const raw=await upstream.json() as {choices:{message:{content:string}}[]};const result=JSON.parse(raw.choices[0].message.content);if(!Array.isArray(result.actions)||!result.actions.every((a:{evidenceIds?:string[]})=>Array.isArray(a.evidenceIds)&&a.evidenceIds.every(id=>evidenceIds.has(id))))return res.status(502).json({error:'AI returned invalid evidence references.'});return res.status(200).json(result)} catch{return res.status(502).json({error:'AI response could not be validated. Please try again.'})}
}
