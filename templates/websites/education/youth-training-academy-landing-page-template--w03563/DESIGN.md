# Design system — Youth Training Academy Landing Page Template

`SN-W03563` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Youth Training Academy opens on a muted green-grey hero, with large white headlines in a serif and the second line set in italic. A burnt-orange button (#cc5833) carries the main action, and a dark outlined button sits beside it. The page turns to a cream panel below the hero. The tone is disciplined, understated and outdoors-minded.

**Mood:** disciplined, understated, earthy, serif, outdoor

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2e4036` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f2f0e9` | Headings and primary copy |
| Muted text | `#2e4036` | Secondary copy, captions |
| Border | `#2e4036` | Hairlines, dividers, outlines |
| Accent | `#cc5833` | Primary action and highlights |

Palette by frequency of use: `#f2f0e9` · `#1a1a1a` · `#2e4036` · `#cc5833` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, JetBrains Mono, Outfit, Plus Jakarta Sans
- **Scale (largest breakpoint):** h2 48px · h3 36px · body 16px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[0_0_8px_rgba(204,88,51,0.6)]`
- **Content width:** `max-w-5xl`, `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-8 py-3.5 rounded-full bg-[#CC5833] text-[#F2F0E9] text-xs font-normal uppercase tracking-wide hover:bg-[#CC5833]/90 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #2e4036;
  --color-surface: #ffffff;
  --color-text: #f2f0e9;
  --color-muted: #2e4036;
  --color-border: #2e4036;
  --color-accent: #cc5833;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2e4036',
    surface: '#ffffff',
    ink: '#f2f0e9',
    muted: '#2e4036',
    line: '#2e4036',
    accent: '#cc5833',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic serif
- **Do:** Use burnt orange (#cc5833) only for the primary button
- **Do:** Keep the hero on a muted green-grey gradient
- **Don't:** Don't use bright greens or blues
- **Don't:** Don't set headlines in a sans-serif
- **Don't:** Don't add decorative shapes behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
