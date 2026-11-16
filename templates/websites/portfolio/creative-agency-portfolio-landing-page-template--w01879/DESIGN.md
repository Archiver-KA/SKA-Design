# Design system — Creative Agency Portfolio Landing Page Template

`SN-W01879` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with heavy, uppercase Manrope headlines stacked over three lines, with the middle line in dark grey so it recedes behind the others. Lime (#ccff00) is the single accent, used in a thin outlined tag and a status dot. Right-hand panels are dark cards separated by hairline dividers, which gives the page a structured, technical stance.

**Mood:** bold, dark, technical, structured, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ccff00` · `#737373` · `#000000` · `#a3a3a3` · `#0f0f0f` · `#1a1a1a` · `#171717` · `#525252` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Syne, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 60px · body 14px
- **Weights in use:** bold, medium, extrabold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="mt-8 px-10 py-5 bg-[#ccff00] text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all w-full md:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Case studies (`case-studies`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #1a1a1a;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ccff00;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#1a1a1a',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ccff00',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Use lime (#ccff00) only for the small outlined tag and the status dot.
- **Do:** Set headlines in Manrope, uppercase, at heavy weight.
- **Do:** Dim secondary headline words in dark grey rather than adding a second accent.
- **Don't:** Don't fill large areas with lime; it stays a small accent.
- **Don't:** Don't set display headlines in lowercase; the style is uppercase.
- **Don't:** Don't add drop shadows; separate the panels with thin borders.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
