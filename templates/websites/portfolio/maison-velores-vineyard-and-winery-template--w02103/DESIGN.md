# Design system — Maison Velorès Vineyard & Winery Template

`SN-W02103` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bold, monochrome vineyard page on a pale warm ground [#eae8e3], with very large heavy black sans headlines stacked over three lines that run into the bottom edge of the first screen. A thin, spaced nav and small numbered tabs sit beneath, and a single black block with tiny coordinate figures on the right is the only solid element. The effect is poster-like and deliberately stark.

**Mood:** poster-like, stark, bold, monochrome, grounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#eae8e3` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#d4d4d8` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#111111` · `#71717a` · `#eae8e3` · `#52525b` · `#d4d4d8` · `#27272a` · `#3f3f46` · `#000000` · `#d3d0c9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Oswald, Space Mono, Inter
- **Scale (largest breakpoint):** h1 160px · h2 72px · h3 24px · body 16px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1px]` (1px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[100rem]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-16`, `gap-8`

**Primary button**

```html
<a class="w-full py-3 border border-[#111111] text-xs font-mono tracking-widest uppercase hover:bg-[#111111] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Call to action (`cta`)
5. Stats band (`stats`)
6. Product grid (`product-grid`)
7. Articles (`blog-articles`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #eae8e3;
  --color-surface: #111111;
  --color-text: #111111;
  --color-muted: #71717a;
  --color-border: #d4d4d8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#eae8e3',
    surface: '#111111',
    ink: '#111111',
    muted: '#71717a',
    line: '#d4d4d8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy black sans at very large size, stacked over three lines.
- **Do:** Use small numbered tabs with muted captions beneath the hero as the section index.
- **Do:** Keep solid black blocks rare; one per screen, used for a small detail panel.
- **Don't:** Don't use a dark ground; the first screen is pale.
- **Don't:** Don't add serif type; the headlines are sans-serif only.
- **Don't:** Don't add colour; the palette is black on warm off-white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
