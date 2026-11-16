# Design system — Camping Resort Landing Page Template

`SN-W03034` · travel · light mode · Sinera Atlas theme `dwell` · language `da`

## Direction

A muted grey-green landscape gradient fills the hero, with a thin white headline: a light sans on the first line and an italic serif on the second that fades into the background. A white rounded search panel holds four fields and a deep forest-green button, the only strong colour in view. The page feels calm, pale and Scandinavian.

**Mood:** calm, pale, scandinavian, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f9f7` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2937` | Headings and primary copy |
| Muted text | `#96948d` | Secondary copy, captions |
| Border | `#96948d` | Hairlines, dividers, outlines |
| Accent | `#2c4a3b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#96948d` · `#2c4a3b` · `#1f2937` · `#f9f9f7` · `#eae6df` · `#000000` · `#4a7a62` · `#c26d53`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-28`, `py-16`
- **Common gaps:** `gap-5`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center px-6 py-2.5 bg-white text-forest text-base font-medium rounded-full hover:bg-sand transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Contact form (`contact-form`)
6. Map / location (`map-location`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9f9f7;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #96948d;
  --color-border: #96948d;
  --color-accent: #2c4a3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f9f7',
    surface: '#ffffff',
    ink: '#1f2937',
    muted: '#96948d',
    line: '#96948d',
    accent: '#2c4a3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in light-weight white type, with the second line in italic
- **Do:** Use the deep green (#2c4a3b) for the search button and primary actions
- **Do:** Put the search form in a single rounded white panel
- **Don't:** Don't use terracotta (#c26d53) in the hero; green is the accent there.
- **Don't:** Don't set white type on pale grey without the green gradient behind it
- **Don't:** Don't use strong saturated colour; the hero stays desaturated

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
