# Design system — Fitness E-commerce Landing Page Template

`SN-W01159` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A high-contrast fitness page is built on black and white: a full-bleed, desaturated athletic photograph carries a heavy uppercase headline in white, and the buttons are square white and black blocks. A black announcement bar and nav frame the page. There is no chroma in the layout; energy comes from the photograph and from the weight and capitals of the type.

**Mood:** bold, monochrome, athletic, blunt

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#e4e4e7` · `#18181b` · `#a1a1aa` · `#71717a` · `#f4f4f5` · `#52525b` · `#fafafa` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-md`, `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto bg-zinc-900 text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-zinc-800 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e4e4e7;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #000000;
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
    surface: '#e4e4e7',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase Inter, short and declarative.
- **Do:** Use square-cornered buttons: white on photography, black on light sections.
- **Do:** Keep the hero photograph desaturated and full-bleed, with a dark overlay under the headline.
- **Don't:** Don't introduce navy (#1e3a8a); the page is black and white only.
- **Don't:** Don't use rounded pill buttons; the style is square.
- **Don't:** Don't set headlines in mixed case; the uppercase is part of the identity.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
