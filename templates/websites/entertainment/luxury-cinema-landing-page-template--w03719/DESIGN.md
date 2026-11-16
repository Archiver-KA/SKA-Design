# Design system — Luxury Cinema Landing Page Template

`SN-W03719` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black screen with a small serif wordmark and widely spaced navigation in pale caps. The hero stays mostly dark, with a faint grid of seat-like shapes showing through the background, which suggests the theatre theme without adding colour. Gold (#d4af37) is the accent and is kept for highlights.

**Mood:** dark, theatrical, restrained, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0f0f0f` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#050505` · `#0f0f0f` · `#333333` · `#d4af37` · `#0c0a09` · `#000000` · `#f5f5dc` · `#e5c985` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 24px · body 10px
- **Weights in use:** light, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_20px_50px_rgba(255,255,255,0.1)]`, `shadow-2xl`, `shadow-gold-900/10`
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-gold-500 hover:bg-gold-300 text-void px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. 3D / canvas scene (`3d-canvas`)
3. Modal / overlay (`modal-overlay`)
4. Navigation bar (`navbar`)
5. Hero (`hero`)
6. Feature grid (`features`)
7. Timeline (`timeline`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0f0f0f;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "Cinzel", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0f0f0f',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in a small serif with widely spaced navigation caps
- **Do:** Keep the page on near-black, with gold (#d4af37) for highlights only
- **Do:** Use faint, low-contrast texture behind the hero rather than bright images
- **Don't:** Don't add bright colour to the navigation
- **Don't:** Don't use a light page background
- **Don't:** Don't set navigation in a bold weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
