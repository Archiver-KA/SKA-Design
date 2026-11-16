# Design system — AI Platform Landing Page Layout

`SN-W00125` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Plain black landing page where the hero headline carries the design: white type with the first word in a blue gradient (#60a5fa to #3b82f6). Feature cards are outlined with a dark grey hairline (#1f2937) rather than filled, so depth stays minimal. The system sans-serif keeps the page neutral, and the 3D canvas is the only ornament.

**Mood:** minimal, dark, neutral, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#1f2937` · `#9ca3af` · `#60a5fa` · `#3b82f6` · `#d1d5db` · `#374151` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h3 18px · body 30px
- **Weights in use:** light, normal, extralight
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-full` (9999px)
- **Content width:** `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="bg-blue-500 text-white font-light rounded-md px-5 py-2.5 sm:px-6 sm:py-3 hover:bg-blue-400 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #3b82f6;
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
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the first headline word in the blue gradient (#60a5fa to #3b82f6) and the rest in white
- **Do:** Outline feature cards with the #1f2937 hairline instead of filling them
- **Do:** Keep the background pure black (#000000) under the 3D canvas
- **Don't:** Don't add coloured backgrounds to cards
- **Don't:** Don't use more than one blue in a single headline
- **Don't:** Don't swap in a decorative display face; the system sans is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
