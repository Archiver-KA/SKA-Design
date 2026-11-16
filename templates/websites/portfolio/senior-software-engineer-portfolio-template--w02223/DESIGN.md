# Design system — Senior Software Engineer Portfolio Template

`SN-W02223` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A charcoal preloader shows a large white bold percentage counter, with a hairline rule beneath it. The loader is minimal and centred, with the counter as its only element of visual weight.

**Mood:** minimal, dark, unconfirmed, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#555555` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#eb3a14` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#eb3a14` · `#ffffff` · `#555555` · `#000000` · `#111111` · `#d1d5db` · `#f5f5f5` · `#9ca3af` · `#e5e7eb` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 16px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1800px]`, `max-w-[1200px]`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-200 magnetic-btn shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Case studies (`case-studies`)
5. FAQ (`faq`)
6. Stats band (`stats`)
7. Bento grid (`bento-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #555555;
  --color-border: #000000;
  --color-accent: #eb3a14;
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
    background: '#111111',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#555555',
    line: '#000000',
    accent: '#eb3a14',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the loader charcoal (#111111) with a white bold counter
- **Do:** Use a hairline rule under the counter as the only furniture
- **Do:** Keep the counter centred on the page
- **Don't:** Don't set the loader on a light ground
- **Don't:** Don't add a logo or copy to the loader
- **Don't:** Don't set the counter in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
