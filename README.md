# Portfolio — Pepito Sevilla

My personal portfolio website. Built with Next.js, Tailwind CSS, and Framer Motion, and deployed on Vercel.

## Tech stack

- **Next.js** (App Router) + **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — animations
- **React Hook Form** + **Zod** — contact form and validation
- **Resend** — contact form email

## Getting started

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```bash
SITE_URL='https://example.com'        # used by next-sitemap
RESEND_API_KEY='your_resend_api_key'  # used by Resend for the contact form
```

Start the dev server:

```bash
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Type-check with `tsc` |
| `npm run format:write` | Format with Prettier |

## Contact

[pepitovsevilla13@gmail.com](mailto:pepitovsevilla13@gmail.com)
