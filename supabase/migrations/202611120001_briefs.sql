create table if not exists public.air_quality_briefs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  label text not null,
  normalized_summary jsonb not null,
  findings jsonb not null default '[]'::jsonb,
  hotspots jsonb not null default '[]'::jsonb
);
alter table public.air_quality_briefs enable row level security;
create policy "briefs readable by authenticated users" on public.air_quality_briefs for select to authenticated using (true);
create policy "briefs insertable by authenticated users" on public.air_quality_briefs for insert to authenticated with check (true);
