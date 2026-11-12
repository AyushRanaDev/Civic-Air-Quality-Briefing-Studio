# Civic Air Quality Briefing Studio

Run `npm install` then `npm run dev`. For deployment, import this repository into Vercel. In **Project Settings → Environment Variables**, add `GROQ_API_KEY` with the value of your regenerated key, select Production / Preview / Development, and deploy. The key is read only by `api/recommend-actions.ts`; it is never sent to the browser or stored in git.

Apply the SQL migration to create the briefing history table.
