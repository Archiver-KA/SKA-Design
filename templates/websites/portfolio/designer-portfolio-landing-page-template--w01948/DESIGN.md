# Design system — Designer Portfolio Landing Page Template

`SN-W01948` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with a large sans name in white on the first line and a grey second line, a small outlined pill above, and a short grey paragraph. Two dark cards sit below, one holding a portrait frame and the other a glass-like intro panel. The palette is neutral, and hierarchy comes from size and grey steps rather than colour.

**Mood:** neutral, dark, calm, structured, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0c` | Page ground |
| Surface | `#444444` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#14a800` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#737373` · `#34d399` · `#d4d4d4` · `#e5e5e5` · `#0b0b0c` · `#10b981` · `#06b6d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Inter
- **Loaded families:** Geist, Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 24px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-4 py-2 rounded-full text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-all font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Timeline (`timeline`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0b0b0c;
  --color-surface: #444444;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #14a800;
  --font-display: "Geist", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0c',
    surface: '#444444',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#14a800',
  },
  fontFamily: { display: ['Geist'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in large sans, white, with a grey second line
- **Do:** Keep the cards as dark panels with thin borders
- **Do:** Use grey steps rather than colour for hierarchy
- **Don't:** Don't add a light background; the page is dark
- **Don't:** Don't set body copy in pure white; use the grey step
- **Don't:** Don't add colour to the cards; they stay neutral

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
