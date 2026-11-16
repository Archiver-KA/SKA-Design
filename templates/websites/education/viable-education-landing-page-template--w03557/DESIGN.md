# Design system — viable Education Landing Page Template

`SN-W03557` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

viable is a black, high-impact page built on uppercase bold sans-serif headlines, with the closing phrase set in amber (#f59e0b). The middle phrase is a desaturated grey, so the headline steps from grey to white to amber. The primary button is solid amber with a dark label, and the secondary is a dark outlined pill. A soft amber glow sits behind the hero.

**Mood:** high-impact, bold, dark, urgent, amber

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#18181b` · `#71717a` · `#a1a1aa` · `#000000` · `#52525b` · `#d4d4d8` · `#f4f4f5` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-8 py-4 rounded-lg transition-all glow-effect flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Footer (`footer`)
7. Code / terminal (`code-terminal`)
8. Dashboard preview (`dashboard-preview`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #22c55e;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of the headline in amber (#f59e0b)
- **Do:** Use amber for the primary button and one highlight per section
- **Do:** Keep headlines uppercase, bold and tightly set
- **Don't:** Don't add a second bright accent beside the amber
- **Don't:** Don't set body copy in uppercase
- **Don't:** Don't place light backgrounds behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
