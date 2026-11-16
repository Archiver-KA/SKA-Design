# Design system — Marutama Ramen

`SN-W02944` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark ramen-shop page whose top is almost all a dim, close-up photograph of a bowl with egg and noodles. The ground is near-black (#0a0a0a) and the page leans on food photography rather than on colour or type.

**Mood:** dark, appetising, bold, moody

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#fafafa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5c518` | Primary action and highlights |
| Second accent | `#f5c518` | Supporting highlights |

Palette by frequency of use: `#d9281c` · `#fafafa` · `#ffffff` · `#a3a3a3` · `#0a0a0a` · `#1a1a1a` · `#202020` · `#f5c518` · `#b01e14`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 60px · body 16px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-xl`, `shadow-[0_10px_40px_rgba(217,40,28,0.3)]`, `shadow-[0_0_20px_rgba(217,40,28,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-[600px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-5`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="magnetic-btn inline-flex items-center justify-center px-8 py-4 text-lg font-normal text-[#FAFAFA] bg-[#D9281C] hover:bg-[#b01e14] rounded-full transition-all duration-300 hover:shadow-[0_10px_40px_rgba(217,40,28,0.3)] group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #f5f5f5;
  --color-muted: #fafafa;
  --color-border: #ffffff;
  --color-accent: #f5c518;
  --color-accent-2: #f5c518;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#f5f5f5',
    muted: '#fafafa',
    line: '#ffffff',
    accent: '#f5c518',
    accent2: '#f5c518',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Place food photography at full width and darken it so it sits on near-black
- **Do:** Keep text off the photo or on a dark overlay only
- **Do:** Use the yellow (#f5c518) for buttons and one highlight per section
- **Don't:** Don't use the red (#d9281c) as a page ground; the ground is near-black.
- **Don't:** Don't add light panels over the photo
- **Don't:** Don't rely on typography for the hero; photography carries it.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
