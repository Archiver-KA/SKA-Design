# Design system — Luxury Carpet E-commerce Landing Page Template

`SN-W01213` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A quiet, heritage stance: a grey hero field with a large white serif headline centred over it, small spaced uppercase labels above, and a service strip of small uppercase text across the top. Buttons are square-cornered, one solid black and one outline.

**Mood:** heritage, quiet, formal, rectilinear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f5f5f5` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#fca5a5` | Primary action and highlights |
| Second accent | `#f5deb3` | Supporting highlights |

Palette by frequency of use: `#f5f5f5` · `#000000` · `#ffffff` · `#171717` · `#525252` · `#737373` · `#262626` · `#a3a3a3` · `#404040` · `#fca5a5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-[1px]` (1px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1600px]`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex h-12 min-w-[160px] items-center justify-center border px-8 text-xs uppercase tracking-widest transition-all border-black bg-black text-neutral-100 hover:bg-neutral-100 hover:border-neutral-100 hover:text-black">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Product grid (`product-grid`)
6. Timeline (`timeline`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #f5f5f5;
  --color-border: #262626;
  --color-accent: #fca5a5;
  --color-accent-2: #f5deb3;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#f5f5f5',
    line: '#262626',
    accent: '#fca5a5',
    accent2: '#f5deb3',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large serif, centred, with small spaced uppercase labels above.
- **Do:** Use square-cornered buttons: solid black for the primary and an outline for the second.
- **Do:** Keep the top service strip in small uppercase text above the navigation.
- **Don't:** Don't round the buttons; they are rectangular.
- **Don't:** Don't treat the grey hero field as the brand colour.
- **Don't:** Don't add accent colour; keep to black, white and grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
