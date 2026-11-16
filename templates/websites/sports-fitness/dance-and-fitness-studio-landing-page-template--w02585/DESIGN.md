# Design system — Dance & Fitness Studio Landing Page Template

`SN-W02585` · sports-fitness · dark mode · Sinera Atlas theme `route` · language `de`

## Direction

A dark, neon-leaning dance studio page on a black ground with very large white sans-serif headlines. The second headline line is a magenta-to-violet gradient (#c026d3 family) that carries the accent, and the primary button is solid magenta. Rounded pill badges and a soft glow behind the hero keep it energetic but controlled.

**Mood:** energetic, neon, dark, playful, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c026d3` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a3a3a3` · `#d946ef` · `#e879f9` · `#d4d4d4` · `#c026d3` · `#525252` · `#050505` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Syne
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_10px_rgba(74,222,128,0.8)]`, `shadow-[0_0_40px_rgba(192,38,211,0.6)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-fuchsia-600 rounded-full font-semibold text-white overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(192,38,211,0.6)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Team (`team`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c026d3;
  --color-accent-2: #ec4899;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#c026d3',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the magenta gradient and keep the first line solid white
- **Do:** Use the magenta (#c026d3) for the primary button and the gradient only
- **Do:** Keep the badges as rounded pills and the hero on a dark ground
- **Don't:** Don't use magenta as a page background; the ground is black
- **Don't:** Don't set body copy in the gradient; it is for headline emphasis
- **Don't:** Don't flatten the glow behind the hero; the glow gives the hero its depth

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
