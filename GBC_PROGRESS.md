# Growth Bureau Collective: Project Progress

Attach this file and the master project prompt when you start each new development chat.

## Status

- **Current phase:** Phase 1 is in progress. The foundation and the hero are built and tested. The other homepage sections are waiting on the master prompt (see "Next exact task").
- **Last updated:** 14 Nov 2026 (second chat)

## Decisions made

1. **Stack:** the preferred stack from the master prompt.
   - Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, Lucide.
   - Supabase: Postgres, Auth, Storage and Row Level Security.
   - Stripe, Resend, the Anthropic API and Recharts.
   - Deployment target: Vercel.
2. **Environment:** the first chat had no network access, so development was paused. Package installs work as of the second chat (14 Nov 2026).
   - Installed: Next.js 16.4.6, React 19.3, Tailwind CSS 4.3. `create-next-app` turned on Cache Components and Partial Prefetching by default. Next.js 16 has breaking changes, so read `node_modules/next/dist/docs/` before changing framework code.
3. **Logo:** supplied in the second chat. The originals are in `brand-source/`. Transparent-background WebP versions are in `public/brand/`, all used through `src/components/brand/GbcEmblem.tsx`:
   - `GbcEmblem`: the geometric GBC monogram, the primary logo. Used in the nav, the footer and the hero.
   - `GbcSerifMark`: the serif GBC with growth bars, cropped from the lockup. Used as a faint background watermark in the hero.
   - `GbcLockup`: the full lockup with name and taglines. Not placed yet; it's available for the About page or a closing section.
   - The favicon, Apple touch icon and social-share image are generated from these, in `src/app/`.
   - The brand lines from the lockup now appear on the site: "Where ambition becomes identity" is the hero headline, and "Growth with purpose · Influence with intention" is the hero eyebrow and the footer line.
4. **Content rules:**
   - No invented testimonials, awards, history or results. Use clearly marked placeholder slots that an admin can edit.
   - No invented legal or compliance claims.

5. **Accessible gold:** `#D4A37A` on cream only reaches about 2:1 contrast. Gold text on light backgrounds uses the `gold-deep` token (`#8A5F36`) instead.
6. **Planned routes:** nav and footer links to pages from later phases go to one branded "coming soon" route (`src/app/[slug]`, listed in `src/content/planned-pages.ts`). Delete an entry there when its real page is built.
7. **Skill:** the ui-ux-pro-max design skill is installed at `.claude/skills/ui-ux-pro-max/`.

## Phase 1 progress

- [x] Installs work (`npm view next version` returns 16.4.6)
- [x] App scaffolded: TypeScript, Tailwind, App Router, `src/`
- [x] Packages installed: `framer-motion`, `lucide-react`, `@supabase/supabase-js`, `@supabase/ssr`, `zod`, `stripe`, `resend`, `@anthropic-ai/sdk`, `recharts`, `three`. Dev packages: `@playwright/test`, `@types/three`
- [x] Design tokens in `src/app/globals.css`; Cormorant Garamond and Inter via `next/font`
- [x] Base components: Button/ButtonLink, Card, Input/Textarea, Modal (native `<dialog>`), Section/Container/Eyebrow/SectionHeading, Nav (with mobile menu), Footer
- [x] Real logo in place (see decision 3), plus a `GbcWordmark` for the nav and footer
- [x] Hero: emblem, gold lighting, canvas particles. The particles stop under reduced motion and pause when off-screen or the tab is hidden
- [x] Branded 404 page and "coming soon" pages
- [x] `.env.example`, README and this file
- [x] Playwright tests on desktop (1440×900) and mobile (Pixel 7): 9 passed, 1 skipped (the mobile-menu test only runs on mobile)
  - Covers: no console errors, no horizontal scroll, skip link first in tab order, mobile menu opens and closes with Escape, no particles under reduced motion
  - Fixed during testing: nav links to unbuilt pages returned 404s (fixed with the "coming soon" route)
- [ ] The other 10 homepage sections from the brief
- [ ] Final copy for the hero intro paragraph (still a placeholder in `src/content/site.ts`)

## Next exact task (Phase 1)

1. **Attach the master project prompt.** It lists the 11 homepage sections; this chat didn't have it.
2. Build the remaining homepage sections in `src/components/home/`, using `Section` and `SectionHeading`. Put their copy in `src/content/`, with placeholder slots for anything not supplied.
3. Replace the placeholder hero intro with the approved wording from the brief.
4. Extend `tests/home.spec.ts` to cover the new sections. Run `npm test` and record the results here.
5. Mark Phase 1 done and move to Phase 2.

## Original Phase 1 plan (for reference)

1. Check that `npm view next version` works. That confirms installs are enabled.
2. Scaffold the app with `create-next-app`: TypeScript, Tailwind, App Router and a `src/` directory.
3. Install `framer-motion`, `lucide-react`, `@supabase/supabase-js`, `@supabase/ssr`, `zod`, `stripe`, `resend`, `@anthropic-ai/sdk`, `recharts` and `three`.
4. Set up the design tokens:
   - Black `#0B0B0B`, Gold `#D4A37A`, Cream `#F8F5F0`, Charcoal `#242424`, White `#FFFFFF`.
   - A serif display font (for example Cormorant Garamond) and a sans-serif body font (for example Inter).
5. Build the base UI components: Button, Card, Input, Modal, Section, Container, Nav and Footer.
6. Build the homepage: a cinematic hero with the emblem, gold lighting and particles that respect reduced-motion settings, plus all 11 sections from the brief.
7. Create `.env.example`, a README and this progress file in the repo.
8. Run, test with Playwright on desktop and mobile, fix the issues found, and record the results here.

## Phase checklist

- [ ] 1. Architecture, branding, design system, homepage
- [ ] 2. Public pages and navigation
- [ ] 3. Auth, database, permissions (Supabase schema and RLS)
- [ ] 4. Growth Hub dashboard and Growth Planner
- [ ] 5. Learning Academy and Resource Library
- [ ] 6. AI Growth Assistant and Website Concierge
- [ ] 7. Community and Client Workspace
- [ ] 8. Memberships and Stripe
- [ ] 9. Admin Dashboard and booking
- [ ] 10. SEO, security, performance, testing
- [ ] 11. Visual polish and deployment prep

## Credentials needed (when each phase arrives)

| Phase | Credentials |
|---|---|
| Phase 3 | Supabase project URL, anon key and service-role key |
| Phase 6 | Anthropic API key |
| Phase 8 | Stripe secret key, publishable key and webhook secret, plus price IDs for Plus and Elite (monthly and annual) |
| Phase 9 | Resend API key and a verified sending domain |
| Phase 11 | Vercel account and domain name (logo received) |
