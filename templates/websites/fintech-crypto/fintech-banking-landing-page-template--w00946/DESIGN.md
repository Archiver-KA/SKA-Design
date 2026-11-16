# Design system — Fintech Banking Landing Page Template

`SN-W00946` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `cs`

## Direction

A light, plain page on off-white (#fafafa) with white cards and near-black type. Gold (#f59e0b) appears only in small pill badges, and the primary button is dark rather than gold. The headline is a heavy system sans-serif set large and left-aligned, with a product card on the right showing the account in a bordered panel.

**Mood:** plain, trustworthy, light, functional, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#6b7280` · `#f59e0b` · `#f3f4f6` · `#fde68a` · `#fef3c7` · `#f9fafb` · `#9ca3af` · `#d97706`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h3 14px · body 14px
- **Weights in use:** semibold, normal, light
- **Letter spacing:** `tracking-wider`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[480px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gray-900 rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] hover:bg-gray-800 hover:shadow-[0_12px_25px_-6px_rgba(0,0,0,0.4)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #f59e0b;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use gold (#f59e0b) only for small badges and labels.
- **Do:** Keep primary buttons dark (#111827) with white text.
- **Do:** Set headings in a heavy system sans-serif at large size on the left.
- **Don't:** Don't use gold for large fills or primary buttons.
- **Don't:** Don't add decorative imagery behind the hero text.
- **Don't:** Don't use a decorative display face for headlines.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
