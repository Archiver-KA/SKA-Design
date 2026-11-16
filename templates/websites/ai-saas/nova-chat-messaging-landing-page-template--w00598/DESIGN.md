# Design system — NOVA Chat Messaging Landing Page Template

`SN-W00598` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

The first screen is a dark product page with a near-black navy ground, a white sans headline and an italic serif phrase set inside it. Purple and blue glows sit behind a floating chat panel, and the feature list uses small white and grey type with simple line icons. The italic serif is the one expressive move.

**Mood:** dark, product-led, expressive, glowing, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#111827` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d1d5db` · `#9ca3af` · `#111827` · `#f3f4f6` · `#e5e7eb` · `#1f2937` · `#34d399` · `#030712` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-full bg-blue-500 text-blue-950 px-3 py-1.5 hover:bg-blue-400 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. 3D / canvas scene (`3d-canvas`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Code / terminal (`code-terminal`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #111827;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
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
    background: '#111827',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#111827',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to dark navy (#111827) with white headlines (#ffffff).
- **Do:** Use one italic serif phrase inside a headline as the only typographic flourish.
- **Do:** Keep the chat panel as the hero visual, floating over a soft purple and blue glow.
- **Don't:** Don't set the page on a light ground; it stays dark navy.
- **Don't:** Don't set the whole headline in italic; only the one phrase takes it.
- **Don't:** Don't use the green (#34d399) for large areas; it appears only in small icons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
