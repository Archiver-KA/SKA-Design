# Design system — Fitness Coaching Landing Page Template

`SN-W02598` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `tr`

## Direction

A dark, centred coaching page on near-black with a heavy white Turkish headline in three lines and a bright green (#00ff88) primary button. The second line is set in grey, and a dark outlined secondary button sits beside the green. The green is the single accent and the only saturated colour in the hero, so the page reads as high-contrast and action-led.

**Mood:** high-contrast, action-led, dark, bold, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ff88` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#00ff88` · `#f5f5f5` · `#0a0a0a` · `#1e1e1e` · `#000000` · `#00cc6a` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(0,255,136,0.3)]`, `shadow-[0_0_25px_rgba(0,255,136,0.25)]`, `shadow-[0_0_15px_rgba(0,255,136,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto bg-[#00FF88] text-[#0A0A0A] py-4 px-8 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-[#00CC6A] hover:shadow-[0_0_25px_rgba(0,255,136,0.25)] flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #00ff88;
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
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#00ff88',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the bright green (#00ff88) for the primary button and the stat highlights only
- **Do:** Set the headline in heavy white sans-serif, with the second line in grey
- **Do:** Pair the green button with a dark outlined button to keep the hero balanced
- **Don't:** Don't use the green as a page background; it is the button colour
- **Don't:** Don't set body copy in green; it is for actions and key figures
- **Don't:** Don't add a second saturated colour; the page is black, white, grey and one green

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
