# Design system — Fintech Careers Landing Page Template

`SN-W00950` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, airy careers page on near-white (#fbfbfc) with deep purple (#51207a) used for the primary button and for emphasised words in the headline. The headline is a high-contrast serif. A soft purple-to-green glow sits behind the image frame.

**Mood:** airy, editorial, warm, light, brand-forward

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbfbfc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#020617` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#51207a` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e2e8f0` · `#51207a` · `#020617` · `#475569` · `#5b2586` · `#64748b` · `#17121d` · `#421666` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 64px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-[#391255]/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-5`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="rounded-lg bg-[#51207a] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-950/15 transition hover:bg-[#40145f]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Team (`team`)
5. About (`about`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fbfbfc;
  --color-surface: #ffffff;
  --color-text: #020617;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #51207a;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbfbfc',
    surface: '#ffffff',
    ink: '#020617',
    muted: '#475569',
    line: '#ffffff',
    accent: '#51207a',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use deep purple (#51207a) for the primary button and one highlighted word per headline.
- **Do:** Set headlines large, with the emphasised words in purple.
- **Do:** Keep the page ground near-white and use white cards on it.
- **Don't:** Don't use purple for body text.
- **Don't:** Don't add more than one glow shape per section.
- **Don't:** Don't swap the serif headline for a geometric sans.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
