# Design system — Pool Construction Landing Page Template

`SN-W03325` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A full-bleed aerial photograph of a pool and gardens carries a bold uppercase sans headline in white, with the second line in italic sky blue (#38bdf8). Above the copy sits a row of green stars and a short trust line, and a white consultation form card closes the first screen. The palette is blue and green on white, with the photograph supplying the rest.

**Mood:** aquatic, bright, confident, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#38bdf8` · `#0ea5e9` · `#94a3b8` · `#1e293b` · `#cbd5e1` · `#0284c7` · `#0c4a6e` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 20px · h2 36px · h3 18px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="bg-white text-slate-900 px-5 py-2.5 rounded hover:bg-sky-50 transition-colors font-semibold">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Marquee (`marquee`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Call to action (`cta`)
7. Process / steps (`how-it-works`)
8. Stats band (`stats`)
9. Case studies (`case-studies`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    line: '#ffffff',
    accent: '#38bdf8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic sky blue (#38bdf8) at the same size as the first.
- **Do:** Use a dark navy filled button for the form submit action.
- **Do:** Keep the trust line and star rating in one row above the headline.
- **Don't:** Don't use sky blue for body text on white; it is reserved for the headline accent.
- **Don't:** Don't add more green beyond the star rating.
- **Don't:** Don't cover the aerial photograph with a flat colour block.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
