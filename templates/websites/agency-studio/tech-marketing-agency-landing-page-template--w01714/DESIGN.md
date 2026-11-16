# Design system — Tech Marketing Agency Landing Page Template

`SN-W01714` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black page with a centred, large white sans headline in two lines, a grey subline and two pill buttons, one filled grey and one outlined. Nothing else competes for attention in the first screen, so the page depends on type scale and spacing. The green accent does not show in the first screen.

**Mood:** stark, minimal, dark, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#22c55e` · `#4ade80` · `#000000` · `#bbf7d0` · `#171717` · `#e5e5e5` · `#14532d` · `#a3a3a3` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`, `shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-1`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl border px-8 py-4 text-sm font-semibold text-white transition font-geist shadow-[0_0_30px_rgba(99,102,241,0.3)] w-full sm:w-auto justify-center border-green-500/20 bg-green-500 hover:bg-green-400">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Benefits (`benefits`)
4. Services (`services`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #22c55e;
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
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline in large white sans on pure black.
- **Do:** Use a filled grey pill and an outlined pill as the paired buttons.
- **Do:** Keep the first screen to headline, subline and two buttons only.
- **Don't:** Don't add decoration to the hero; the design relies on empty space.
- **Don't:** Don't use the green (#22c55e) for the first-screen buttons; they are grey here.
- **Don't:** Don't set the subline in pure white; keep it grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
