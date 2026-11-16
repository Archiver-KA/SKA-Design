# Design system — Modular Housing Landing Page Template

`SN-W03318` · real-estate · light mode · Sinera Atlas theme `dwell` · language `pt`

## Direction

A light, quietly modern hero: a heavy sans headline in near-black, with the key word modular set in light grey. A rounded photograph of a white modular house sits on the right, with a small white status card overlapping its lower edge. Buttons are a near-black pill and an outlined pill, and the only other colour is a small green dot in the eyebrow label.

**Mood:** modern, clean, calm, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#a1a1aa` · `#e7e5e4` · `#eab308` · `#fafaf9` · `#f5f5f4` · `#52525b` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="text-xs font-semibold tracking-tight border border-zinc-200 rounded-md px-2 py-1 hover:bg-zinc-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e7e5e4;
  --color-accent: #eab308;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e7e5e4',
    accent: '#eab308',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans in near-black (#18181b), with one key word in light grey.
- **Do:** Overlap a small white status card on the lower edge of the hero photograph.
- **Do:** Use a near-black pill for the primary action and an outlined pill beside it.
- **Don't:** Don't add colour to the headline; the grey word is the only emphasis.
- **Don't:** Don't use the green dot as a button colour; it marks the eyebrow only.
- **Don't:** Don't place the photograph flat against the page edge; it sits inside the grid with rounded corners.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
