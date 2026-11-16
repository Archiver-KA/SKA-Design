# Design system — Cinematic Wedding Videography Template

`SN-W03574` · events · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

The wedding videography page is almost entirely black, with large light serif headlines in white and grey secondary text. A translucent navigation bar holds small uppercase links, and a single thin-outlined pill button makes the call to action. Type and empty space carry the look, which suits a film portfolio.

**Mood:** cinematic, restrained, dark, elegant, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#2c3a2a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#f5f1eb` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b8860b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f5f1eb` · `#b8860b` · `#000000` · `#0e0e0c` · `#2c3a2a` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 36px · body 12px
- **Weights in use:** bold

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1200px]`, `max-w-[720px]`
- **Section padding:** `py-[120px]`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#B8860B] text-[#0E0E0C] block text-center rounded-full py-3 caps-tracked text-xs w-full hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Stats band (`stats`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #2c3a2a;
  --color-text: #ffffff;
  --color-muted: #f5f1eb;
  --color-border: #ffffff;
  --color-accent: #b8860b;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#2c3a2a',
    ink: '#ffffff',
    muted: '#f5f1eb',
    line: '#ffffff',
    accent: '#b8860b',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in light serif at display size
- **Do:** Keep the first screen on black with generous space around the headline
- **Do:** Use a single outlined pill for the call to action
- **Don't:** Don't add bright colours to the hero
- **Don't:** Don't use bold sans-serif headlines
- **Don't:** Don't fill the call-to-action button solid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
