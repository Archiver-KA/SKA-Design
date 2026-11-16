# Design system — Digital Infrastructure Landing Page Template

`SN-W00341` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `pt-BR`

## Direction

A stark, dark conversion page on near-black with large light sans headlines, where the middle word rodando is set in mid grey. A row of three large figures carries the proof, and the last figure is in mint green (#34d399). The buttons are a light pill beside a dark outlined one, so almost all the weight falls on the numbers.

**Mood:** stark, direct, dark, numeric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#10b981` | Page ground |
| Surface | `#3f3f46` | Cards, panels, raised areas |
| Text | `#09090b` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#10b981` · `#27272a` · `#71717a` · `#a1a1aa` · `#f4f4f5` · `#34d399` · `#18181b` · `#d4d4d8` · `#09090b` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist Mono
- **Body:** Inter
- **Loaded families:** Geist Mono, Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 16px
- **Weights in use:** light, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-inner`, `shadow-[0_30px_60px_-15px_rgba(0,0,0,1)]`, `shadow-[0_0_8px_#10b981]`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Schedule (`schedule-agenda`)
5. Pricing (`pricing`)
6. Product grid (`product-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #10b981;
  --color-surface: #3f3f46;
  --color-text: #09090b;
  --color-muted: #27272a;
  --color-border: #27272a;
  --color-accent: #34d399;
  --font-display: "Geist Mono", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#10b981',
    surface: '#3f3f46',
    ink: '#09090b',
    muted: '#27272a',
    line: '#27272a',
    accent: '#34d399',
  },
  fontFamily: { display: ['Geist Mono'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set stat figures large with small uppercase labels below
- **Do:** Use mint green (#34d399) only for the highlighted stat
- **Do:** Keep the headline's middle word in mid grey as a two-tone contrast
- **Don't:** Don't add a hero image; the page relies on type and numbers
- **Don't:** Don't use green for buttons
- **Don't:** Don't add more than three stats in the row

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
