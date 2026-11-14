# Growth Bureau Collective

The website and member platform for Growth Bureau Collective.

Progress, decisions and the next task are tracked in [`GBC_PROGRESS.md`](./GBC_PROGRESS.md).

## Stack

- **Next.js 16** (App Router, Cache Components), React 19, TypeScript
- **Tailwind CSS 4**, Framer Motion, Lucide icons
- Supabase, Stripe, Resend, the Anthropic API, Recharts and Three.js are installed but not wired up yet (see the phase plan)

> Next.js 16 differs from older versions. Before changing framework code, read the matching guide in `node_modules/next/dist/docs/` (see `AGENTS.md`).

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in keys as each phase needs them
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | Generate route types, then run `tsc` |
| `npm test` | Build, start, and run the Playwright tests on desktop and mobile |

If Playwright can't find a browser, either run `npx playwright install chromium` or set `PW_CHROMIUM_PATH` to an existing Chromium.

## Project layout

```
src/
  app/                  routes (App Router)
    [slug]/             "coming soon" pages for routes planned in later phases
  components/
    brand/GbcEmblem.tsx logo components (monogram, serif watermark, full lockup)
    home/               homepage sections (Hero, GoldParticles)
    layout/             Nav, Footer, ComingSoon
    ui/                 Button, Card, Input/Textarea, Modal, Container/Section
  content/              editable copy (site.ts, planned-pages.ts)
  lib/
public/brand/           transparent-background logo files (WebP)
brand-source/           original logo artwork as supplied
tests/                  Playwright tests
.claude/skills/         Claude Code skills (ui-ux-pro-max)
```

## Design tokens

Defined in `src/app/globals.css` and available as Tailwind classes (`bg-ink`, `text-gold`, `font-display`, etc.).

| Token | Value | Use |
|---|---|---|
| `ink` | `#0B0B0B` | Main background |
| `gold` | `#D4A37A` | Accent, buttons, text on dark |
| `gold-deep` | `#8A5F36` | Gold text on light backgrounds (passes 4.5:1 contrast) |
| `cream` | `#F8F5F0` | Body text on dark, light sections |
| `charcoal` | `#242424` | Raised surfaces, text on light |
| `white` | `#FFFFFF` | Cards on light sections |

Fonts: Cormorant Garamond (display) and Inter (body), self-hosted via `next/font`.

## Content rules

- No invented testimonials, awards, history or results. Use clearly marked placeholders.
- No invented legal or compliance claims.
- Copy marked `PLACEHOLDER` in `src/content/` needs approved wording before launch.
