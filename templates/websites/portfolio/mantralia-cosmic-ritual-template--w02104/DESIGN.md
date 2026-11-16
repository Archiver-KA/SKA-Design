# Design system — Mantralia Cosmic Ritual Template

`SN-W02104` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A mystical dark-navy landing page with a centred white sans headline, in which the middle phrase is filled with a violet-to-mint gradient from [#6c5ce7] to [#55efc4]. The copy is short and centred, with one outlined pill button beneath it. The ground is near-black navy [#0a0a1a], and the nav is small uppercase text across the top.

**Mood:** mystical, dark, bold, airy, digital

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a1a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6c5ce7` | Primary action and highlights |
| Second accent | `#55efc4` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6c5ce7` · `#55efc4` · `#0a0a1a` · `#ffd700` · `#0f0a2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** normal, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_8px_30px_rgba(0,0,0,0.2)]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-[0_0_20px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#0A0A1A]/50 border border-white/20 text-white backdrop-blur-xl hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a1a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6c5ce7;
  --color-accent-2: #55efc4;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a1a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#6c5ce7',
    accent2: '#55efc4',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Use the violet-to-mint gradient (#6c5ce7 to #55efc4) only on the middle phrase of the headline.
- **Do:** Keep the primary button an outlined pill on the navy ground.
- **Do:** Set the nav in small uppercase labels with wide spacing.
- **Don't:** Don't fill the button with the gradient; keep it outlined.
- **Don't:** Don't put the gradient on body text.
- **Don't:** Don't introduce a light background; the first screen is dark navy throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
