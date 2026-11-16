# Design system — Creative Digital Agency Landing Page Template

`SN-W01491` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground (#08090a) with a centred, heavy sans headline in white, where the second line, 'Human Ingenuity.', fades from light to mid grey. Body copy is muted grey and sits beneath, with a pale solid button and a dark outlined button as the calls to action. The green (#10b981) appears only as a tiny dot in the status pill, so the page is nearly monochrome.

**Mood:** monochrome, restrained, modern, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08090a` | Page ground |
| Surface | `#121417` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888f9b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#888f9b` · `#000000` · `#121417` · `#08090a` · `#10b981` · `#2a2e35` · `#444444` · `#e5e7eb` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="group relative px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #08090a;
  --color-surface: #121417;
  --color-text: #ffffff;
  --color-muted: #888f9b;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08090a',
    surface: '#121417',
    ink: '#ffffff',
    muted: '#888f9b',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans, and fade the second line from white to grey.
- **Do:** Keep the page monochrome; use the green (#10b981) only as the status dot.
- **Do:** Use a pale solid button for the primary action and a dark outlined button for the secondary.
- **Don't:** Don't add a coloured background or gradient fill to the hero.
- **Don't:** Don't use the green for buttons or headings.
- **Don't:** Don't set the body copy in white; it stays muted grey (#888f9b).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
