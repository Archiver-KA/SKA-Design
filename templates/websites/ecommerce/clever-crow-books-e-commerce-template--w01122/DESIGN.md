# Design system — Clever Crow Books E-commerce Template

`SN-W01122` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A bookstore page with a dark green announcement bar and a warm off-white header, then a deep brown full-width hero carrying a centred white serif headline. The header holds a wide search field with a dark green search button, and the navigation is a single line of small sans-serif links. Green is used for the chrome and brown for the feature panel, so the page feels literary and calm.

**Mood:** literary, calm, traditional, bookish

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c463f` | Primary action and highlights |
| Second accent | `#1c463f` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#e2e8f0` · `#57534e` · `#64748b` · `#1c1917` · `#1c463f` · `#94a3b8` · `#e7e5e4` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 30px · h3 30px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[600px]`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-1`, `gap-x-6`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-white px-8 py-3.5 text-sm font-medium text-stone-900 shadow-sm hover:bg-stone-100 transition-colors uppercase tracking-wider rounded-md">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Booking form (`booking`)
6. Articles (`blog-articles`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9f8f6;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #64748b;
  --color-border: #e7e5e4;
  --color-accent: #1c463f;
  --color-accent-2: #1c463f;
  --font-display: "a serif face", serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f6',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#64748b',
    line: '#e7e5e4',
    accent: '#1c463f',
    accent2: '#1c463f',
  },
  fontFamily: { display: ['a serif face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the dark green (#1c463f) for the announcement bar and the search button
- **Do:** Set the hero headline in a white serif, centred on a solid brown field
- **Do:** Keep the navigation as one line of small sans-serif links under the search
- **Don't:** Don't use the pale slate (#e2e8f0) as a button colour; it reads as a border tone
- **Don't:** Don't place a photograph behind the hero text
- **Don't:** Don't stack more than one solid colour block in the header

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
