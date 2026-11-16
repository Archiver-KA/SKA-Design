# Design system — Photography Portfolio Website Template

`SN-W02164` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome system of near-black Inter headlines (#171717) on a pale ground (#fafafa), with the surname in light grey (#a3a3a3). A WebGL scene is set behind the hero. Pill navigation and rounded carousel controls are the only dark shapes, so the look stays gallery-like and the page is reading-light.

**Mood:** minimal, monochrome, gallery-like, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#e5e5e5` · `#262626` · `#525252` · `#737373` · `#a3a3a3` · `#fafafa` · `#f5f5f5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 72px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium backdrop-blur transition bg-white/90 text-neutral-900 hover:bg-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Call to action (`cta`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Logo cloud (`logo-cloud`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #a3a3a3;
  --color-border: #e5e5e5;
  --color-accent: #171717;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#a3a3a3',
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set display headings in Inter with a two-tone split between near-black and light grey
- **Do:** Use the black pill navbar (#171717) as the only dark block at the top
- **Do:** Keep the WebGL scene behind the hero, never behind the text
- **Don't:** Don't add colour accents; the palette is neutral greys
- **Don't:** Don't put more than one dark panel in a view
- **Don't:** Don't set body copy in #a3a3a3; it is for display words only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
