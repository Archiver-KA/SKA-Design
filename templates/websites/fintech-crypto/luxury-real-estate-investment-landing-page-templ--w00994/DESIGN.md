# Design system — Luxury Real Estate Investment Landing Page Template

`SN-W00994` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, premium property page on a warm near-black ground (#0c0a09), with a white serif headline in which one phrase, Resort Property, is set in gold (#d6b876). Gold appears only in that headline phrase and the pale primary button, while the nav and body copy stay neutral. The layout is a single left-aligned hero with a small pill badge and generous black space around it.

**Mood:** premium, warm, cinematic, restrained, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d6b876` | Primary action and highlights |
| Second accent | `#183729` | Supporting highlights |

Palette by frequency of use: `#d6b876` · `#183729` · `#ffffff` · `#202525` · `#000000` · `#efefe3` · `#d6d3d1` · `#fef2f2` · `#f87171` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 20px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="text-[#D6B876] border border-[#D6B876]/30 py-3 rounded-lg bg-[#D6B876]/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Listings (`listings`)
3. About (`about`)
4. Comparison (`comparison`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Bento grid (`bento-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #000000;
  --color-text: #e7e5e4;
  --color-border: #ffffff;
  --color-accent: #d6b876;
  --color-accent-2: #183729;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#000000',
    ink: '#e7e5e4',
    line: '#ffffff',
    accent: '#d6b876',
    accent2: '#183729',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the key headline phrase in gold (#d6b876) and keep the rest white.
- **Do:** Use the light pill button for the main action, with dark text.
- **Do:** Keep the hero on the warm near-black ground (#0c0a09).
- **Don't:** Don't use gold for body copy or nav links.
- **Don't:** Don't add a bright colour to the hero.
- **Don't:** Don't set the headline in a sans-serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
