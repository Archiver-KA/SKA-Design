# Design system — Aether AI Agency Landing Page Template

`SN-W01354` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a centred layout, a small indigo status badge, and a large Inter headline whose first line is white and whose second line fades to grey. Indigo (#6366f1) appears as a status dot and a thin outlined button, so it is kept for status and the single call to action. The effect is quiet and dark, with colour held back until the accent appears.

**Mood:** dark, quiet, futuristic, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#22d3ee` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#a3a3a3` · `#000000` · `#737373` · `#171717` · `#525252` · `#a855f7` · `#818cf8` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(99,102,241,0.3)]`, `shadow-[0_0_20px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Listings (`listings`)
5. Process / steps (`how-it-works`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the background at #000000 and the headline at #ffffff, with grey for secondary copy.
- **Do:** Use indigo (#6366f1) for the status badge and the one primary action.
- **Do:** Set headlines in Inter with tight tracking and the second line in a faded gradient.
- **Don't:** Don't use indigo for large fills or section backgrounds.
- **Don't:** Don't add bright colour to the hero; keep it monochrome apart from the accent.
- **Don't:** Don't put the navigation on a solid coloured bar; it stays transparent over the dark page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
