# Design system — Religious Services Landing Page Template

`SN-W04073` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A black, editorial hero where a large white serif headline carries a middle line in italic, creating a refined, literary rhythm. A gold logo mark and a thin rule beside the intro line add a single warm note, while the outlined button keeps the call to action quiet. Type does nearly all the work, and the tone is dignified and spare.

**Mood:** dignified, spare, literary, refined, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#d4af37` · `#000000` · `#ffffff` · `#e4e4e7` · `#d4d4d8` · `#71717a` · `#fafafa` · `#a1a1aa` · `#18181b` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-[1800px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="px-6 py-2 border border-white/30 rounded-none hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-sm font-medium uppercase tracking-wide backdrop-blur-sm text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Contact form (`contact-form`)
5. Marquee (`marquee`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #d4af37;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif, with the middle line in italic as in the hero
- **Do:** Use the gold (#d4af37) for the logo and small accents only
- **Do:** Make buttons outlined with thin white borders and small tracked uppercase labels
- **Don't:** Don't fill buttons with gold or another solid colour
- **Don't:** Don't use a light page background for the hero; the black field is part of the look
- **Don't:** Don't set the intro line in the serif; sans is for body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
