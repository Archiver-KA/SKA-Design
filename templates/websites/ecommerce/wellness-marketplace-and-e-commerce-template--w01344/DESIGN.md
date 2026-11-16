# Design system — Wellness Marketplace and E-commerce Template

`SN-W01344` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, search-first wellness hero on black, with a large white centred question set in heavy sans-serif across two lines. The main element is a wide white search pill with black circular ends, and outlined chips below suggest common goals. The look is blunt and direct: the type and the search field do all the work, and there is no imagery in the first screen.

**Mood:** direct, dark, bold, conversational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#71717a` · `#52525b` · `#a1a1aa` · `#27272a` · `#d4d4d8` · `#60a5fa` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 18px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium hover:bg-white/10 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline as a large centred question in heavy white sans-serif over two lines
- **Do:** Make the search bar a wide white pill with black circular ends as the single action
- **Do:** Use outlined chips for suggested goals below the search, in neutral tones
- **Don't:** Don't add imagery to the first screen; the question and search carry the page
- **Don't:** Don't use coloured accents on the chips; they stay outlined and neutral
- **Don't:** Don't set the headline in a light weight; the heavy weight is the voice

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
