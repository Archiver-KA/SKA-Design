# Design system — Heavy Industrial & Trucking Services Template

`SN-W03928` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, warm page where a heavy dark sans headline runs over three lines, and its final phrase is set in a warm brown. The first screen is open and calm, with a small red-toned tag above the headline and a dark square button in the top bar. Body copy is slate grey and sized for easy reading. The headline does all the work, with no ornament beyond a soft off-white wash.

**Mood:** open, calm, sturdy, industrial, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#94a3b8` · `#0f172a` · `#020617` · `#64748b` · `#cbd5e1` · `#fbbf24` · `#fde68a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** ui-sans-serif
- **Body:** ui-sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 14px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-amber-500/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex justify-center items-center gap-2 bg-amber-500 text-slate-950 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-amber-400 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Listings (`listings`)
5. Feature grid (`features`)
6. Case studies (`case-studies`)
7. Logo cloud (`logo-cloud`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #0f172a;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --font-display: "ui-sans-serif", serif;
  --font-body: "ui-sans-serif", serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#0f172a',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['ui-sans-serif'], sans: ['ui-sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy dark sans, with the final phrase in warm brown.
- **Do:** Use the dark square button in the top bar for the quote and keep other links plain.
- **Do:** Keep body copy in slate grey at a comfortable reading size under the headline.
- **Don't:** Don't use the brown for body copy; it is for the headline's final phrase.
- **Don't:** Don't introduce bright colours; keep the hero to dark, brown and white.
- **Don't:** Don't place dark panels behind the hero; the ground stays light.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
