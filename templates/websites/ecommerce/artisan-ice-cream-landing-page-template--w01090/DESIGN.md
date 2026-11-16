# Design system — Artisan Ice Cream Landing Page Template

`SN-W01090` · ecommerce · light mode · Sinera Atlas theme `market` · language `en`

## Direction

A playful dessert page on warm cream (#fff9f0), with a pink (#ff6b9d) primary button and a pink eyebrow line above a bold headline. The hero photograph is tilted slightly inside a rounded frame, so the layout feels hand-placed rather than gridded. Mint and yellow appear only as small dots and background wash, adding lightness without competing with the pink.

**Mood:** playful, warm, light, friendly, sweet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff9f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d3436` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6b9d` | Primary action and highlights |
| Second accent | `#ffd93d` | Supporting highlights |

Palette by frequency of use: `#2d3436` · `#ff6b9d` · `#ffffff` · `#fff9f0` · `#7dd3c0` · `#ffd93d` · `#e5558a` · `#c9b8ff` · `#e8f8f5` · `#ffe5ed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Pacifico, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_12px_32px_rgba(0,0,0,0.08)]`, `shadow-lg`
- **Content width:** `max-w-[1200px]`, `max-w-[500px]`
- **Section padding:** `py-24`, `py-[14px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="hidden lg:flex items-center bg-[#FF6B9D] text-white text-sm font-semibold py-3 px-6 rounded-full hover:bg-[#E5558A] transition-all duration-300 transform hover:scale-105 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fff9f0;
  --color-surface: #ffffff;
  --color-text: #2d3436;
  --color-border: #ffffff;
  --color-accent: #ff6b9d;
  --color-accent-2: #ffd93d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff9f0',
    surface: '#ffffff',
    ink: '#2d3436',
    line: '#ffffff',
    accent: '#ff6b9d',
    accent2: '#ffd93d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use pink (#ff6b9d) for the primary button and the eyebrow line
- **Do:** Tilt the hero photograph slightly inside a rounded frame
- **Do:** Keep mint and yellow to small dots and background wash
- **Don't:** Don't set body text in pink
- **Don't:** Don't straighten the hero photograph into a flat grid
- **Don't:** Don't use more than one button colour in a section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
