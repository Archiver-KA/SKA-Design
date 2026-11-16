# Design system — Digital Studio Portfolio Landing Page Template

`SN-W01989` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Refined, airy dark studio page: a charcoal ground (#18181b) with a large thin sans headline in white, Innate Intelligence, set at a light weight with a full stop. Below it, a grid of rounded project tiles holds photographs and dark captioned cards. The green (#4ade80) appears only in the availability pill, so the page stays neutral and lets the work carry the colour.

**Mood:** refined, airy, dark, thin, gallery-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#52525b` · `#000000` · `#18181b` · `#27272a` · `#3f3f46` · `#e4e4e7` · `#030304`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h2 48px · h3 18px · body 12px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full py-4 mt-2 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-zinc-200 transition-colors interactable">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Testimonials (`testimonials`)
5. FAQ (`faq`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #4ade80;
  --color-accent-2: #4ade80;
  --font-display: "Manrope", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#4ade80',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Manrope'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light-weight sans, large and white, ending with a full stop
- **Do:** Use rounded project tiles with dark captions set on the tile
- **Do:** Keep the green (#4ade80) to the availability pill
- **Don't:** Don't set the headline in bold; the light weight is the identity
- **Don't:** Don't fill project tiles with saturated colour
- **Don't:** Don't use the deep purple (#581c87).

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
