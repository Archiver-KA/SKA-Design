# Design system — Brand Designer Portfolio Template

`SN-W01842` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An off-white ground carries a heavy black sans headline with one soft grey italic word in a serif italic. Pastel blurred glows behind the type are the only colour. The contrast between the sans and the italic serif is the recognisable device.

**Mood:** airy, editorial, soft, contrast-driven

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfdfd` | Page ground |
| Surface | `#0f0f0f` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#6b7280` · `#9ca3af` · `#0f0f0f` · `#fdfdfd` · `#f3f4f6` · `#fff7ed` · `#eff6ff` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 160px · h2 48px · h3 48px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-screen-2xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group flex items-center gap-3 text-sm font-medium uppercase tracking-tight border border-black/10 px-8 py-4 rounded-full hover:bg-[#0f0f0f] hover:text-white transition-all duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. About (`about`)
6. Services (`services`)
7. Team (`team`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfdfd;
  --color-surface: #0f0f0f;
  --color-text: #000000;
  --color-muted: #9ca3af;
  --color-border: #000000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfdfd',
    surface: '#0f0f0f',
    ink: '#000000',
    muted: '#9ca3af',
    line: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Pair the heavy Inter headline with one grey italic word in a serif italic
- **Do:** Keep the ground near-white and let blurred glows supply the colour
- **Do:** Leave the headline on the left with generous space around it
- **Don't:** Don't set the headline in a single weight
- **Don't:** Don't use saturated colour blocks
- **Don't:** Don't apply the dark palette to the light hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
