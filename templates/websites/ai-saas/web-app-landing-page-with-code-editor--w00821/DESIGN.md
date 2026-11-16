# Design system — Web App Landing Page with Code Editor

`SN-W00821` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pure black page with white type and no decoration beyond a single glowing code window. The headline is large DM Sans, centred, with grey body copy beneath, so the hierarchy comes from size and tone rather than colour. The code panel carries the only accent: a blue glow around a dark editor frame with syntax-coloured lines. It reads as a developer tool presented plainly.

**Mood:** minimal, monochrome, developer-focused, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#60a5fa` · `#000000` · `#ffffff` · `#9ca3af` · `#1f2937` · `#4ade80` · `#d1d5db` · `#fbbf24` · `#6b7280` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans
- **Scale (largest breakpoint):** h1 64px · body 20px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Common gaps:** `gap-8`, `gap-16`

**Primary button**

```html
<a class="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all button-glow">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #60a5fa;
  --color-accent-2: #4ade80;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#60a5fa',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in DM Sans, centred, with grey (#9ca3af) body copy
- **Do:** Keep the page black and use the blue glow only around the code window
- **Do:** Make the primary button solid white with dark text
- **Don't:** Don't add gradients to the page background
- **Don't:** Don't use the blue glow on buttons or text
- **Don't:** Don't put more than one code window in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
