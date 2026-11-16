# Design system — Developer Portfolio Landing Page

`SN-W01953` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with a centred three-line sans headline in white, its middle word set in a blue-to-violet gradient. A short grey paragraph and a row of three stats sit below, then a white primary pill and an outlined secondary. A small status pill at the top frames the content, which gives the page a calm, technical tone.

**Mood:** calm, technical, dark, precise, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#1f2937` · `#4b5563` · `#111827` · `#d1d5db` · `#030712` · `#6b7280` · `#34d399` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 72px · body 14px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-x-8`, `gap-y-3`

**Primary button**

```html
<a class="primary-btn group bg-white text-gray-950 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center space-x-2 hover:bg-gray-200 hover:scale-105 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Case studies (`case-studies`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #c084fc;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#c084fc',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans, white, with one gradient word on the middle line
- **Do:** Show three stats in a centred row with small grey labels
- **Do:** Use a white primary pill with an outlined secondary
- **Don't:** Don't apply the gradient to more than one word
- **Don't:** Don't add a light background; the page is near-black
- **Don't:** Don't put stats in cards; they sit on the page ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
