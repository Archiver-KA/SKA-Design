# Design system — Sports Tournament Landing Page Template

`SN-W02684` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

Editorial sports-event page on a plain off-white ground (#f8f8f6). The hero is one centred line of heavy black sans type, with a single word set in olive italic serif (Torneio, #869947). That contrast between a bold sans and an olive italic is the only ornament on the first screen, and colour stays restrained to black, white and one olive accent.

**Mood:** editorial, restrained, bold sans, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f8f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0d1f1a` | Headings and primary copy |
| Border | `#0d1f1a` | Hairlines, dividers, outlines |
| Accent | `#869947` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#0d1f1a` · `#869947` · `#ffffff` · `#f8f8f6` · `#25d366` · `#d1d1d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 24px · body 14px
- **Weights in use:** bold, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="bg-dark text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-olive transition-colors duration-500">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Navigation bar (`navbar`)
4. Marquee (`marquee`)
5. Services (`services`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8f8f6;
  --color-surface: #ffffff;
  --color-text: #0d1f1a;
  --color-border: #0d1f1a;
  --color-accent: #869947;
  --color-accent-2: #25d366;
  --font-display: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f8f6',
    surface: '#ffffff',
    ink: '#0d1f1a',
    line: '#0d1f1a',
    accent: '#869947',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Poppins'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy Poppins at large size on the off-white ground (#f8f8f6).
- **Do:** Pick out one key word per headline in olive italic (#869947).
- **Do:** Keep surfaces white (#ffffff) and avoid grey panels behind the hero.
- **Don't:** Don't add gradients or photo backgrounds to the hero; the look is flat type on paper.
- **Don't:** Don't use olive (#869947) as a large fill; it works as a word colour and small accent.
- **Don't:** Don't add a second accent colour to the hero beside the olive.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
