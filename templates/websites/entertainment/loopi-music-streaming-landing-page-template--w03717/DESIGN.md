# Design system — Loopi Music Streaming Landing Page Template

`SN-W03717` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Black page with a large, left-aligned light sans headline in near-white over two lines, with pale grey supporting copy on the right. The primary action is an indigo-violet pill with a soft glow, and a dark product preview with faint violet light sits below. Purple carries the brand and the glow while the type stays neutral.

**Mood:** modern, atmospheric, polished, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0b0b10` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#f472b6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#0b0b10` · `#cbd5e1` · `#000000` · `#8b5cf6` · `#6366f1` · `#d4d4d4` · `#c7d2fe` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="px-3.5 py-2 rounded-lg ring-1 text-sm font-medium transition-colors bg-white/5 hover:bg-white/10 ring-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0b0b10;
  --color-text: #f4f4f5;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #f472b6;
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
    surface: '#0b0b10',
    ink: '#f4f4f5',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#f472b6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a light sans in near-white
- **Do:** Use the indigo (#6366f1) for the primary pill and its soft glow
- **Do:** Keep the product preview in a dark panel with faint violet light behind it
- **Don't:** Don't put the violet glow behind body text
- **Don't:** Don't set the hero headline in a decorative face
- **Don't:** Don't use square corners on the primary button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
