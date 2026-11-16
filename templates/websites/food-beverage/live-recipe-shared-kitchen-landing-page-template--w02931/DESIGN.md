# Design system — Live Recipe Shared Kitchen Landing Page Template

`SN-W02931` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `ko`

## Direction

A clean product-style landing page on a cool slate ground (#e2e8f0) with a near-white surface and a navy (#1e293b) primary button. A pill-shaped badge with a small coral (#f87171) dot sits above a large Korean sans headline. Body copy is smaller and muted grey, so hierarchy comes from size and weight rather than colour.

**Mood:** clean, modern, calm, functional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e2e8f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#334155` · `#475569` · `#1c1917` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Pretendard
- **Loaded families:** Pretendard
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-slate-900/20`
- **Content width:** `max-w-6xl`, `max-w-[200px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #e2e8f0;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --color-accent-2: #f87171;
  --font-display: "a serif face", serif;
  --font-body: "Pretendard", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e2e8f0',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
    accent2: '#f87171',
  },
  fontFamily: { display: ['a serif face'], sans: ['Pretendard'] },
} }
```

## Do and don't

- **Do:** Use navy (#1e293b) for the primary button and headline emphasis
- **Do:** Put a small pill badge with a coral (#f87171) dot above the hero headline
- **Do:** Keep body copy in muted slate and headlines in navy
- **Don't:** Don't set the hero headline in white on the grey wash; the contrast is too low
- **Don't:** Don't add gradients behind text blocks
- **Don't:** Don't use the coral for buttons; it marks status only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
