# Design system — Food Industry Ecosystem Landing Page Template

`SN-W02901` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `ja`

## Direction

A dark, gradient-led hero where a Japanese headline in white sans sits above a second line filled with a violet-to-peach gradient. The background is near-black (#050505) with a small pill tag above the title, and the primary action is a solid violet button (#a855f7) beside an outlined secondary. The stance is modern and tech-leaning, relying on one gradient phrase rather than many accent colours.

**Mood:** modern, tech-leaning, dark, gradient, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c084fc` · `#737373` · `#a3a3a3` · `#a855f7` · `#10b981` · `#171717` · `#d8b4fe` · `#f97316` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]`, `shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)]`, `shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-neutral-200 transition-all transform active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a855f7;
  --color-accent-2: #10b981;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a855f7',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans; colour one phrase with the violet-to-peach gradient.
- **Do:** Use the violet (#a855f7) for the primary button and the gradient phrase only.
- **Do:** Keep the page near-black (#050505) and put the pill tag above the headline.
- **Don't:** Don't use the gradient on body copy or on every heading; it marks one phrase per hero.
- **Don't:** Don't use green (#10b981) as an accent.
- **Don't:** Don't use a light background; the page is near-black from top to bottom.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
