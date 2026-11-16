# Design system — Creative Director Portfolio Landing Page Template

`SN-W01889` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A full-bleed gradient runs from bright orange (#f97316) at the top left to a near-black maroon at the bottom, with white bold sans headlines over it. Below the hero, a row of small numbered service labels sits in light type, keeping the detail quiet. The gradient is the whole visual identity, so the page reads as warm, confident and cinematic.

**Mood:** warm, confident, cinematic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#120505` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#fb923c` · `#f97316` · `#000000` · `#ea580c` · `#1a1a1a` · `#120505` · `#f3f4f6` · `#0f0f0f` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 88px · h2 52px · h3 30px · body 18px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-orange-900/10`
- **Content width:** `max-w-7xl`, `max-w-[300px]`
- **Common gaps:** `gap-3`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="flex items-center gap-3 bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full text-base font-medium hover:bg-gray-100 transition duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #120505;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#120505',
    surface: '#1a1a1a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the gradient running from orange (#f97316) to near-black (#120505) behind the hero.
- **Do:** Set the headline in a heavy white sans with tight leading.
- **Do:** Set service numbers in small orange text above light-weight labels.
- **Don't:** Don't place a flat orange panel where the gradient should be.
- **Don't:** Don't use the orange for body copy; it is for numbers and the gradient.
- **Don't:** Don't add extra colours to the service row; it stays white and orange.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
