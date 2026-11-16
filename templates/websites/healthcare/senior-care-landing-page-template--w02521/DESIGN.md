# Design system — Senior Care Landing Page Template

`SN-W02521` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A calm, almost empty hero on off-white (#fafaf8), with a sage-grey header button (#5a6d55) as the only colour. The page uses a system sans-serif and a neutral palette, meant to stay plain and unhurried.

**Mood:** calm, plain, gentle, unhurried

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#5a6d55` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#5a6d55` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#5a6d55` · `#57534e` · `#000000` · `#fafaf8` · `#f5f5f4` · `#78716c` · `#292524` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 20px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-6`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#5A6D55] text-white px-8 py-4 rounded-full text-xl font-medium hover:bg-[#4A5B46] transition-colors shadow-sm hidden md:block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Schedule (`schedule-agenda`)
5. Services (`services`)
6. Call to action (`cta`)
7. Feature grid (`features`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf8;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #5a6d55;
  --color-border: #ffffff;
  --color-accent: #5a6d55;
  --color-accent-2: #2563eb;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf8',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#5a6d55',
    line: '#ffffff',
    accent: '#5a6d55',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Use the sage-grey (#5a6d55) for the header button and key actions
- **Do:** Keep the ground at #fafaf8 with generous space around the content
- **Do:** Set text in the system sans-serif at a readable size
- **Don't:** Don't use the red (#ef4444) accent.
- **Don't:** Don't stack several accent colours on the first screen
- **Don't:** Don't add motion-heavy reveals; the page is meant to feel still

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
