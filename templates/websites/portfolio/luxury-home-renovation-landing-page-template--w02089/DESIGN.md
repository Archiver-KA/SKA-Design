# Design system — Luxury Home Renovation Landing Page Template

`SN-W02089` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, warm renovation page with a near-black brown ground [#0c0a09] and a soft amber glow behind the hero. Large white serif headlines carry the first screen, with the final line set in a lighter italic, and amber [#f59e0b] fills the primary button and the small badge text. A dark translucent card sits on the right, and the nav ends with a filled amber button.

**Mood:** warm, dark, premium, editorial, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#f59e0b` · `#a8a29e` · `#292524` · `#0c0a09` · `#e7e5e4` · `#fafaf9` · `#78350f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Manrope
- **Loaded families:** Instrument Serif, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-amber-900/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Process / steps (`how-it-works`)
7. Feature grid (`features`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #292524;
  --color-accent: #f59e0b;
  --font-display: "Instrument Serif", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#292524',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the first two headline lines in white serif and the last line in a lighter italic.
- **Do:** Use amber (#f59e0b) for the primary button and the badge text only.
- **Do:** Place a soft amber glow behind the hero rather than a flat colour block.
- **Don't:** Don't set the hero on a light background; the first screen is dark brown-black.
- **Don't:** Don't set body copy in amber.
- **Don't:** Don't draw hard-edged borders around the dark cards; separation comes from tone.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
