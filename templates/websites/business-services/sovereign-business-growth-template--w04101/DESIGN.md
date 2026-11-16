# Design system — Sovereign Business Growth Template

`SN-W04101` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, high-contrast layout on a near-black ground (#131313), with gold (#f2ca50) used for the kicker, the primary button and key words in the headline. The headline is set in heavy, tightly spaced uppercase sans-serif at very large size, and a small red (#c5020b) badge adds urgency. Dark form panels give the page a sharp, assertive stance.

**Mood:** bold, assertive, high-contrast, urgent, gold-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#131313` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e5e2e1` | Headings and primary copy |
| Accent | `#f2ca50` | Primary action and highlights |
| Second accent | `#c5020b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e2e1` · `#3c2f00` · `#d0c5af` · `#131313` · `#000000` · `#2a2a2a` · `#4d4635` · `#f2ca50` · `#c5020b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Epilogue
- **Body:** Manrope
- **Loaded families:** Epilogue, Inter, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 20px
- **Weights in use:** semibold, extrabold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_20px_40px_rgba(0,0,0,0.4)]`, `shadow-[0_30px_60px_rgba(0,0,0,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold to-gold-dark text-[#3c2f00] px-6 py-2.5 font-headline font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-80 transition-all transform active:scale-90 scale-95 origin-right">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Testimonials (`testimonials`)
5. Logo cloud (`logo-cloud`)
6. Stats band (`stats`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #131313;
  --color-surface: #000000;
  --color-text: #e5e2e1;
  --color-accent: #f2ca50;
  --color-accent-2: #c5020b;
  --font-display: "Epilogue", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#131313',
    surface: '#000000',
    ink: '#e5e2e1',
    accent: '#f2ca50',
    accent2: '#c5020b',
  },
  fontFamily: { display: ['Epilogue'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use the gold (#f2ca50) for the primary button and one highlighted word per headline
- **Do:** Set headlines in heavy uppercase display type at large sizes
- **Do:** Keep the red (#c5020b) to small urgency badges only
- **Don't:** Don't use light backgrounds for main sections
- **Don't:** Don't add soft pastel tints or gradients behind the form
- **Don't:** Don't set body copy in the display face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
