# Design system — Minimalist Product Landing Page Template

`SN-W00539` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A restrained, editorial dark page with a serif display face set in capitals at large size, so headlines read as a statement. The ground is warm near-black (#0b0c0e) with cream text (#f2f1ec). Navigation is small tracked uppercase, with one solid cream button for the main action, and a thin vertical rule beside the intro paragraph gives structure without colour.

**Mood:** editorial, quiet, serious, literary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0c0e` | Page ground |
| Surface | `#1a1b1f` | Cards, panels, raised areas |
| Text | `#f2f1ec` | Headings and primary copy |
| Muted text | `#98999e` | Secondary copy, captions |
| Border | `#b8a883` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f2f1ec` · `#b8a883` · `#ffffff` · `#98999e` · `#0b0c0e` · `#d5d4cf` · `#000000` · `#d3c6a6` · `#c4c4c0` · `#1a1b1f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Fraunces
- **Loaded families:** Fraunces, Inter, Roboto Condensed
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-[0.16rem]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-screen-2xl`, `max-w-5xl`
- **Section padding:** `py-28`, `py-36`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="ml-2 border border-[#F2F1EC] bg-[#F2F1EC] px-6 py-3 text-xs font-medium uppercase tracking-[0.16rem] text-[#0B0C0E] outline-none transition-colors duration-500 hover:border-[#D5D4CF] hover:bg-[#D5D4CF] focus-visible:ring-1 focus-visible:ring-[#B8A883] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0C0E]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0c0e;
  --color-surface: #1a1b1f;
  --color-text: #f2f1ec;
  --color-muted: #98999e;
  --color-border: #b8a883;
  --font-display: "Fraunces", serif;
  --font-body: "Fraunces", serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0c0e',
    surface: '#1a1b1f',
    ink: '#f2f1ec',
    muted: '#98999e',
    line: '#b8a883',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Fraunces'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif display face, in capitals, at large size
- **Do:** Keep eyebrow labels small, uppercase and widely tracked
- **Do:** Use the cream button (#f2f1ec) only for the primary action in the navigation
- **Don't:** Don't add saturated colour; the palette stays warm neutral
- **Don't:** Don't switch the headlines to a sans-serif
- **Don't:** Don't remove the thin rule beside intro text; it is the main structural cue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
