# Design system — Digital Agency Landing Page Template

`SN-W01526` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A dark charcoal page with a stacked uppercase headline, where the last word takes the mint accent (#1ed39c). Decoration is a few thin corner marks rather than filled shapes, so the page feels architectural and precise. Mint is used on the final headline word and the primary button, and the secondary button is an outline with a thin border.

**Mood:** architectural, dark, precise, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#202020` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1ed39c` | Primary action and highlights |

Palette by frequency of use: `#1ed39c` · `#ffffff` · `#171717` · `#71717a` · `#a1a1aa` · `#27272a` · `#d4d4d8` · `#3f3f46` · `#52525b` · `#202020`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Panchang
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 18px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2 text-xs font-medium text-[#171717] bg-mint rounded-sm hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #202020;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #1ed39c;
  --font-display: "Panchang", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#202020',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#1ed39c',
  },
  fontFamily: { display: ['Panchang'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase stacked lines, with the last word in mint (#1ed39c)
- **Do:** Use mint for the primary button and the final headline word only
- **Do:** Draw decorative corners as thin line marks, not filled shapes
- **Don't:** Don't add soft gradients or glow effects
- **Don't:** Don't set body copy in mint
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
