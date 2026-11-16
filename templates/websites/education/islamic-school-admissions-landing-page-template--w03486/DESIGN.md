# Design system — Islamic School Admissions Landing Page Template

`SN-W03486` · education · light mode · Sinera Atlas theme `calm` · language `id`

## Direction

A clean, practical admissions page on white, with a large dark headline in a heavy sans and green (#15803d) for section headings and timeline markers. Rounded panels hold the requirements and dates in a vertical timeline, and the registration button is a solid red block at the top of the flow. The page reads as one sequence from programme details to sign-up.

**Mood:** practical, clear, orderly, welcoming, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3e8ff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Accent | `#15803d` | Primary action and highlights |
| Second accent | `#581c87` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#22c55e` · `#dcfce7` · `#15803d` · `#14532d` · `#86efac` · `#dbeafe` · `#1d4ed8` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2.5 bg-[var(--accent)] text-white text-xs font-bold rounded shadow-lg hover:brightness-110 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Timeline (`timeline`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3e8ff;
  --color-text: #111111;
  --color-accent: #15803d;
  --color-accent-2: #581c87;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f3e8ff',
    ink: '#111111',
    accent: '#15803d',
    accent2: '#581c87',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#15803d) for section headings and the timeline markers
- **Do:** Keep the sign-up button as one solid block at the top of the flow
- **Do:** Set dates and requirements in a vertical timeline of rounded panels
- **Don't:** Don't split the admissions flow across several pages
- **Don't:** Don't use more than one saturated accent in a section
- **Don't:** Don't set requirement lists in small grey text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
