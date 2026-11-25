# El-shaddai Mpaso — Portfolio

Personal portfolio for **El-shaddai Mpaso** (also known as *Storyyteller*) — an MBBS student, health-tech builder, researcher, and storyteller.

Built with **Next.js 15 App Router**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes**.

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Runtime UI:** React 19 + TypeScript
- **Styling:** Tailwind CSS 3.4
- **Motion:** Framer Motion (respects `prefers-reduced-motion`)
- **Theme:** next-themes (light / dark / system)
- **Icons:** lucide-react
- **Email:** nodemailer via `/api/contact`
- **Deployment:** Vercel

---

## Routes

| Path | Purpose |
|---|---|
| `/` | Homepage — hero, featured work, about teaser, focus areas, writing teaser, contact CTA |
| `/about` | Personal story, trajectory, credentials, capabilities, enterprise |
| `/work` | Filterable project gallery (`?category=Health` etc.) |
| `/work/[slug]` | Individual project case study |
| `/research` | Research interests and philosophy |
| `/writing` | Article listing (empty state until articles exist) |
| `/writing/[slug]` | Individual article |
| `/contact` | Contact form |
| `/sitemap.xml` | Auto-generated (static routes + projects + articles) |
| `/robots.txt` | Auto-generated |
| `/feed.xml` | RSS feed for `/writing` |
| `/manifest.webmanifest` | Web app manifest |
| `/opengraph-image` | Dynamic OG image |

---

## Getting Started

```bash
npm install
npm run dev