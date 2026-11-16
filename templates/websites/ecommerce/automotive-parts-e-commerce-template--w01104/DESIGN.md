# Design system — Automotive Parts E-commerce Template

`SN-W01104` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A cinematic dark product page where a full-bleed street photograph sits behind a dimmed overlay, so the car is the hero rather than a product grid. The wordmark sets its second word in red (#ff3c3c), and red is kept to the brand mark and small status dots. A green circular contact button floats at the bottom right as the one contact cue.

**Mood:** cinematic, dark, sleek, moody, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#1a1d21` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#b0b0b0` | Secondary copy, captions |
| Border | `#2a2e34` | Hairlines, dividers, outlines |
| Accent | `#ff3c3c` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#b0b0b0` · `#ffffff` · `#2a2e34` · `#0d0d0d` · `#ff3c3c` · `#1a1d21` · `#4a4e54` · `#c62828` · `#450a0a` · `#022c22`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_30px_rgba(255,60,60,0.05)]`, `shadow-[0_0_20px_rgba(37,211,102,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-[#FF3C3C] text-[#FFFFFF] font-medium text-sm rounded-none hover:bg-[#C62828] transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Marquee (`marquee`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #1a1d21;
  --color-text: #ffffff;
  --color-muted: #b0b0b0;
  --color-border: #2a2e34;
  --color-accent: #ff3c3c;
  --color-accent-2: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#1a1d21',
    ink: '#ffffff',
    muted: '#b0b0b0',
    line: '#2a2e34',
    accent: '#ff3c3c',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the photograph full-bleed and dimmed under a dark overlay
- **Do:** Use red (#ff3c3c) only for the second wordmark word and small status dots
- **Do:** Fix the green contact button at the bottom right
- **Don't:** Don't put red on large fills or buttons
- **Don't:** Don't lighten the overlay until the photograph competes with the text
- **Don't:** Don't add a second accent colour to the nav

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
