# Design system — Brutalist Portfolio Landing Page Template

`SN-W01848` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light grey brutalist page with a very heavy black grotesk headline stacked over several lines, and the word OVER filled in lime (#a3e635) with a black outline. Hard black hairlines divide the navigation into boxes, and small monospace labels sit above the headline. The copy itself rejects soft shadows and rounded corners, so the design relies on hard lines and flat fills.

**Mood:** brutalist, stark, graphic, raw

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e5e5e5` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#a3e635` · `#000000` · `#737373` · `#ffffff` · `#262626` · `#a3a3a3` · `#e5e5e5` · `#bef264` · `#555555` · `#84cc16`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-hard`, `shadow-none`, `shadow-[2px_2px_0_0_rgba(0,0,0,1)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="flex items-center px-6 border-r-2 theme-border bg-lime-400 hover:bg-lime-300 transition-colors group text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #e5e5e5;
  --color-surface: #e5e5e5;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #22c55e;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e5e5e5',
    surface: '#e5e5e5',
    ink: '#000000',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in a heavy black grotesk, stacked tightly over several lines
- **Do:** Use lime (#a3e635) as a fill for one highlight word, outlined in black
- **Do:** Divide the nav and sections with hard black hairlines
- **Don't:** Don't use rounded corners or soft shadows
- **Don't:** Don't use monospace for headlines; it is for small labels only
- **Don't:** Don't fill large areas with lime

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
