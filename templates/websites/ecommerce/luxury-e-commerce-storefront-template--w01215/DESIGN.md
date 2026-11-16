# Design system — Luxury E-commerce Storefront Template

`SN-W01215` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A clean, modern retail stance: a white page with a tight sans-serif headline in near-black, a small amber eyebrow, and a split hero with a grey image panel on the right. Black solid and outline buttons sit under short copy, and the navigation marks the active item with a single amber underline. The result is neutral and sober, with the amber used only as a small mark.

**Mood:** clean, modern, sober, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#d4d4d8` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#b45309` · `#a1a1aa` · `#d4d4d8` · `#71717a` · `#f4f4f5` · `#e4e4e7` · `#52525b` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 20px · h3 12px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-2 rounded-sm border border-zinc-200 bg-white px-3 py-2 text-xs font-medium uppercase tracking-wider text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 lg:hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #d4d4d8;
  --color-accent: #b45309;
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
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#d4d4d8',
    accent: '#b45309',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in tight sans-serif at large size, in near-black.
- **Do:** Use amber (#b45309) only for the active navigation underline and the eyebrow label.
- **Do:** Split the hero into a text panel and a full-height image panel on the right.
- **Don't:** Don't use the amber as a button fill; keep buttons black or outlined.
- **Don't:** Don't set the headline in a serif; keep it sans-serif.
- **Don't:** Don't leave the image panel as an empty grey block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
