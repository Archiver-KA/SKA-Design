# Design system — Ritualis Counseling & Formation Landing Page Template

`SN-W02518` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, photographed hero under a warm brown overlay, with a centred serif wordmark in cream capitals and a gold italic subline. Olive gold (#8b7435) fills the header and primary buttons, and a lighter gold (#d4b86a) is kept for the italic line. Widely tracked uppercase labels and thin dividers give the page a formal, reflective tone, and the cream ground (#fdfaf5) takes over below the hero.

**Mood:** reflective, formal, warm, ceremonial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfaf5` | Page ground |
| Surface | `#f4efe4` | Cards, panels, raised areas |
| Text | `#4a4740` | Headings and primary copy |
| Muted text | `#7a7770` | Secondary copy, captions |
| Border | `#4a4740` | Hairlines, dividers, outlines |
| Accent | `#8b7435` | Primary action and highlights |

Palette by frequency of use: `#8b7435` · `#fdfaf5` · `#2c2a24` · `#7a7770` · `#e8e0cc` · `#4a4740` · `#f4efe4` · `#d4b86a` · `#ffffff` · `#1a1915`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Josefin Sans
- **Loaded families:** Cormorant Garamond, Josefin Sans
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 12px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-[0.125rem]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-16`, `gap-px`

**Primary button**

```html
<a class="bg-[#8B7435] hover:bg-[#B09450] text-[#FDFAF5] font-sans text-xs tracking-[0.1875rem] uppercase px-6 py-3 transition-colors rounded-none font-light">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. 3D / canvas scene (`3d-canvas`)
6. Pricing (`pricing`)
7. Services (`services`)
8. Process / steps (`how-it-works`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Tailwind CSS v4 (browser), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfaf5;
  --color-surface: #f4efe4;
  --color-text: #4a4740;
  --color-muted: #7a7770;
  --color-border: #4a4740;
  --color-accent: #8b7435;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Josefin Sans", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfaf5',
    surface: '#f4efe4',
    ink: '#4a4740',
    muted: '#7a7770',
    line: '#4a4740',
    accent: '#8b7435',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Josefin Sans'] },
} }
```

## Do and don't

- **Do:** Set the wordmark and headlines in a serif, uppercase for the name
- **Do:** Use olive gold (#8b7435) for header and primary buttons; light gold (#d4b86a) only for the italic subline
- **Do:** Keep small labels widely tracked in uppercase
- **Don't:** Don't set body copy in gold; the grey-brown text (#4a4740) is the default
- **Don't:** Don't put the cream ground behind the dark hero photograph
- **Don't:** Don't round the buttons; keep square corners.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
