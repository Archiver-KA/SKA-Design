# Design system — Neon Signage Services Landing Page Template

`SN-W04030` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, photograph-led page where a dimmed interior image fills the top of the page under a light translucent navigation bar. The wordmark is a serif capital set in the centre, and navigation is small, widely spaced uppercase sans-serif. Warm cream accents and square-edged outlined buttons keep the tone editorial and restrained.

**Mood:** editorial, dark, restrained, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e7e5e4` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ede7de` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#57534e` · `#e7e5e4` · `#000000` · `#f9f8f6` · `#f6f4f1` · `#ede7de`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 36px · body 20px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2px]` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_18px_60px_rgba(0,0,0,0.06)]`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-12`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="border border-primary/30 px-5 py-2 text-xs uppercase tracking-widest font-medium rounded-[2px] hover:bg-primary hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Testimonials (`testimonials`)
7. About (`about`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #e7e5e4;
  --color-border: #e7e5e4;
  --color-accent: #ede7de;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#e7e5e4',
    line: '#e7e5e4',
    accent: '#ede7de',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Keep navigation in small uppercase with wide letter spacing
- **Do:** Set the wordmark in Playfair Display capitals
- **Do:** Use the warm cream (#ede7de) for buttons and rules on dark imagery
- **Don't:** Don't brighten the hero photograph; keep it dimmed
- **Don't:** Don't round the outlined buttons; keep their corners square
- **Don't:** Don't add saturated colour to the interface

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
