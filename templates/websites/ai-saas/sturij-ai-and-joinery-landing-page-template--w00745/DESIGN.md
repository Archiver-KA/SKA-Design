# Design system — Sturij AI & Joinery Landing Page Template

`SN-W00745` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en-GB`

## Direction

A near-black green ground (#07110f) with a large cream serif headline in DM Serif Display, set over four lines and tight to the left edge. A card on the right holds the offer, with its figure in the same serif and a gold (#f1d28c) line beneath, and the small uppercase label is gold too. Cream serif on deep green gives the page a crafted, workshop feel.

**Mood:** crafted, warm, editorial, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#07110f` | Page ground |
| Surface | `#8ca58b` | Cards, panels, raised areas |
| Text | `#f7f0de` | Headings and primary copy |
| Accent | `#f1d28c` | Primary action and highlights |

Palette by frequency of use: `#f7f0de` · `#d4aa58` · `#f1d28c` · `#07110f` · `#8ca58b` · `#d8775f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Serif Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, DM Serif Display, IBM Plex Mono
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-[0.12em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_32px_110px_rgba(0,0,0,0.42)]`
- **Content width:** `max-w-[1180px]`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="border border-[rgba(247,240,222,0.16)] bg-[rgba(255,255,255,0.035)] text-[#f7f0de] rounded-full px-4 py-2.5 text-xs font-mono uppercase tracking-[0.12em] hover:bg-[#d4aa58] hover:border-[#d4aa58] hover:text-[#07110f] transition-all backdrop-blur-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Comparison (`comparison`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #07110f;
  --color-surface: #8ca58b;
  --color-text: #f7f0de;
  --color-accent: #f1d28c;
  --font-display: "DM Serif Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#07110f',
    surface: '#8ca58b',
    ink: '#f7f0de',
    accent: '#f1d28c',
  },
  fontFamily: { display: ['DM Serif Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in DM Serif Display at large size, in cream (#f7f0de)
- **Do:** Use gold (#f1d28c) only for offer figures and small labels
- **Do:** Keep the right-hand card as a single translucent panel with rounded corners
- **Don't:** Don't put gold on large surfaces
- **Don't:** Don't switch the hero to a light background
- **Don't:** Don't set headlines in a sans-serif; DM Sans is for body copy only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
