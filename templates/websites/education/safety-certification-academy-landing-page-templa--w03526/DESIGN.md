# Design system — Safety Certification Academy Landing Page Template

`SN-W03526` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A formal, credential-focused page on white, with a faint dot grid across the hero. Inter sets the headline in heavy near-black, with the subject phrase in deep navy (#1f3868), and grey body text supports it. Navy buttons with rounded corners carry the main actions, and a small verification card in the hero reinforces the authority of the subject. The look is institutional and sober.

**Mood:** formal, credible, institutional, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1f3868` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f3868` · `#0f172a` · `#2c3e2d` · `#64748b` · `#475569` · `#e2e8f0` · `#f8fafc` · `#1e293b` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-primary/20 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Stats band (`stats`)
6. Timeline (`timeline`)
7. Team (`team`)
8. Testimonials (`testimonials`)
9. Bento grid (`bento-grid`)
10. About (`about`)
11. Call to action (`cta`)
12. Product grid (`product-grid`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1f3868;
  --color-accent-2: #16a34a;
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
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1f3868',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy Inter, with the subject phrase in deep navy (#1f3868)
- **Do:** Use the navy (#1f3868) for primary buttons and the main accent only
- **Do:** Place credential and verification details on small white cards with thin borders
- **Don't:** Don't use bright colours for headings or decorative shapes
- **Don't:** Don't remove the faint dot grid from the hero background
- **Don't:** Don't use playful icons or emoji in credential content

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
