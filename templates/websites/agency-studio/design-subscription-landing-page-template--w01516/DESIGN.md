# Design system — Design Subscription Landing Page Template

`SN-W01516` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white page with a large black headline and one grey italic word inside it, which is the main typographic idea. The primary action is a solid black pill, and a floating black Buy Template button sits at the bottom right. Green appears only as a small availability dot, so colour is nearly absent and the page relies on type size and contrast.

**Mood:** monochrome, type-led, calm, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e4e4e7` · `#52525b` · `#18181b` · `#71717a` · `#27272a` · `#f4f4f5` · `#fafafa` · `#a1a1aa` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-zinc-900 hover:bg-zinc-800 transition-colors text-white rounded-full py-3 px-6 text-sm font-medium shadow-xl flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Pricing (`pricing`)
5. Logo cloud (`logo-cloud`)
6. Video / media (`video-media`)
7. Feature grid (`features`)
8. Bento grid (`bento-grid`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #52525b;
  --color-border: #e4e4e7;
  --color-accent: #10b981;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#52525b',
    line: '#e4e4e7',
    accent: '#10b981',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the hero headline large in black sans-serif with one grey italic word as the emphasis
- **Do:** Use solid black pill buttons (#18181b) for the primary action
- **Do:** Reserve green (#10b981) for small status markers such as the availability dot
- **Don't:** Don't use green for buttons or large areas
- **Don't:** Don't add a second typeface to the hero
- **Don't:** Don't use more than one emphasis treatment in a single headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
