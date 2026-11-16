# Design system — Developer Portfolio Landing Page Template

`SN-W01957` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `de`

## Direction

A near-black page with a very large heavy sans wordmark in light grey filling the width, set above a lime eyebrow line and an outlined start button. Small mono text carries the intro, eyebrow and navigation, which gives a terminal feel. The lime (#ccff00) is the only colour and appears only on text rules and outlines.

**Mood:** stark, technical, bold, terminal, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ccff00` · `#000000` · `#737373` · `#a3a3a3` · `#050505` · `#171717` · `#525252` · `#111111` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Mono
- **Body:** Space Mono
- **Loaded families:** Space Mono, Syne
- **Scale (largest breakpoint):** h2 16px · h3 20px · body 12px
- **Weights in use:** bold, black
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_10px_#ccff00]`, `shadow-[0_0_20px_rgba(204,255,0,0.3)]`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-transparent border border-[#ccff00] overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(204,255,0,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Case studies (`case-studies`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ccff00;
  --font-display: "Space Mono", sans-serif;
  --font-body: "Space Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ccff00',
  },
  fontFamily: { display: ['Space Mono'], sans: ['Space Mono'] },
} }
```

## Do and don't

- **Do:** Use lime (#ccff00) only for the eyebrow, the intro rule and the outlined button
- **Do:** Set the wordmark in heavy sans, light grey, at full width
- **Do:** Set navigation and labels in mono at small size
- **Don't:** Don't fill the start button with lime; it is an outline
- **Don't:** Don't set the wordmark in mono; mono is for small text
- **Don't:** Don't add colours beside lime and grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
