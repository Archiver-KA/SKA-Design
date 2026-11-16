# Design system — Dental Office Landing Page 

`SN-W02364` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm, reassuring dental page on a cream ground, with a photographed clinic fading into the hero from the right. The headline pairs a dark serif with one italic word in teal (#0d9488), which is the only accent in the first screen. Buttons are dark pills, so the teal is kept for the emphasised word and does not compete with calls to action.

**Mood:** warm, reassuring, editorial, soft, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#0d9488` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0d9488` · `#78716c` · `#292524` · `#fafaf9` · `#f5f5f4` · `#0f766e` · `#57534e` · `#e7e5e4` · `#ccfbf1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2 text-xs font-medium rounded-full text-stone-600 hover:text-teal-700 hover:bg-stone-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Pricing (`pricing`)
6. Stats band (`stats`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #0d9488;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#0d9488',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Playfair Display, with one italic emphasis word in teal (#0d9488).
- **Do:** Keep the page on the warm off-white ground (#fafaf9) with white cards.
- **Do:** Use dark pill buttons (#292524) for calls to action.
- **Don't:** Don't set body copy in teal; it is reserved for emphasis.
- **Don't:** Don't use cool greys for surfaces, which break the warm tone.
- **Don't:** Don't place the clinic photograph at full strength behind body text; keep it faded into the ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
