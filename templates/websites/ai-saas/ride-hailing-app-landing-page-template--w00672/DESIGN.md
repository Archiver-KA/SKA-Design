# Design system — Ride-Hailing App Landing Page Template

`SN-W00672` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, polished mobility app page on a pale cream ground, with a dark brown (#613e2d) accent for the buttons and logo. The headline is a heavy sans in near-black, and the word 'safely.' is set in tan (#e1bf8e), a softer shade than the buttons. A phone mock-up on the right shows a map and a driver card, and the layout is open and airy.

**Mood:** warm, polished, approachable, airy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf8f4` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#262626` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#613e2d` | Primary action and highlights |

Palette by frequency of use: `#e1bf8e` · `#262626` · `#ffffff` · `#737373` · `#f5f5f5` · `#613e2d` · `#a3a3a3` · `#faf8f4` · `#404040` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-soft`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="flex-1 text-xs font-medium py-3 rounded-xl bg-[#E1BF8E]/10 text-neutral-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Timeline (`timeline`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #faf8f4;
  --color-surface: #e5e5e5;
  --color-text: #262626;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #613e2d;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf8f4',
    surface: '#e5e5e5',
    ink: '#262626',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#613e2d',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the dark brown (#613e2d) for primary buttons and the logo, not for headlines
- **Do:** Set the highlight word in tan (#e1bf8e) inside a near-black heading
- **Do:** Show the app in a phone frame on the right of the hero
- **Don't:** Don't use the tan (#e1bf8e) as the page ground; the ground is cream
- **Don't:** Don't use tan for body text; it lacks contrast on cream
- **Don't:** Don't crowd the hero; keep the open spacing around the phone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
