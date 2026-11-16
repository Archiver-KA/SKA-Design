# Design system — Trace0 Cybersecurity Advisory Landing Page Template

`SN-W00778` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

An austere, near-black landing page with a thin navigation bar over a black field. Glass panels, hairline borders (#1e1e1e) and white type give the page its look, so the 3D hero carries most of the visual weight.

**Mood:** austere, dark, technical, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#1e1e1e` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#1e1e1e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Sarpanch
- **Body:** Sarpanch
- **Loaded families:** Orbitron, Sarpanch
- **Scale (largest breakpoint):** h2 60px · h3 16px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-[0_0_40px_rgba(255,95,31,0.1)]`
- **Content width:** `max-w-[980px]`, `max-w-7xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-xs uppercase tracking-widest border border-[var(--border)] bg-transparent px-6 py-2.5 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors font-medium rounded-none focus:outline-none text-[var(--fg)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Process / steps (`how-it-works`)
4. Stats band (`stats`)
5. Dashboard preview (`dashboard-preview`)
6. Services (`services`)
7. Pricing (`pricing`)
8. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #1e1e1e;
  --font-display: "Sarpanch", sans-serif;
  --font-body: "Sarpanch", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#1e1e1e',
  },
  fontFamily: { display: ['Sarpanch'], sans: ['Sarpanch'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #000000 with white text (#ffffff)
- **Do:** Separate panels with 1px borders in #1e1e1e rather than shadows
- **Do:** Let the 3D or glass hero be the only large visual element
- **Don't:** Don't add bright accent fills to the navigation
- **Don't:** Don't round the main panels; the layout is square-cornered apart from pills
- **Don't:** Don't ship the hero without its WebGL scene, which carries the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
