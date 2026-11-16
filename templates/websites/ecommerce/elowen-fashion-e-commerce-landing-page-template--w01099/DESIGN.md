# Design system — ELOWEN Fashion E-commerce Landing Page Template

`SN-W01099` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A minimal fashion store on white, where the hero fades from white to a soft grey at its base and the headline sits in nearly the same grey tones. Actions are one solid near-black button and a thin outlined secondary. Category links run as a quiet tab row at the bottom of the hero, and the page relies on whitespace and type rather than colour.

**Mood:** minimal, airy, quiet, monochrome, considered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#e4e4e7` · `#f4f4f5` · `#a1a1aa` · `#52525b` · `#d4d4d8` · `#000000` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 14px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-wider`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="bg-white text-zinc-950 px-8 py-3 rounded text-sm font-medium hover:bg-zinc-100 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Newsletter signup (`newsletter`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
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
    line: '#e4e4e7',
    accent: '#18181b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use a white-to-grey fade for hero backgrounds
- **Do:** Keep primary buttons solid near-black (#18181b)
- **Do:** Run category links as a quiet tab row with a thin underline
- **Don't:** Don't introduce accent colour; the page is black, white and grey
- **Don't:** Don't set hero text in grey over the fade without checking contrast
- **Don't:** Don't use heavy type for the category tabs

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
