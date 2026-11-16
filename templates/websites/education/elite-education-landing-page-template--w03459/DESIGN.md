# Design system — Elite Education Landing Page Template

`SN-W03459` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

An energetic, high-contrast page built on saturated blue (#2563eb) with deeper navy (#1e3a8a) for depth. Very large headlines in the system sans fill the hero, and a scrolling marquee band runs between sections. The layout relies on solid colour blocks and bold type rather than thin lines, so each section reads as a strong, separate statement.

**Mood:** energetic, bold, high-impact, direct, saturated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2563eb` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#bfdbfe` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#facc15` · `#bfdbfe` · `#1e3a8a` · `#2563eb` · `#3b82f6` · `#dbeafe` · `#172554` · `#64748b` · `#fde047`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 144px · h2 60px · h3 24px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-blue-900/20`, `shadow-blue-900/10`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white text-blue-900 px-10 py-4 font-display font-bold text-lg uppercase tracking-wider hover:bg-yellow-400 hover:text-blue-950 transition-colors shadow-xl shadow-blue-900/20 btn-hover-effect">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Services (`services`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #2563eb;
  --color-surface: #f8fafc;
  --color-text: #111111;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #bfdbfe;
  --color-accent-2: #2563eb;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2563eb',
    surface: '#f8fafc',
    ink: '#111111',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#bfdbfe',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set headlines large and tightly spaced in the system sans
- **Do:** Use the blue ground (#2563eb) for the hero and feature sections
- **Do:** Keep the marquee band full width between sections
- **Don't:** Don't use hairline borders; sections are separated by solid blocks
- **Don't:** Don't set small body text on the saturated blue ground
- **Don't:** Don't add a third strong colour to the palette

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
