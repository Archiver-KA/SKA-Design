# Design system — Emperor Premium Detailing

`SN-W02007` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero (#09090b) with a dimmed car silhouette behind a bold white sans headline at large size. The second headline line and the primary button use indigo (#818cf8), the only accent on screen. The layout is left-aligned with a pair of pill buttons, one filled indigo and one dark outlined, pushing the visitor toward booking. The look is direct and commercial, with no decoration beyond the glow.

**Mood:** bold, dark, conversion-focused, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#a3e635` | Supporting highlights |

Palette by frequency of use: `#818cf8` · `#ffffff` · `#262626` · `#a3a3a3` · `#0a0a0a` · `#171717` · `#737373` · `#d4d4d4` · `#404040` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(163,230,53,0.3)]`, `shadow-[0_0_30px_rgba(251,146,60,0.08)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-neutral-950 bg-indigo-400 rounded-full hover:bg-indigo-500 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Bento grid (`bento-grid`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. Timeline (`timeline`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #171717;
  --color-text: #d4d4d8;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #818cf8;
  --color-accent-2: #a3e635;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#171717',
    ink: '#d4d4d8',
    muted: '#737373',
    line: '#262626',
    accent: '#818cf8',
    accent2: '#a3e635',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use indigo (#818cf8) for the second headline line and the primary button only
- **Do:** Set headlines in Inter bold at large size, left-aligned
- **Do:** Pair a filled primary button with a dark secondary button in the hero
- **Don't:** Don't use the indigo for body text or large fills
- **Don't:** Don't add decorative gradients to the headline
- **Don't:** Don't place the chat button over the hero buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
