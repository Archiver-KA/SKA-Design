# Design system — NOIR Luxury Fashion E-commerce Template

`SN-W01276` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A strictly monochrome luxury fashion page: a pure black (#000000) ground, white and pale grey type, and no accent colour. Large uppercase titles and a looping marquee band of words give it an editorial, runway feel. Category images sit in full-bleed tiles with minimal labels, so the imagery is the only colour on the page.

**Mood:** monochrome, editorial, dark, runway, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#737373` · `#a3a3a3` · `#171717` · `#e5e5e5` · `#262626` · `#d4d4d4` · `#0a0a0a` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 14px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1920px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1`

**Primary button**

```html
<a class="w-full bg-white text-black py-4 font-medium text-sm tracking-widest uppercase hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Menu list (`menu-list`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. Hero (`hero`)
7. Marquee (`marquee`)
8. Articles (`blog-articles`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
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
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep all colour in greys from #171717 to #e5e5e5, with text at #e5e5e5 on black
- **Do:** Use large uppercase marquee text as the section divider
- **Do:** Show category images full-bleed, with the label in small white type
- **Don't:** Don't introduce an accent colour; the design depends on monochrome
- **Don't:** Don't use light backgrounds for sections
- **Don't:** Don't set long paragraphs at display sizes; keep copy short above the grid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
