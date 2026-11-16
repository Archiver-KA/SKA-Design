# Design system — Personal Trainer Fitness Landing Page Template

`SN-W02660` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A plain white trainer page in black and grey type, with very large sans-serif headlines in which the final line drops to a light grey. The layout is a clean stack of cards and pill labels on white, with no accent colour visible in the first screen. The grey step-down in headline weight gives the hierarchy, so the page reads as modern and quiet.

**Mood:** clean, monochrome, modern, quiet, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#000000` · `#e5e5e5` · `#a3a3a3` · `#f5f5f5` · `#262626` · `#525252` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 18px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[1440px]`, `max-w-[180px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="flex items-center gap-2 bg-neutral-900 text-white pl-5 pr-2 py-1.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Services (`services`)
5. Call to action (`cta`)
6. Timeline (`timeline`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #e5e5e5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#e5e5e5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in large black sans-serif, and drop the last line to a light grey.
- **Do:** Keep the page ground white and separate sections with #e5e5e5 borders or cards.
- **Do:** Use black pill labels for small status and category tags.
- **Don't:** Don't add a bright accent colour; the first screen is monochrome.
- **Don't:** Don't use grey below #737373 for body text on white.
- **Don't:** Don't set headlines in a light weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
