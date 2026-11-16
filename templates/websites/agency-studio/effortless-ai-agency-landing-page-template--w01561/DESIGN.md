# Design system — Effortless AI Agency Landing Page Template

`SN-W01561` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black hero with white display headlines and one lime (#bef264) phrase that carries the emphasis line 'on autopilot.' The lime also fills the primary pill button, and small uppercase labels sit under a row of large numerals along the bottom edge. The page is dark, confident and single-accent, with soft glow effects supporting the highlight.

**Mood:** dark, confident, single-accent, tech, polished

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#bef264` | Primary action and highlights |

Palette by frequency of use: `#a3e635` · `#ffffff` · `#000000` · `#bef264` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#404040` · `#050505` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_10px_#bef264]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-[0_0_25px_rgba(190,242,100,0.4)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group bg-lime-400 hover:bg-lime-300 text-black px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #bef264;
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
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#bef264',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#bef264) for the emphasis phrase and the primary button only
- **Do:** Set headlines in Inter at display size, with the second line in lime
- **Do:** Put key figures as large numerals with small uppercase labels below
- **Don't:** Don't use the lime for body text or borders
- **Don't:** Don't add a light section between the hero and the stats row
- **Don't:** Don't use square buttons; the pill shape is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
