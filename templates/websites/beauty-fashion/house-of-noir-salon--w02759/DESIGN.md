# Design system — House of Noir Salon

`SN-W02759` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Split light hero: an off-white text panel on the left holds a large black serif headline and a grey subline, with a solid black button and an outlined button below. The right half is a tall grey image panel with a small dark label at its base. Black is the only action colour, so the layout reads as austere and gallery-like.

**Mood:** austere, editorial, monochrome, split

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f0f0f0` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111111` · `#000000` · `#b08968` · `#050505` · `#080808` · `#fafafa` · `#f0f0f0` · `#eaeaea` · `#fdfbf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-24`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-noir-gold dark:hover:bg-noir-gold dark:hover:text-white transition-colors rounded-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Logo cloud (`logo-cloud`)
6. Process / steps (`how-it-works`)
7. Timeline (`timeline`)
8. Team (`team`)
9. Gallery / portfolio (`gallery-portfolio`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f0f0f0;
  --color-text: #111111;
  --color-border: #ffffff;
  --color-accent: #000000;
  --color-accent-2: #4ade80;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f0f0f0',
    ink: '#111111',
    line: '#ffffff',
    accent: '#000000',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a black serif at large size, left-aligned in the text panel
- **Do:** Use a solid black button for the main action and an outlined button for services
- **Do:** Pair the text panel with a full-height image panel at right
- **Don't:** Don't use the bronze accent (#b08968) for buttons; black carries the actions
- **Don't:** Don't centre the hero text; it sits left in its panel
- **Don't:** Don't add shadows to the image panel; it is flat grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
