# Design system — Technology Insights Landing Page

`SN-W00770` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep plum hero (#360e2d) with a large white Inter headline in which the word technology is set in lime (#a3e635). A translucent text panel sits to the right with a lime primary button and an outline secondary, and below it a large violet-to-blue gradient panel shows a striped graphic. Lime is the only accent, and the purple grounds set the mood.

**Mood:** bold, vivid, glassy, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#360e2d` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#360e2d` | Supporting highlights |

Palette by frequency of use: `#a3e635` · `#ffffff` · `#a3a3a3` · `#bef264` · `#360e2d` · `#d4d4d4` · `#171717` · `#262626` · `#737373` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-lime-400/25`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="button-enhanced group inline-flex items-center justify-center gap-3 bg-lime-400 text-[#360e2d] px-6 py-3 rounded-full font-medium text-sm hover:bg-lime-300 transition-all duration-300 hover:shadow-lg hover:shadow-lime-400/25 hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Newsletter signup (`newsletter`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #360e2d;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #360e2d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#360e2d',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#360e2d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter bold, white, with one key word in lime (#a3e635)
- **Do:** Use lime only for the highlighted word and the primary button
- **Do:** Keep the glass text panel translucent, with small body copy inside it
- **Don't:** Don't use lime for body text on the plum ground
- **Don't:** Don't add more than one gradient panel per section
- **Don't:** Don't use a white page ground for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
