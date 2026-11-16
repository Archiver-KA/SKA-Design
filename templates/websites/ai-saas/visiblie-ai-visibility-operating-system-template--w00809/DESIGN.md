# Design system — Visiblie AI Visibility Operating System Template

`SN-W00809` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, technical operating-system page for AI-visibility services, on a near-black ground with hairline frames. The large white headline sets 'running inside the system' in lilac (#818cf8), and a small sidebar lists answer engines. The framed hero follows the same console language as the Vectorline templates, with Manrope throughout.

**Mood:** technical, dark, framed, systematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#070707` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#e8c382` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d8` · `#71717a` · `#a1a1aa` · `#000000` · `#52525b` · `#818cf8` · `#6366f1` · `#e4e4e7` · `#070707`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Gloock, Manrope, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_1rem_rgba(129,140,248,0.65)]`, `shadow-[0_0_10px_#818cf8]`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. FAQ (`faq`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #070707;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #e8c382;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#070707',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#e8c382',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the headline in lilac (#818cf8)
- **Do:** Frame the hero in hairline white borders
- **Do:** Use small uppercase labels for status inside the console
- **Don't:** Don't use lilac as a large fill
- **Don't:** Don't add gradients behind the console
- **Don't:** Don't stack more than one framed panel in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
