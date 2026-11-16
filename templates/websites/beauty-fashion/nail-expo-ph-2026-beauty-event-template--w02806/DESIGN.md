# Design system — Nail Expo PH 2026 Beauty Event Template

`SN-W02806` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A promotional event page on a near-black ground (#0a0a0a) with white Instrument Serif headlines. Keywords in the headline are coloured by a pink-to-violet-to-cyan gradient, and large blurred glow shapes sit behind the hero with a faded oversized year numeral. Pink (#ec4899) is the main action colour, shown on a pill-shaped Secure Your Seat button.

**Mood:** promotional, glossy, gradient-led, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#0a0a0a` · `#f472b6` · `#d1d5db` · `#a855f7` · `#9ca3af` · `#06b6d4` · `#c084fc` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Inter, Montserrat, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_#ec4899]`, `shadow-[0_0_15px_#8b5cf6]`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="group flex items-center gap-2 md:px-5 md:py-2.5 hover:bg-pink-500 transition-all shrink-0 text-sm font-medium text-white bg-pink-600 rounded-full pt-2 pr-4 pb-2 pl-4 glow-effect shadow-[0_0_15px_rgba(236,72,153,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Testimonials (`testimonials`)
5. Feature grid (`features`)
6. Team (`team`)
7. Pricing (`pricing`)
8. Comparison (`comparison`)
9. FAQ (`faq`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ec4899;
  --color-accent-2: #a855f7;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ec4899',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Set headline keywords in Instrument Serif italic with the pink-to-violet gradient
- **Do:** Use the pink (#ec4899) for the primary pill button and nothing else large
- **Do:** Place blurred glow shapes behind the hero, not behind body copy
- **Don't:** Don't use #f43f5e as the page ground; the ground is near-black
- **Don't:** Don't apply gradient text to body copy or small labels
- **Don't:** Don't use square button corners; pills are the shape of this design

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
