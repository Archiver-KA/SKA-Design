# Design system — Streetwear E-commerce Website Template

`SN-W01327` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A stark streetwear hero that is black, white and outline. 'COMMUNITY' is solid white in heavy uppercase, and 'CULTURE' below it is the same size but only outlined, so one phrase plays solid against line. A black utility strip sits above a white navigation bar, and the buttons are a white block and an outlined pill. Colour is absent; the stroke and the type do the work.

**Mood:** stark, graphic, bold, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#000000` · `#f3f4f6` · `#9ca3af` · `#e5e7eb` · `#d1d5db` · `#374151` · `#4b5563` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 144px · h2 36px · h3 16px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all hover:gap-5 w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Logo cloud (`logo-cloud`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Call to action (`cta`)
7. Feature grid (`features`)
8. Articles (`blog-articles`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f3f4f6;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f3f4f6',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one headline word solid and the next outlined, in heavy uppercase sans-serif
- **Do:** Keep the hero black (#000000) with white type and a white primary button
- **Do:** Keep the utility strip above the white navigation bar, in small uppercase text
- **Don't:** Don't add colour to the hero; black, white and grey carry the look
- **Don't:** Don't fill the outlined word; the stroke is the effect
- **Don't:** Don't put colour on the buttons; the white block and the outline are enough

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
