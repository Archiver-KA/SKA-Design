# Design system — Auto Body Shop Landing Page Template

`SN-W01100` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A direct service-business page on white, with a near-black two-line headline whose second line is red (#dc2626). The same red fills the primary button and the status tag, so one accent colour does all the signalling. Body copy is grey and plain, and the secondary action is a text link beside the red button.

**Mood:** direct, industrial, clear, confident, practical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#dc2626` · `#0f172a` · `#f1f5f9` · `#64748b` · `#94a3b8` · `#1e293b` · `#475569` · `#facc15` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-red-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="btn-pulse flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #dc2626;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#dc2626',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in red (#dc2626) only
- **Do:** Use red for the primary button and the status tag
- **Do:** Keep trust logos small and grey at the foot of the hero
- **Don't:** Don't use red for body text or links
- **Don't:** Don't tint the page background pink
- **Don't:** Don't add a second accent colour to buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
