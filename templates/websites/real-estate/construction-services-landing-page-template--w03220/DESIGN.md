# Design system — Construction Services Landing Page Template

`SN-W03220` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, centred, plain construction page with a near-black headline and dark buttons over an off-white ground (#fafaf9). The type is clean sans, set large at the top with a short grey descriptor below, and the layout is symmetrical under a white navigation bar. Colour is almost entirely neutral, so the page reads as calm and uncluttered.

**Mood:** calm, neutral, clean, symmetrical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#e7e5e4` · `#78716c` · `#a8a29e` · `#d6d3d1` · `#44403c` · `#fafaf9` · `#292524` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-stone-200/40`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all hover:shadow-lg hover:shadow-stone-200 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)
5. Logo cloud (`logo-cloud`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black sans, centred, with a short grey descriptor below it.
- **Do:** Use near-black (#1c1917) for the primary button and keep it the only dark fill.
- **Do:** Keep the page on the warm off-white ground (#fafaf9) with white cards and a thin border (#e7e5e4).
- **Don't:** Don't add a bright accent colour; the page is neutral apart from the dark buttons.
- **Don't:** Don't use dark ground sections; the page is light throughout.
- **Don't:** Don't lengthen the descriptor into a paragraph; the hero stays short.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
