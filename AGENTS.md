# Project Guidance

Shared guidance for Claude Code, Codex, and any future coding agent in this repo.
Keep durable project rules here. No secrets, env values, or one-off task notes.

## Project Overview

- Personal portfolio website, deployed on Vercel.
- Stack: Next.js 15 (App Router) + React 19, TypeScript, Tailwind CSS, Framer Motion, React Hook Form + Zod, Resend (contact email).
- Source lives in `src/`:
  - `src/app` — App Router routes and layouts
  - `src/components` — UI components
  - `src/actions` — server actions (e.g. contact form / Resend)
  - `src/hooks` — React hooks
  - `src/lib` — utilities and shared helpers
  - `src/styles` — global styles
- Env vars (in `.env`, never committed): `SITE_URL` (sitemap), `RESEND_API_KEY` (contact email).

## Commands

- `npm run dev` — local dev server (Turbopack)
- `npm run build` — production build
- `npm run lint` / `npm run lint:fix` — ESLint
- `npm run typecheck` — `tsc --noEmit`
- `npm run format:write` — Prettier

## Working Rules

- Read the relevant files and match existing patterns before editing.
- Run `npm run lint` and `npm run typecheck` before handing off a change, or say why you skipped them.
- Don't edit `.env`, and don't print or inspect secrets.
- Don't revert unrelated changes the owner made.
- Avoid destructive git commands (`git reset --hard`, `git checkout -- .`) unless explicitly asked.

## Git & Commits

- This is a personal project; the owner usually commits directly to `main`. Agents may do the same when asked, or open a PR if that's cleaner — but never force-push or merge/deploy on their own.
- Use Conventional Commits (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, etc.) — commitlint + husky enforce this on commit.
- Plain commit messages: no "Generated with" line and no `Co-Authored-By` trailer.
