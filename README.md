# Andrew Adetokunbo — Portfolio (Next.js)

Built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS, hand-rolled
shadcn-style UI primitives, Lucide icons, Framer Motion, React Hook Form + Zod,
Sanity CMS, and Resend. Red primary (`#D0021B`) on a white background.

## Getting started

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

## Content

Project, experience, and skills content lives in `lib/data.ts` and renders by
default — no external services required to run the site.

## Sanity (optional)

A `project` schema is scaffolded in `sanity/schemaTypes/project.ts` and a client
in `sanity/lib/client.ts`. To move project content into Sanity:

1. Create a Sanity project and set `NEXT_PUBLIC_SANITY_PROJECT_ID` /
   `NEXT_PUBLIC_SANITY_DATASET` in `.env.local`.
2. Set up a Sanity Studio (separate app or embedded route) using the schema in
   `sanity/schemaTypes/project.ts`.
3. Swap the static `projects` import in `components/Projects.tsx` for a call to
   `fetchSanity()` with a GROQ query.

## Resend (contact form)

Set `RESEND_API_KEY` in `.env.local` to enable `/api/contact`. Without it, the
route returns a clear error instead of silently failing.

## Notes

- No Supabase — Postgres/Supabase only appears as a listed skill under Stack,
  not as this site's own backend.
- Deploy target: Vercel.
