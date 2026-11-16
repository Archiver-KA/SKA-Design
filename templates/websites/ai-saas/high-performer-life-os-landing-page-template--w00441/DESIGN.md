# Design system — High-Performer Life OS Landing Page Template

`SN-W00441` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a heavy white sans headline set in several blocks, and its final clause fades into a silver-grey gradient, which gives the statement weight and drama. A thin rounded nav bar floats at the top, and a small outlined tag sits above the copy in muted grey. The layout is centred and text-led, and the diagnostic action is placed on the first screen.

**Mood:** dramatic, dark, authoritative, text-led, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#18181b` · `#52525b` · `#d4d4d8` · `#000000` · `#3b82f6` · `#a855f7` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-inner`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Stats band (`stats`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #ef4444;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, with the final clause in a silver-grey gradient
- **Do:** Float the nav in a thin rounded bar above the hero
- **Do:** Keep the eyebrow tag small, outlined and in muted grey
- **Don't:** Don't add accent colour; the page is black, white and silver
- **Don't:** Don't set the headline in a light weight
- **Don't:** Don't switch to a light page; the look is dark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
