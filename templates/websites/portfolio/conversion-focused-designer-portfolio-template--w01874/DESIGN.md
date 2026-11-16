# Design system — Conversion-Focused Designer Portfolio Template

`SN-W01874` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black landing page with a short centred intro and two pills: a solid cyan (#22d3ee) primary and a dark outlined secondary. The cyan is the only colour, and it also tints the small status label above, so the one accent appears twice. The logo and body copy are set in a serif.

**Mood:** minimal, dark, direct, cool

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#9ca3af` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#9ca3af` · `#000000` · `#6b7280` · `#06b6d4` · `#050505` · `#1f2937` · `#d1d5db` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-white/5`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="group relative w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-semibold text-sm rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-center btn-glow overflow-hidden">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Case studies (`case-studies`)
6. Services (`services`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #9ca3af;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#9ca3af',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#22d3ee) for the primary button and the status label only
- **Do:** Keep the intro short and centred under the logo
- **Do:** Pair a solid cyan pill with a dark outlined pill for the calls to action
- **Don't:** Don't add a second bright colour beside the cyan
- **Don't:** Don't set the body copy in a sans; keep it in the serif.
- **Don't:** Don't use white for body text; it is grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
