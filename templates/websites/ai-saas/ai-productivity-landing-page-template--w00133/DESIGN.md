# Design system — AI Productivity Landing Page Template

`SN-W00133` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark, warm-black brand page with oversized uppercase headlines in light grey, stacked in three lines and right-aligned. A warm orange glow leaks from the top right and is the only colour, while small translucent cards with a single large statistic carry the supporting detail. The effect is moody and editorial, closer to a manifesto than a product pitch.

**Mood:** moody, editorial, warm, manifesto

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#6b7280` · `#9ca3af` · `#ea580c` · `#000000` · `#4b5563` · `#d1d5db` · `#7c2d12` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 96px · h3 48px · body 18px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-[200px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-6`, `gap-3`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #e5e7eb;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#e5e7eb',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero in large uppercase sans, stacked and right-aligned
- **Do:** Keep the orange glow in the corner as the only colour in the hero
- **Do:** Use small light cards with one large statistic for supporting detail
- **Don't:** Don't add hues beside the warm orange glow
- **Don't:** Don't set long body text in uppercase
- **Don't:** Don't use bright white backgrounds; the page is dark throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
