# Design system — Richie Seeding Service Landing Page Template

`SN-W04081` · business-services · light mode · Sinera Atlas theme `route` · language `ru`

## Direction

A stark monochrome hero on white, where a very large black sans headline is set across two lines with a dash, and one black pill button carries the action. Key figures sit in a row beneath in heavy numerals with small grey captions. The layout is editorial and sparse, with no colour beyond black and grey.

**Mood:** stark, monochrome, editorial, sparse, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#737373` · `#ffffff` · `#a3a3a3` · `#f5f5f5` · `#e5e5e5` · `#262626` · `#fafafa` · `#d4d4d4` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[120px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-neutral-900 text-neutral-50 hover:bg-neutral-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Integrations (`integrations`)
5. Pricing (`pricing`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #171717;
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
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#171717',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline very large in black sans, broken across two lines
- **Do:** Use black (#171717) as the only solid colour, for the primary button and the figures
- **Do:** Place the key figures in a row under the hero with small grey captions
- **Don't:** Don't add a coloured accent; the page stays black and white
- **Don't:** Don't set the headline in a light weight; it works as a heavy display
- **Don't:** Don't place small captions over the media panel

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
