# Design system — AI Sales Assistant Landing Page Template

`SN-W00148` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Near-black productivity page on #000000 with a white headline in which the single word AI is set in lime (#d4fe8b). The primary button is lime with black label text, the secondary a dark outlined pill, and a faint dashboard window sits beneath the hero. Lime is the only accent, and the dark ground is part of the design.

**Mood:** energetic, dark, focused, fresh

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4fe8b` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4fe8b` · `#9ca3af` · `#d1d5db` · `#000000` · `#9333ea` · `#6b7280` · `#e5e7eb` · `#f3f4f6` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(212,254,139,0.3)]`, `shadow-[0_0_25px_rgba(212,254,139,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-[280px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-sm font-semibold bg-[#d4fe8b] text-black px-4 py-2 rounded-full hover:bg-[#bef264] transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,254,139,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Benefits (`benefits`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #d4fe8b;
  --color-accent-2: #9333ea;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#d4fe8b',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white with one keyword in lime (#d4fe8b)
- **Do:** Use lime for the primary button with black label text
- **Do:** Show the product as a faint dashboard window below the hero
- **Don't:** Don't use lime for body copy
- **Don't:** Don't add a second accent colour such as purple
- **Don't:** Don't lighten the hero; the dark ground is part of the design

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
