# Design system — AI Agency Landing Page Template

`SN-W01372` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A muted charcoal-olive page (#212322) with a centred headline in Inter, where the first line is white and the second is a grey gradient. A green primary button (#4c8d2b) sits beside a dark outlined secondary, and a small green-tinted badge sits above the headline. Green is the only colour in the hero, so the page reads as calm and grounded rather than neon.

**Mood:** grounded, muted, calm, earthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#212322` | Page ground |
| Surface | `#5b6770` | Cards, panels, raised areas |
| Text | `#d1d3d4` | Headings and primary copy |
| Muted text | `#5b6770` | Secondary copy, captions |
| Border | `#5b6770` | Hairlines, dividers, outlines |
| Accent | `#4c8d2b` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#4c8d2b` · `#5b6770` · `#ffffff` · `#d1d3d4` · `#212322` · `#1c1e1d` · `#111111` · `#2e551a` · `#3d7222` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_15px_rgba(76,141,43,0.4)]`, `shadow-lg`, `shadow-[#4C8D2B]/30`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-[#4C8D2B] hover:bg-[#3d7222] text-white rounded-full font-medium text-lg transition-all shadow-[0_0_20px_rgba(76,141,43,0.3)] hover:shadow-[0_0_40px_rgba(76,141,43,0.5)] flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #212322;
  --color-surface: #5b6770;
  --color-text: #d1d3d4;
  --color-muted: #5b6770;
  --color-border: #5b6770;
  --color-accent: #4c8d2b;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#212322',
    surface: '#5b6770',
    ink: '#d1d3d4',
    muted: '#5b6770',
    line: '#5b6770',
    accent: '#4c8d2b',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the ground at #212322 and headlines in white Inter, with the second line in grey.
- **Do:** Use the green (#4c8d2b) for the primary button and the badge only.
- **Do:** Keep the secondary button dark and outlined so green stays the only fill.
- **Don't:** Don't use bright neon greens; the green stays deep and muted.
- **Don't:** Don't set the page on pure black; the charcoal tone is part of the look.
- **Don't:** Don't add purple accents; green is the only accent.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
