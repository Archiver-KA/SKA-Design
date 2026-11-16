# Design system — Casa Mariano Restaurante Ávila El Tiemblo

`SN-W02872` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

Austere and dark, built around one oversized headline. A near-black ground (#0a0a0a) carries a two-line headline in white, with the first word in a high-contrast italic serif and the second in roman, and that contrast sets the tone. Body text is light grey sans, and the primary button is white with the secondary outlined. The page reads almost monochrome.

**Mood:** austere, dark, elegant, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4d4d4` · `#a3a3a3` · `#0a0a0a` · `#171717` · `#737373` · `#eab308` · `#e5e5e5` · `#404040` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Instrument Serif
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 60px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-[0.2em]`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="hover:bg-neutral-200 transition-colors text-xs font-semibold text-neutral-950 tracking-wide bg-white rounded-full px-5 py-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#eab308',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in large high-contrast serif, italic for the first word and roman for the second
- **Do:** Keep the ground at #0a0a0a and type in white and light grey only
- **Do:** Use a white pill for the primary action and an outlined pill for the secondary
- **Don't:** Don't add bright colours to the hero
- **Don't:** Don't set the headline in a bold sans
- **Don't:** Don't place text over the scroll indicator at the bottom of the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
