# Design system — Luxury Aesthetic Medicine Landing Page Template

`SN-W02438` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pl`

## Direction

The aesthetic clinic hero is a warm near-black (#1c1917) screen with a white serif headline, where the words 'naturalne piękno' are set in italic gold (#c5a059). The gold also fills the primary button, while the secondary is a dark outline. A tall rounded photograph of a treatment sits on the right, and a small uppercase pill label above the headline names the service area. The effect is luxurious and quiet.

**Mood:** luxurious, warm, quiet, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#d6d3d1` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#292524` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#292524` · `#a8a29e` · `#1c1917` · `#c5a059` · `#d6d3d1` · `#44403c` · `#000000` · `#0c0a09` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Lato
- **Loaded families:** Lato, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-8`, `gap-16`, `gap-12`

**Primary button**

```html
<a class="px-8 py-4 rounded-full text-center border border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white transition-all duration-300 font-medium text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #d6d3d1;
  --color-muted: #a8a29e;
  --color-border: #292524;
  --color-accent: #c5a059;
  --font-display: "Playfair Display", serif;
  --font-body: "Lato", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#292524',
    ink: '#d6d3d1',
    muted: '#a8a29e',
    line: '#292524',
    accent: '#c5a059',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Set the headline in white serif, with one italic gold phrase (#c5a059)
- **Do:** Use gold (#c5a059) for the primary button and the single highlight
- **Do:** Frame treatment photography in a tall rounded panel beside the headline
- **Don't:** Don't use gold for body copy
- **Don't:** Don't lighten the ground above warm near-black (#1c1917)
- **Don't:** Don't set the headline in sans-serif; the serif carries the luxury tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
