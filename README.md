# Victor Rodriguez — Portfolio

Professional bilingual portfolio (EN / ES) for a Senior Full Stack Developer based in Xalapa, Veracruz, Mexico.

## Stack

- Next.js 16 (App Router) + TypeScript
- React Three Fiber + Drei (3D hero field)
- Tailwind CSS v4
- Framer Motion
- Dark / light mode + English / Spanish
- Cloudflare Workers via OpenNext

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

## Deploy to Cloudflare

1. Log in once:

```bash
npx wrangler login
```

2. Deploy:

```bash
npm run deploy
```

This builds with OpenNext and publishes to Cloudflare Workers.

### Cloudflare dashboard (Workers Builds)

If connecting a Git repo in the Cloudflare dashboard:

- **Build command:** `npx @opennextjs/cloudflare build`
- **Deploy command:** `npx @opennextjs/cloudflare deploy`

### Local Workers preview

```bash
npm run preview
```

## Sections

1. Boot loader — mission-style intro
2. Hero — 3D interactive field + branding
3. About — player profile + focus areas
4. Skills — production loadout
5. Impact — measurable achievements
6. Missions — campaign case studies
7. Experience — career timeline + education
8. Contact — email / WhatsApp / LinkedIn / resume
9. `/resume` — print-friendly resume page

## Content source

Content is based on `public/Victor_Resume.pdf`.
