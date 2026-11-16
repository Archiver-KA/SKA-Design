# Design system — BetHouse Gaming Agency Landing Page Template

`SN-W01455` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `tr`

## Direction

A near-black ground ([#050505]) with an orange ([#f37021]) primary button and a large white centred headline in a heavy sans. An oversized brand name sits behind the copy at low contrast, and the nav is a plain row of links. The orange is the only saturated colour in the hero.

**Mood:** bold, dark, energetic, promotional, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f37021` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f37021` · `#000000` · `#050505` · `#080808` · `#fafafa` · `#0d0d0d` · `#22c55e` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Syncopate
- **Scale (largest breakpoint):** h1 24px · h2 60px · h3 48px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-none` (0)
- **Shadows:** `shadow-[0_-20px_30px_rgba(0,0,0,0.9)]`, `shadow-[0_0_15px_rgba(243,112,33,0.5)]`, `shadow-[0_-20px_30px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-2`, `gap-16`, `gap-8`

**Primary button**

```html
<a class="bg-[#F37021] text-white px-8 py-4 text-sm font-semibold tracking-tight hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Dashboard preview (`dashboard-preview`)
6. Marquee (`marquee`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f37021;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f37021',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f37021) for the primary button only
- **Do:** Set the headline in a heavy sans in white, centred
- **Do:** Keep the oversized brand name as a low-contrast ghost behind the hero
- **Don't:** Don't use the orange for body text
- **Don't:** Don't add a second saturated colour to the hero
- **Don't:** Don't place the ghost name at full contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
