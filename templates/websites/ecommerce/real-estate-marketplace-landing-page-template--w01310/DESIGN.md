# Design system — Real Estate Marketplace Landing Page Template

`SN-W01310` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A neutral product-grid interface on a near-white ground, with pure white listing cards separated by hairline grey borders. Colour stays out of the way: near-black ink (#18181b) carries the primary controls, filter chips and status badges, so the page reads as a catalogue led by its photographs. Inter sets everything at one family, and rounded cards plus pill-shaped chips do the structuring.

**Mood:** neutral, catalogue-like, calm, photo-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#fafafa` · `#f4f4f5` · `#a1a1aa` · `#52525b` · `#000000` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h3 17px · body 13px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-md`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-[860px]`
- **Common gaps:** `gap-0`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="px-6 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-all hover:scale-[1.02] active:scale-95 bg-zinc-900 text-white shadow-md">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Spline 3D, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-white (#fafafa) and card surfaces pure white with #e4e4e7 borders
- **Do:** Reserve near-black (#18181b) for primary controls, the active tab and status badges
- **Do:** Let listing photography lead; keep card text to name, location and two or three key facts
- **Don't:** Don't add coloured accents to badges or chips; the page is monochrome
- **Don't:** Don't use heavy drop shadows on cards; separation comes from borders
- **Don't:** Don't introduce a second display typeface; Inter carries headings and body

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
