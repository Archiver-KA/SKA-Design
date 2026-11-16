# Design system — Artisan Masonry Service Landing Page Template

`SN-W03809` · business-services · dark mode · Sinera Atlas theme `route` · language `fr`

## Direction

A black hero with a bold white sans-serif headline set in two short lines, a short orange rule beneath it, and an uppercase orange text link as the call to action. A diagonal grey photographic panel cuts across the right side and adds structure without colour. Small contact details sit in a row along the bottom edge, giving the page a direct, craftsman's tone.

**Mood:** bold, direct, craftsman, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#09090b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#09090b` · `#18181b` · `#a1a1aa` · `#71717a` · `#27272a` · `#52525b` · `#3f3f46` · `#fed7aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="w-full font-bold uppercase tracking-wide text-xs py-4 rounded transition-colors bg-white text-zinc-950 hover:bg-zinc-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Pricing (`pricing`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #09090b;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#09090b',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a heavy sans-serif at a large size, in white (#ffffff), on near-black (#09090b).
- **Do:** Use orange (#f97316) for the short rule and the uppercase call to action only.
- **Do:** Divide the hero with the diagonal panel rather than with boxes or cards.
- **Don't:** Don't set body copy in orange.
- **Don't:** Don't add rounded corners to the panels.
- **Don't:** Don't place the orange rule across the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
