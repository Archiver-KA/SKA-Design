# Design system — Luxury Law Firm Landing Page Template

`SN-W04014` · business-services · dark mode · Sinera Atlas theme `route` · language `pt-br`

## Direction

A dark, dramatic law-firm hero with a large centred serif headline in white. The first word is white, the middle word is grey italic, and the last word is a warm gold gradient (#c4a470), which gives the line an editorial rhythm. Gold is the only colour and marks the emphasis and a thin rule, so the page feels restrained and premium.

**Mood:** dramatic, editorial, premium, restrained, formal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020204` | Page ground |
| Surface | `#444444` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c4a470` | Primary action and highlights |
| Second accent | `#c4a470` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#020204` · `#000000` · `#333333` · `#444444` · `#c4a470` · `#312e81` · `#151515` · `#4ade80` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-black/50`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-white text-brand-dark px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Logo cloud (`logo-cloud`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Bento grid (`bento-grid`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020204;
  --color-surface: #444444;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c4a470;
  --color-accent-2: #c4a470;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020204',
    surface: '#444444',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c4a470',
    accent2: '#c4a470',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a display serif, with one grey italic word and one gold word
- **Do:** Use gold (#c4a470) only for the emphasis word and the thin rule
- **Do:** Keep the ground black (#020204) with white text
- **Don't:** Don't set the headline in sans-serif
- **Don't:** Don't use bright colours in the headline
- **Don't:** Don't set body copy in full white; keep it grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
