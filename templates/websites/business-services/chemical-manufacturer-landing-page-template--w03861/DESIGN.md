# Design system — Chemical Manufacturer Landing Page Template

`SN-W03861` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, atmospheric hero with a deep teal and navy gradient and soft glowing light bands behind centred text. Headlines are large white sans-serif, with the lower line fading to silver. The copy stays short and quiet, so the glow shapes do the decorating and the layout relies on space rather than colour blocks.

**Mood:** atmospheric, scientific, calm, dark, luminous

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101820` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#9adbe8` | Primary action and highlights |
| Second accent | `#7c2d12` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#101820` · `#d4d4d4` · `#6aa1a4` · `#a3a3a3` · `#9adbe8` · `#171717` · `#f5f5f5` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 48px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="px-4 py-2 bg-[#101820] text-white rounded-full hover:bg-[#6aa1a4] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Articles (`blog-articles`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #101820;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #9adbe8;
  --color-accent-2: #7c2d12;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#101820',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#9adbe8',
    accent2: '#7c2d12',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on a deep teal-to-navy gradient based on #101820
- **Do:** Set headlines in heavy sans-serif with the lower line faded
- **Do:** Place glow shapes behind content only, never over the text
- **Don't:** Don't put a light background behind the hero; the page is dark
- **Don't:** Don't add bright saturated colours; the palette stays cool
- **Don't:** Don't put a solid heavy frame around the navigation; it sits on a translucent bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
