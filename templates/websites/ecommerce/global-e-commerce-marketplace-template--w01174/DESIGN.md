# Design system — Global E-Commerce Marketplace Template

`SN-W01174` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A marketplace home page built on white and light grey, with a thin utility bar above a single centred search field and a red-accented primary action. The hero is a bordered, rounded panel with a dark headline and a red button, and a category sidebar sits beside a dense product grid of light-grey cards. Red (#dc2626) serves as both brand colour and sale tag.

**Mood:** functional, dense, clear, commercial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#171717` · `#ffffff` · `#dc2626` · `#737373` · `#d4d4d4` · `#f5f5f5` · `#e5e5e5` · `#fafafa` · `#525252` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 36px · h2 20px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-1`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="absolute inset-y-1 right-1 text-white px-4 rounded-full text-xs font-medium transition-colors bg-red-600 hover:bg-red-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)
5. Sign-in form (`auth-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #dc2626;
  --color-accent-2: #2563eb;
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
    surface: '#fafafa',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#dc2626',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use red (#dc2626) for the primary action and for the sale and top-rated tags only.
- **Do:** Keep the search field centred in the header, under a single line of utility links.
- **Do:** Use a left category sidebar beside a dense grid of light-grey product cards.
- **Don't:** Don't use red for large areas; it is for actions and tags.
- **Don't:** Don't add extra accent colours to tags; they stay red or white.
- **Don't:** Don't remove the category sidebar; it is the grid's navigation.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
