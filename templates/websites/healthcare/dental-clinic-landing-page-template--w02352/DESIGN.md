# Design system — Dental Clinic Landing Page Template

`SN-W02352` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A clean, professional dental page on white with near-black sans headlines and two blues: royal blue (#2563eb) for the primary button and links, and a blue-to-cyan gradient (#06b6d4) on the key phrase. A dark navy strip above the hero holds a membership offer, and the photo has a soft rounded frame. The palette is cool and orderly, with one contrasting navy button.

**Mood:** cool, orderly, clear, professional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#eff6ff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#06b6d4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#2563eb` · `#0f172a` · `#e2e8f0` · `#64748b` · `#eff6ff` · `#f8fafc` · `#06b6d4` · `#1e293b` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Inter
- **Loaded families:** Inter, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-primary/30`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primaryDark transition-colors duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Pricing (`pricing`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Team (`team`)
6. Services (`services`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #eff6ff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --color-accent-2: #06b6d4;
  --font-display: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#eff6ff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#e5e7eb',
    accent: '#2563eb',
    accent2: '#06b6d4',
  },
  fontFamily: { display: ['Poppins'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline with a blue-to-cyan gradient and keep the rest near-black.
- **Do:** Use royal blue (#2563eb) for the primary button and cyan (#06b6d4) only for highlights.
- **Do:** Use a dark navy (#0f172a) button for the secondary action in banners, such as View Plan Details.
- **Don't:** Don't add orange (#d97706); the page uses blues.
- **Don't:** Don't set headlines in a serif.
- **Don't:** Don't use cyan for body text; it is for highlights.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
