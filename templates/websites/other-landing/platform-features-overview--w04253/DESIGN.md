# Design system — Platform Features Overview

`SN-W04253` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black features page with a centred headline in white, where the first word is picked out in pale blue (#60a5fa) and the rest stays white. Feature cards are dark grey-black panels with thin borders, each with a small blue icon chip and a short bulleted list with blue check marks. Navigation is minimal, and the sign-in control is a small outlined button.

**Mood:** dark, crisp, minimal, blue-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |

Palette by frequency of use: `#60a5fa` · `#ffffff` · `#d1d5db` · `#000000` · `#1f2937` · `#3b82f6` · `#9ca3af` · `#374151` · `#93c5fd` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 20px · body 18px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-md` (6px)
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-6`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-blue-500 text-white font-light rounded-md px-6 py-3 hover:bg-blue-400 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Process / steps (`how-it-works`)
6. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #d1d5db;
  --color-border: #1f2937;
  --color-accent: #60a5fa;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#d1d5db',
    line: '#1f2937',
    accent: '#60a5fa',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the first headline word in pale blue (#60a5fa) and the rest in white
- **Do:** Use blue check marks and icon chips in the feature cards
- **Do:** Keep the cards as dark panels with thin borders on the black ground
- **Don't:** Don't use blue for the card body text
- **Don't:** Don't add gradients to the headline; the colour split is one word
- **Don't:** Don't use light card backgrounds on this page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
