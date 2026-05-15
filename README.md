# El-shaddai Mpaso — Portfolio

Professional portfolio website for an MBBS student at Kamuzu University of Health Sciences, positioned at the intersection of medicine, AI, clinical research, and healthcare innovation.

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**
- **next-themes** (dark/light mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. Update contact links and email in `src/lib/data.ts`
2. Replace the hero portrait placeholder with your photo in `src/components/sections/hero.tsx`
3. Add your CV PDF to `public/cv.pdf`
4. Update `siteConfig.url` for production SEO

## Deploy

Deploy to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [GitHub Pages](https://pages.github.com):

```bash
npm run build
```

### Vercel

```bash
npx vercel
```

## Project Structure

```
src/
├── app/           # Layout, page, global styles
├── components/    # UI, navbar, footer, sections
└── lib/           # Data & utilities
```

Built for future expansion: blog CMS, publications, booking, and project showcases.
