# Design system — Event Marketplace Landing Page Template

`SN-W01152` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A soft, product-led marketplace landing page on a near-white ground with blurred pastel glows behind the hero. The second headline line carries a gradient from purple (#6b46c1) to orange (#ed8936), making it the one expressive moment. Buttons are pills, with a solid purple primary and a white outline secondary, so purple reads as the action colour and orange as the highlight.

**Mood:** soft, modern, energetic, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#6b46c1` | Primary action and highlights |
| Second accent | `#6b46c1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#ed8936` · `#6b46c1` · `#64748b` · `#e2e8f0` · `#94a3b8` · `#475569` · `#cbd5e1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.02)]`, `shadow-[0_4px_20px_rgb(0,0,0,0.02)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 hover:scale-105 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Comparison (`comparison`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Newsletter signup (`newsletter`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #6b46c1;
  --color-accent-2: #6b46c1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#6b46c1',
    accent2: '#6b46c1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the purple (#6b46c1) for the primary button; reserve the orange (#ed8936) for the headline gradient and highlights.
- **Do:** Keep the blurred glow shapes behind the hero only, at low opacity.
- **Do:** Set headlines in Inter with tight tracking, and apply the gradient to one line at a time.
- **Don't:** Don't fill whole sections with the gradient; it is limited to the hero headline.
- **Don't:** Don't use sharp-cornered buttons; the style relies on fully rounded pills.
- **Don't:** Don't use more than one gradient headline on the same screen.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
