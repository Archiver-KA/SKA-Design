# Design system — Junior Data Analyst Portfolio Template

`SN-W02066` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet dark portfolio on near-black (#0a0a0a) with a large bold Inter name, where the surname is set in dimmed grey so the first name carries the emphasis. Supporting copy is grey, and the primary button is a solid white pill beside a dark secondary. Indigo (#6366f1) appears only in the small open-to-work badge, so the palette stays grey and white.

**Mood:** quiet, dark, minimal, professional, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#262626` · `#171717` · `#737373` · `#a3a3a3` · `#0a0a0a` · `#404040` · `#818cf8` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-white/5`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="group relative px-8 py-3 bg-white text-black text-sm font-semibold rounded-lg overflow-hidden transition-all hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Timeline (`timeline`)
6. Case studies (`case-studies`)
7. Dashboard preview (`dashboard-preview`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #6366f1;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#262626',
    accent: '#6366f1',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in Inter bold, with the surname in a dimmed grey.
- **Do:** Use indigo (#6366f1) only for the small open-to-work badge.
- **Do:** Make the primary button a solid white pill and the secondary a dark pill.
- **Don't:** Don't use indigo for buttons or large fills.
- **Don't:** Don't add decorative graphics; the hero is type and two buttons.
- **Don't:** Don't set the body copy in white; it is grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
