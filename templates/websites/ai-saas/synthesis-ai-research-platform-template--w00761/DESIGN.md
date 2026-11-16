# Design system — Synthesis AI Research Platform Template

`SN-W00761` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pale blue-white hero (#e0f2fe) with a large dark headline in two centred lines over a muted two-line subtext. The one filled control is a near-black pill beside a white email field, and a dark product mockup sits at the bottom edge. Colour is limited to the pale sky ground and black controls, so the page reads as a clean, light research tool.

**Mood:** clean, academic, light, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e0f2fe` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#bae6fd` | Primary action and highlights |
| Second accent | `#fef9c3` | Supporting highlights |

Palette by frequency of use: `#000000` · `#e7e5e4` · `#ffffff` · `#9ca3af` · `#4b5563` · `#e0f2fe` · `#6b7280` · `#1f2937` · `#f9fafb` · `#bae6fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-black text-sky-100 px-5 py-2 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e0f2fe;
  --color-surface: #1f2937;
  --color-text: #000000;
  --color-muted: #4b5563;
  --color-border: #e7e5e4;
  --color-accent: #bae6fd;
  --color-accent-2: #fef9c3;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e0f2fe',
    surface: '#1f2937',
    ink: '#000000',
    muted: '#4b5563',
    line: '#e7e5e4',
    accent: '#bae6fd',
    accent2: '#fef9c3',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in Manrope at large size, centred, in near-black
- **Do:** Keep the ground pale (#e0f2fe) and use black pill buttons for the primary action
- **Do:** Put the email field and button together as one pill-shaped control
- **Don't:** Don't use a dark hero background; this template is light
- **Don't:** Don't use the pale sky tint (#bae6fd) for text
- **Don't:** Don't add more than one filled button to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
