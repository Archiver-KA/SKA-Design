# Design system — Solar Energy Landing Page Template

`SN-W04099` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

The design is warm and photographic, with a full-bleed sunflower image behind a very large lowercase sans headline in white. Navigation sits in translucent pill-shaped glass buttons, and the surfaces stay near-white (#ffffff) so the photography carries the colour. The soft rounded panels give the page a friendly, approachable tone.

**Mood:** photographic, soft, rounded, airy, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e6ebe5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f251a` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1a3a2f` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#0f251a` · `#d4d4d4` · `#e5e5e5` · `#525252` · `#f5f5f5` · `#a3a3a3` · `#404040` · `#f0f4ef`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h2 96px · h3 30px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2.5rem]` (2.5rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-[100rem]`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-[#0f251a] px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-100 transition-colors whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Bento grid (`bento-grid`)
3. Product grid (`product-grid`)
4. FAQ (`faq`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #e6ebe5;
  --color-surface: #ffffff;
  --color-text: #0f251a;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #1a3a2f;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e6ebe5',
    surface: '#ffffff',
    ink: '#0f251a',
    muted: '#525252',
    line: '#ffffff',
    accent: '#1a3a2f',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the main headline in one very large, bold, lowercase sans-serif
- **Do:** Keep navigation in translucent pill-shaped glass buttons
- **Do:** Let full-bleed photography fill the hero behind the text
- **Don't:** Don't add heavy borders or hard drop shadows to the glass buttons
- **Don't:** Don't swap the system sans-serif for a decorative face
- **Don't:** Don't use saturated colours outside the photography

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
