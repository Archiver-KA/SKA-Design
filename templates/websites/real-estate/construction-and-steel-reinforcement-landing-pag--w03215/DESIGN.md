# Design system — Construction & Steel Reinforcement Landing Page Template

`SN-W03215` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `de`

## Direction

A dark, industrial German page on a near-black ground (#09090b) where amber (#f59e0b) does the signalling. The headline is heavy white sans set large, with one key word picked out in amber, and the primary button is a solid amber fill. Small status cards sit over the hero, and the palette stays strictly to black, zinc greys and amber.

**Mood:** industrial, direct, precise, monochrome with amber

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#f59e0b` · `#f4f4f5` · `#09090b` · `#a1a1aa` · `#27272a` · `#18181b` · `#fbbf24` · `#71717a` · `#d4d4d8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Archivo
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-amber-500/10`, `shadow-amber-500/30`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="magnetic hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-semibold px-4 py-2.5 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Logo cloud (`logo-cloud`)
6. Pricing (`pricing`)
7. Gallery / portfolio (`gallery-portfolio`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Pick out one key word in each headline in amber (#f59e0b).
- **Do:** Use the solid amber fill for the primary button only.
- **Do:** Build small status cards on the zinc surface (#18181b) with a thin border (#27272a).
- **Don't:** Don't add a second accent colour; black, zinc greys and amber are the whole palette.
- **Don't:** Don't use amber for body text or for large background areas.
- **Don't:** Don't drop the status cards from the hero; they are part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
