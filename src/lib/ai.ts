import {z} from 'zod';
const FindingSchema=z.object({claims:z.array(z.object({text:z.string(),evidenceIds:z.array(z.string())}))});
export async function callAI(action:string,payload:unknown){const res=await fetch(`/api/${action}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const body=await res.json();if(!res.ok)throw new Error(body.error||'AI request failed');return body}
export {FindingSchema};
