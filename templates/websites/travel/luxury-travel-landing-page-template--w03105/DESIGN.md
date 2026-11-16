# Design system — Luxury Travel Landing Page Template

`SN-W03105` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A deep green-black hero (#1a2c2b) with a large sans-serif headline in pale grey-white and a centred subline. Gold (#cda036) is the accent, shown in the small marker above the scroll cue and in the tab rule, and the layout is spacious with tall section gaps. The palette is green, grey and gold, and the gold is used sparingly against the dark ground.

**Mood:** earthy, calm, dark, mountain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a2c2b` | Page ground |
| Surface | `#162524` | Cards, panels, raised areas |
| Text | `#e2e8f0` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#cda036` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cda036` · `#94a3b8` · `#64748b` · `#1a2c2b` · `#162524` · `#cbd5e1` · `#192b2a` · `#111e1d` · `#142221`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#cda036] hover:bg-[#b58b2e] text-white text-xs font-medium tracking-wider uppercase px-8 py-3.5 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Stats band (`stats`)
6. Pricing (`pricing`)
7. Services (`services`)
8. Timeline (`timeline`)
9. Booking form (`booking`)
10. Gallery / portfolio (`gallery-portfolio`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1a2c2b;
  --color-surface: #162524;
  --color-text: #e2e8f0;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #cda036;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a2c2b',
    surface: '#162524',
    ink: '#e2e8f0',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#cda036',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground in deep green (#1a2c2b) and cards a shade darker (#162524)
- **Do:** Use gold (#cda036) for small markers, rules and the one emphasis per section
- **Do:** Set the headline large and centred, with a short grey subline beneath
- **Don't:** Don't add bright colours to the hero; the palette is green, grey and gold
- **Don't:** Don't use the gold as a fill for large areas
- **Don't:** Don't place body copy over photographs without a dark overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
