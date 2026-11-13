import {z} from 'zod';
const FindingSchema=z.object({claims:z.array(z.object({text:z.string(),evidenceIds:z.array(z.string())}))});
export async function callAI(action:string,payload:unknown){const res=await fetch(`/api/${action}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const raw=await res.text();let body:{error?:string};try{body=JSON.parse(raw)}catch{throw new Error(`AI endpoint is unavailable (HTTP ${res.status}). Add GROQ_API_KEY in Vercel and redeploy.`)}if(!res.ok)throw new Error(body.error||`AI request failed (HTTP ${res.status})`);return body}
export {FindingSchema};
