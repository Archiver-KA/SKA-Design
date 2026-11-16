# Design system — Cybersecurity Course Landing Page Template

`SN-W03439` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, futuristic cybersecurity page on deep navy [#0a0f1f], with a large bold sans-serif headline. The second line runs in a cyan-to-violet gradient [#08fdd8 to #8027ff], and cyan carries the primary button. A soft blue glow sits behind the hero, and a dark terminal window is cropped at the bottom of the first screen.

**Mood:** futuristic, technical, dark, vivid

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0f1f` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#e0e2e5` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#08fdd8` | Primary action and highlights |
| Second accent | `#8027ff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#08fdd8` · `#0a0f1f` · `#8027ff` · `#050505` · `#000000` · `#1f293a` · `#e0e2e5` · `#ff5f56` · `#ffbd2e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(8,253,216,0.3)]`, `shadow-[0_0_20px_rgba(8,253,216,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-[#08FDD8] text-[#0A0F1F] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#08FDD8] hover:shadow-[0_0_20px_rgba(8,253,216,0.4)] transition-all flex items-center gap-2 transform active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Services (`services`)
5. About (`about`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0f1f;
  --color-surface: #050505;
  --color-text: #e0e2e5;
  --color-border: #ffffff;
  --color-accent: #08fdd8;
  --color-accent-2: #8027ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0f1f',
    surface: '#050505',
    ink: '#e0e2e5',
    line: '#ffffff',
    accent: '#08fdd8',
    accent2: '#8027ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the cyan-to-violet gradient (#08fdd8 to #8027ff)
- **Do:** Use cyan (#08fdd8) for the primary button, with dark text on it
- **Do:** Show a dark terminal window as a cropped preview under the hero buttons
- **Don't:** Don't use the gradient on body text or small labels
- **Don't:** Don't place a second bright button colour beside the cyan
- **Don't:** Don't use light backgrounds for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
