# Design system — Developer Portfolio Landing Page Template

`SN-W01963` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

Dark, glowing French portfolio: a #0a0a0a ground with pink (#ec4899) and violet light blurred behind the hero, and one pink word inside an otherwise white, light-weight Inter headline. The pink is the single accent and appears on the headline and the small eyebrow label. A glass-like panel on the right carries the composition's weight.

**Mood:** moody, luminous, editorial, restrained, neon-tinged

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#a3a3a3` · `#d4d4d4` · `#171717` · `#262626` · `#a855f7` · `#f472b6` · `#22c55e` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 18px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-inner`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex justify-center items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-lg font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-colors whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Bento grid (`bento-grid`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ec4899;
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
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ec4899',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour exactly one word of the headline in pink (#ec4899)
- **Do:** Place blurred glow shapes behind the hero, never behind body text
- **Do:** Set headlines in Inter at light weight, in sentence case
- **Don't:** Don't use the pink for body text or large fills
- **Don't:** Don't add green as an accent; the second hue here is purple (#a855f7)
- **Don't:** Don't use hard-edged panels; keep the glass cards rounded

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
