# Design system — Developer Portfolio Layout

`SN-W01964` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Neutral, utilitarian portfolio: a white ground with light grey panels and dark slate text, and no brand colour. Structure comes from a left sidebar and a two-column card grid separated by hairline borders. The type is the system sans-serif at a small headline size, so the page reads as a functional layout rather than a designed statement.

**Mood:** neutral, functional, quiet, structured, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f3f4f6` · `#111827` · `#e5e7eb` · `#374151` · `#6b7280` · `#4b5563` · `#ffffff` · `#9ca3af` · `#f9fafb` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 30px · h2 24px · h3 18px · body 14px
- **Weights in use:** normal, light

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-lg`
- **Common gaps:** `gap-2`, `gap-6`

**Primary button**

```html
<a class="block py-3 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-100 -ml-4 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Bento grid (`bento-grid`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f3f4f6',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use #e5e7eb hairline borders to separate cards and the sidebar
- **Do:** Keep titles in #111827 and descriptions in #6b7280
- **Do:** Mark the current sidebar section with the grey active state (#f3f4f6)
- **Don't:** Don't add a brand colour without a clear accent role; this page has none
- **Don't:** Don't use heavy shadows on cards; separation comes from borders
- **Don't:** Don't leave profile images as broken or grey placeholders

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
