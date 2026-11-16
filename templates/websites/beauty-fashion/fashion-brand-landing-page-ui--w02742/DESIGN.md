# Design system — Fashion Brand Landing Page UI

`SN-W02742` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Pure black page with a large serif headline in white, where the middle word is set in mid grey to create a tonal step. Thin circular outline icons for social links sit on the right, and the navigation is a plain black bar with small caps labels. The look is monochrome and quiet, letting the type and the black space do the work.

**Mood:** monochrome, quiet, dark, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#6b7280` · `#d1d5db` · `#4b5563` · `#000000` · `#111827` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 12px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-6`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="group flex items-center justify-center gap-3 py-4 px-8 rounded-full border border-gray-600 hover:border-white hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif in white, with the middle word in mid grey
- **Do:** Use thin outlined circular icons for social links
- **Do:** Keep the page on pure black (#000000) with grey secondary text (#9ca3af)
- **Don't:** Don't add colour; the page is black, white and grey only
- **Don't:** Don't centre the headline; it sits left of the centre
- **Don't:** Don't use filled buttons on the hero; the hero uses none

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
