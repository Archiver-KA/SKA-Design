# Design system — Designer Portfolio Landing Page Template

`SN-W01946` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a floating rounded navigation pill and a large sans headline in dark grey, with the first phrase in bold black and the run-on line in lighter grey. Emoji sit inline in the headline, and the hero's primary action is a black pill beside an outlined pill. The rounded shapes and soft grey type give the page a friendly, approachable tone.

**Mood:** friendly, rounded, light, approachable, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#a7f3d0` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#e4e4e7` · `#a1a1aa` · `#71717a` · `#000000` · `#27272a` · `#f4f4f5` · `#52525b` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 24px · body 16px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-5xl`, `max-w-6xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative overflow-hidden dark:bg-white dark:text-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 hover:shadow-xl sm:w-auto text-sm font-semibold text-white bg-zinc-900 w-full rounded-full px-8 py-4 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Stats band (`stats`)
6. Case studies (`case-studies`)
7. Feature grid (`features`)
8. Services (`services`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #18181b;
  --color-text: #18181b;
  --color-muted: #a1a1aa;
  --color-border: #e4e4e7;
  --color-accent: #a7f3d0;
  --color-accent-2: #eab308;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#18181b',
    ink: '#18181b',
    muted: '#a1a1aa',
    line: '#e4e4e7',
    accent: '#a7f3d0',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the navigation as a floating rounded pill with a yellow call to action
- **Do:** Set the headline in sans, with a bold black first phrase and grey continuation
- **Do:** Use a black pill for the hero's primary action
- **Don't:** Don't add emoji to other headings; they appear only in the hero
- **Don't:** Don't use a dark page background; the design is light
- **Don't:** Don't use the yellow outside the navigation call to action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
