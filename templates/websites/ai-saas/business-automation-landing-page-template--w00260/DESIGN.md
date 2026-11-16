# Design system — Business Automation Landing Page Template

`SN-W00260` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black loading screen shows a faint, oversized grey '100%' figure over a single line of small monospaced caps, with nothing else on screen. The page's typographic voice is Inter with a very large headline on a dark surface. The look is modest and dark.

**Mood:** dark, minimal, transitional, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020203` | Page ground |
| Surface | `#050507` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#020203` · `#050507` · `#08080a` · `#000000` · `#0a0a0c` · `#e5e5e5` · `#22c55e` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Share Tech Mono
- **Scale (largest breakpoint):** h1 112px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_#4FD1C5]`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-40`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="nav-link px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. FAQ (`faq`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020203;
  --color-surface: #050507;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020203',
    surface: '#050507',
    ink: '#ffffff',
    muted: '#e5e5e5',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the loading screen on #020203 with the oversized figure at low contrast
- **Do:** Keep the loader label in small monospaced caps
- **Do:** Show the loader only briefly before the hero appears
- **Don't:** Don't use the loading state as the hero; it is transitional
- **Don't:** Don't put bright colour on the loader; it stays grey
- **Don't:** Don't set the oversized figure at full contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
