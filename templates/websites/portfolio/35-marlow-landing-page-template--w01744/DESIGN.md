# Design system — 35 Marlow Landing Page Template

`SN-W01744` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet real-estate listing page on an off-white ground, with a black headline in a regular weight and a grey second line that sets the tone. The property photograph sits in a large frame on the right, with a black primary button and a plain outlined secondary. Figures such as list price are set large and bold, so the numbers are the emphasis.

**Mood:** calm, clean, light, residential, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#737373` · `#f5f5f5` · `#ffffff` · `#a3a3a3` · `#e5e5e5` · `#fafafa` · `#525252` · `#262626` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 24px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-neutral-200/50`, `shadow-lg`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="text-xs font-medium px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 bg-neutral-900 text-white hover:bg-neutral-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #262626;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#262626',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in black sans with the second line in grey
- **Do:** Set prices and key figures large and bold, as the emphasis of each listing block
- **Do:** Use a black primary button beside a plain outlined secondary button
- **Don't:** Don't set the page on a dark background; the listing reads on light grey
- **Don't:** Don't add decorative gradients behind the property photo
- **Don't:** Don't use bright colours for buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
