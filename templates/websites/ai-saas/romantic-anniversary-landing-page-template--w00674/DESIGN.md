# Design system — Romantic Anniversary Landing Page Template

`SN-W00674` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A romantic, dark-plum landing page with a soft purple glow across the ground. The couple's names are the centrepiece, set large in a serif and filled with a pink-to-lavender gradient, with a grey ampersand between them. A pink-to-violet gradient button leads the page, and the palette stays within pinks and violets against near-black.

**Mood:** romantic, dark, glowing, intimate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a14` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f9a8d4` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f9a8d4` · `#ec4899` · `#f472b6` · `#a855f7` · `#0c0a14` · `#c084fc` · `#000000` · `#d946ef` · `#d8b4fe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Dancing Script, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 24px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-pink-500/30`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-28`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Modal / overlay (`modal-overlay`)
6. Call to action (`cta`)
7. Timeline (`timeline`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0a14;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f9a8d4;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a14',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f9a8d4',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the names large in a serif with a pink (#f9a8d4) to violet gradient fill
- **Do:** Keep the ground near-black (#0c0a14) with soft purple glows, not flat colour
- **Do:** Use the pink-to-violet gradient only on the primary button and the names
- **Don't:** Don't add a light ground; the hero is dark throughout
- **Don't:** Don't set the names in a plain sans-serif; the serif is part of the look
- **Don't:** Don't use the pink-to-violet gradient on body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
