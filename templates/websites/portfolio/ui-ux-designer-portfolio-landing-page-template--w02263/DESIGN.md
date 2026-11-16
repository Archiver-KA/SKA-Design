# Design system — UI/UX Designer Portfolio Landing Page Template

`SN-W02263` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark navy designer portfolio with a clear split hero: a large sans headline on the left, and a framed availability panel on the right that lists pricing, response time and a call button. The ground is near-black navy (#020617), panels sit slightly lighter, and the primary buttons are pale grey rather than a bright colour. Small pill chips under the copy carry the key facts, and the availability card is what makes the page recognisable.

**Mood:** precise, dark, structured, professional, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#6ee7b7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cbd5e1` · `#000000` · `#e2e8f0` · `#6ee7b7` · `#0f172a` · `#94a3b8` · `#020617` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 36px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`, `shadow-sm`, `shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-2 text-sm text-slate-200 hover:bg-white/15 transition font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #6ee7b7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#6ee7b7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the availability card as the hero's right column, with label and value pairs.
- **Do:** Use pale grey (#e2e8f0) for primary buttons on the navy ground.
- **Do:** Set small facts in pill chips under the hero copy.
- **Don't:** Don't use a bright colour for the primary button; it is pale grey.
- **Don't:** Don't remove the availability card from the hero; it carries the offer.
- **Don't:** Don't set panels lighter than the navy surfaces; depth comes from hairline borders.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
