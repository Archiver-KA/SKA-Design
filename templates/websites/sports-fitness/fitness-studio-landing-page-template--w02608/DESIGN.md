# Design system — Fitness Studio Landing Page Template

`SN-W02608` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark photographic studio page with a two-colour headline. The hero sits on a dimmed gym photograph, white Inter sets the main line, and a blue-to-green gradient picks out the brand name. The primary button uses an orange-to-pink gradient while the secondary button is a dark outline, so gradients carry the emphasis and the photograph carries the mood.

**Mood:** photographic, gradient, warm, bold, conversion-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#06b6d4` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#3b82f6` · `#94a3b8` · `#60a5fa` · `#475569` · `#334155` · `#f97316` · `#000000` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-orange-500/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full bg-white text-brand-dark font-semibold hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Team (`team`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #06b6d4;
  --color-surface: #334155;
  --color-text: #ffffff;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#06b6d4',
    surface: '#334155',
    ink: '#ffffff',
    muted: '#475569',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on a dimmed photograph and keep the headline in white Inter.
- **Do:** Use the blue-to-green gradient only on the brand name in the headline.
- **Do:** Use the orange-to-pink gradient only on the primary button.
- **Don't:** Don't put the gradient on body text.
- **Don't:** Don't add a second primary button style; the outline button is secondary.
- **Don't:** Don't place the photograph behind body copy without a dark overlay.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
