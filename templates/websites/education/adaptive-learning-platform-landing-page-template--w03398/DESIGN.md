# Design system — Adaptive Learning Platform Landing Page Template

`SN-W03398` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Dark green hero on a deep teal-black ground with a large white sans headline, where the second phrase drops to pale grey. A small uppercase label sits above it, and the content below opens onto a white rounded card holding simple stats and tabs. The white card gives the product proof a clean surface against the dark ground.

**Mood:** sleek, structured, dark, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#022c22` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |
| Second accent | `#a3e635` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#022c22` · `#064e3b` · `#065f46` · `#a3e635` · `#6ee7b7` · `#047857` · `#f1f5f9` · `#f8fafc` · `#bef264`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 112px · h2 48px · h3 48px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[0_0_8px_rgba(163,230,53,0.6)]`
- **Content width:** `max-w-[90rem]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #022c22;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #064e3b;
  --color-accent-2: #a3e635;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#022c22',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#064e3b',
    accent2: '#a3e635',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white (#ffffff) on the deep green ground (#022c22), with the second phrase in pale grey.
- **Do:** Hold product content on white rounded cards that sit on the dark green.
- **Do:** Keep stats as dark green figures with small uppercase labels beneath.
- **Don't:** Don't place white text on the white card.
- **Don't:** Don't introduce a bright accent for headlines; the page stays green and white.
- **Don't:** Don't use a flat light background for the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
