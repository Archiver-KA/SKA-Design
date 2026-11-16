# Design system — Microcement Distributor Landing Page Template

`SN-W03314` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A white page with a heavy sans headline in near-black, where the second line is set in mid grey at the same size. Supporting copy is grey and short, and the primary action is a near-black rectangle with a light outlined partner button beside it. The page is purely neutral, and the product image sits in a light grey frame lower on the screen.

**Mood:** clean, technical, neutral, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#ffffff` · `#262626` · `#e5e5e5` · `#737373` · `#f5f5f5` · `#a3a3a3` · `#d4d4d4` · `#fafafa` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 12px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded hover:bg-neutral-800 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Benefits (`benefits`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in mid grey (#a3a3a3) at the same size as the first.
- **Do:** Use a near-black filled button with a light outlined button beside it.
- **Do:** Frame product images in a light grey box with a hairline edge.
- **Don't:** Don't introduce a colour accent; the page is neutral throughout.
- **Don't:** Don't set the first headline line in grey; it stays near-black.
- **Don't:** Don't add a coloured background to the image frame; it stays light grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
