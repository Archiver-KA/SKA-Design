# Design system — najaf Designer Portfolio Landing Page

`SN-W02134` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark landing page on near-black (#000000) where orange (#f97316) and blue (#3b82f6) carry a gradient headline: the phrase 'with AI' fades from orange to blue. The headline is large, white and sans, and the coloured phrase is the single point of emphasis. Warm and cool glows sit in the hero corners behind the copy, and the nav and pill buttons stay small.

**Mood:** dark, energetic, techy, bold, gradient

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb923c` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#f97316` · `#fb923c` · `#737373` · `#3b82f6` · `#d4d4d4` · `#60a5fa` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 16px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_10px_30px_rgba(249,115,22,0.1)]`, `shadow-[0_10px_30px_rgba(59,130,246,0.1)]`, `shadow-[0_0_20px_rgba(34,197,94,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Stats band (`stats`)
5. Services (`services`)
6. Benefits (`benefits`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Testimonials (`testimonials`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb923c;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb923c',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each hero headline in an orange-to-blue gradient (#f97316 to #3b82f6), and keep the rest white.
- **Do:** Keep the warm glow on the left and the cool glow on the right of the hero, behind the copy.
- **Do:** Keep hero buttons as dark translucent pills with a thin border.
- **Don't:** Don't set this template on a light ground.
- **Don't:** Don't put the gradient on whole paragraphs; use it only on the emphasised phrase.
- **Don't:** Don't use orange for body text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
