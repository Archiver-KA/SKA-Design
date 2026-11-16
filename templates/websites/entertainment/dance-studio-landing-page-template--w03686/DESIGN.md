# Design system — Dance Studio Landing Page Template

`SN-W03686` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A cream, editorial hero where a large dark serif headline is set over three lines, and grey italic words break its rhythm. Pill buttons sit below, one solid near-black and one outlined, with no colour beyond the neutrals. The page is about type and whitespace, so it makes no use of an accent colour.

**Mood:** editorial, calm, refined, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#1a1a1a` · `#78716c` · `#000000` · `#fdfcf8` · `#a8a29e` · `#d6d3d1` · `#57534e` · `#f5f5f4` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Instrument Serif, Inter, Plus Jakarta Sans, Geist
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[1800px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wide hover:bg-[#F2F0EB] transition-colors text-stone-600 hover:text-black">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#78716c',
    line: '#ffffff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline large in dark serif, with one or two words in grey italic
- **Do:** Use solid near-black pills for the primary action and outlined pills for the secondary
- **Do:** Keep the cream ground (#fdfcf8) and neutrals only
- **Don't:** Don't introduce an accent colour; the design depends on neutrals
- **Don't:** Don't set headlines in a light weight at small sizes
- **Don't:** Don't place photography behind the headline without a clear area

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
