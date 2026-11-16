# Design system — Home Renovation Landing Page Template

`SN-W02048` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet, neutral renovation page on warm off-white (#fafaf9) with a large Instrument Serif headline. The second line is set in light grey italic, a two-tone treatment that carries the page's tone, while the primary button is a near-black (#1c1917) pill. The hero photograph is the only colour, so the interface stays in warm greys.

**Mood:** calm, warm, minimal, editorial, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#d6d3d1` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#ffffff` · `#d6d3d1` · `#e7e5e4` · `#fafaf9` · `#a8a29e` · `#292524` · `#44403c` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Manrope
- **Loaded families:** Instrument Serif, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-stone-900/10`, `shadow-orange-900/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-stone-200 hover:bg-stone-300 text-stone-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. Team (`team`)
9. FAQ (`faq`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #d6d3d1;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #ffedd5;
  --font-display: "Instrument Serif", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#d6d3d1',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif at large size; set the second line in grey italic.
- **Do:** Use near-black (#1c1917) pill buttons for primary actions.
- **Do:** Keep the interface to warm greys and let photography supply colour.
- **Don't:** Don't add a bright accent; the palette has none.
- **Don't:** Don't use sharp corners on buttons or cards; they are pills or large radii.
- **Don't:** Don't set headlines in a bold sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
