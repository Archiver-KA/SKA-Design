# Design system — Product Video Summit Landing Page Template

`SN-W03741` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A bold, cinematic event hero on a dark navy-black ground. The headline is a large white sans-serif, and its final phrase carries a lilac gradient, which is the only colour in the hero. Two side-by-side buttons, one solid white and one outlined, sit under a short intro, and the page switches to a white section below.

**Mood:** bold, cinematic, high-contrast, event-led, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#171717` · `#4f46e5` · `#737373` · `#000000` · `#e5e5e5` · `#262626` · `#f5f5f5` · `#c7d2fe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Team (`team`)
5. Schedule (`schedule-agenda`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #4f46e5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#4f46e5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white bold sans-serif and apply the gradient to one phrase only
- **Do:** Pair a solid white primary button with an outlined secondary button
- **Do:** Use indigo (#4f46e5) for accents in the light sections below the hero
- **Don't:** Don't apply the gradient to body text or small labels
- **Don't:** Don't add a third button style to the hero
- **Don't:** Don't place light text on the white sections below

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
