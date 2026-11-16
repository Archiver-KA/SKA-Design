# Design system — Vireo Communication App Landing Page Template

`SN-W00223` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, airy hero on a pale white ground with a faint pink haze. The headline is a heavy dark sans in two lines: the first is black, the second fades from grey into black, and its last word is set in pink. Pink (#ec4899) is kept to that one word and small status detail, while the buttons are black and outlined, so the page reads as calm and restrained.

**Mood:** light, airy, calm, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#eab308` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#171717` · `#e5e5e5` · `#737373` · `#000000` · `#a3a3a3` · `#db2777` · `#d4d4d4` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-pink-900/20`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="hidden sm:block text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #171717;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ec4899;
  --color-accent-2: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#171717',
    ink: '#000000',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ec4899',
    accent2: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy sans, with the final word in pink (#ec4899)
- **Do:** Keep the buttons black filled and outlined only, with no coloured fills
- **Do:** Use the pale pink haze behind the hero, not on the body text
- **Don't:** Don't use pink for buttons or large areas
- **Don't:** Don't set the page on a dark background; the ground is white
- **Don't:** Don't add a second accent beside the pink

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
