# Design system — PixelVerse Artistic Community Template

`SN-W03640` · events · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A minimal gallery page on a white ground, with a tightly set sans-serif headline centred over two lines and a short grey line beneath it. Primary and secondary actions are black and outlined pills, and a row of rounded category chips sits above a grid of colourful pixel-art thumbnails. The thumbnails are the only colour on the page, so the interface stays neutral.

**Mood:** minimal, clean, gallery-led, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#666666` | Secondary copy, captions |
| Border | `#eaeaea` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111111` · `#ffffff` · `#eaeaea` · `#666666` · `#f5f5f5` · `#333333` · `#888888` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1600px]`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="bg-[#111111] text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-[#333333] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Tailwind CSS v4 (browser)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #111111;
  --color-muted: #666666;
  --color-border: #eaeaea;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#111111',
    muted: '#666666',
    line: '#eaeaea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a tight sans-serif, centred, in near-black (#111111)
- **Do:** Keep the interface neutral so the artwork supplies the colour
- **Do:** Use small rounded filter chips above the gallery grid
- **Don't:** Don't add colour to the interface chrome
- **Don't:** Don't place the artwork inside heavy cards with shadows
- **Don't:** Don't set labels in bold weights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
