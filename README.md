# Clifford Klent Sayson — Portfolio

Premium personal portfolio for a Senior Full Stack WordPress Developer / AI-Powered Web Platform Engineer.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Dark / light mode

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Sections

1. Hero — positioning, CTAs, code/ecosystem visual
2. About — platform engineer narrative
3. Technical Expertise — interactive skill categories
4. Featured Projects — case-study switcher
5. Experience — timeline + education
6. Engineering Architecture — flow diagrams
7. Insights — technical writing topics
8. Contact — email / LinkedIn / GitHub
9. `/resume` — print-friendly resume page

## Deploy (Vercel)

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`
5. Output: Next.js default
6. Deploy.

Optional: set the production domain, then update `metadataBase` in `src/app/layout.tsx` to match.

## SEO

Metadata, Open Graph, and Twitter cards are configured in `src/app/layout.tsx`. Content is recruiter-readable with clear headings, experience timelines, and skill language aligned to senior WordPress / platform roles.

## Customize

- Copy & links: `src/data/portfolio.ts`
- Theme tokens: `src/app/globals.css`
- Resume content: `src/app/resume/page.tsx` (or replace the Download Resume link with a PDF in `/public/resume.pdf`)
