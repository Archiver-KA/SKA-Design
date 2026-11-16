# Design system — ProstaVive Supplement Landing Page Template

`SN-W02508` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark navy hero on near-black (#020617) with white headlines, where the second line is set in a lighter cyan (#22d3ee). Cyan (#06b6d4) is the primary button and the glowing accent on the product card, and the rest of the page is dark slate. A thin announcement strip and a centred product card with a round icon give it the feel of a clinical instrument.

**Mood:** dark, technical, clinical, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#06b6d4` · `#22d3ee` · `#0f172a` · `#94a3b8` · `#64748b` · `#020617` · `#1e293b` · `#cbd5e1` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-[0_0_10px_rgba(6,182,212,0.1)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-slate-950 transition-all bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #22d3ee;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#06b6d4) for the primary button and the product card glow only
- **Do:** Set the second headline line in light cyan (#22d3ee)
- **Do:** Keep panels in dark slate (#0f172a) with thin light borders
- **Don't:** Don't use the purple (#a855f7) accent.
- **Don't:** Don't put light backgrounds behind any section
- **Don't:** Don't set body copy in the muted slate (#64748b) on navy; it is too faint

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
