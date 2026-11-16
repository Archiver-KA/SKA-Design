# Design system — Creative Agency Landing Page Template

`SN-W01484` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero (#000000) with an orange glow (#ff7a00) in the top-left corner, and a live-metrics card on the right where a single orange line chart carries the colour. The headline is a very heavy, tightly leaded sans in white, stacked over several lines, with a muted grey paragraph beneath. A small outlined label sits above the headline, and an orange button closes the nav.

**Mood:** bold, data-driven, dark, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#2a2a2a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff7a00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ffb800` · `#ff5a00` · `#0a0a0a` · `#ff7a00` · `#ff2a2a` · `#000000` · `#111111` · `#0e0e0e` · `#141414`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_#FF2A2A]`, `shadow-[0_0_10px_#FFB800]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="cursor-hover group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Dashboard preview (`dashboard-preview`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #111111;
  --color-muted: #2a2a2a;
  --color-border: #ffffff;
  --color-accent: #ff7a00;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#111111',
    muted: '#2a2a2a',
    line: '#ffffff',
    accent: '#ff7a00',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in very heavy, tightly leaded sans, stacked over several lines.
- **Do:** Use orange (#ff7a00) for the chart line, the glow and the primary button only.
- **Do:** Keep the metrics card as a dark surface with a thin border and small labels.
- **Don't:** Don't set the page on a white background; the design is black throughout.
- **Don't:** Don't use orange for body text.
- **Don't:** Don't add more than one glow source to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
