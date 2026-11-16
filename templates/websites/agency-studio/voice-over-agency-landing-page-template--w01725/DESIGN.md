# Design system — Voice-Over Agency Landing Page Template

`SN-W01725` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, quiet voice-over page with a textured near-black ground and a serif headline that pairs an upright white phrase with an italic grey phrase. The bronze tone [#b87333] is used only on the navigation button outline, which gives the page a single warm note. Thin caps labels in the corners and a centred white button keep the layout restrained and editorial.

**Mood:** quiet, editorial, dark, warm, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#161616` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b87333` | Primary action and highlights |
| Second accent | `#2c3e50` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#b87333` · `#6b7280` · `#121212` · `#9ca3af` · `#161616` · `#d1d5db` · `#4b5563` · `#2c3e50` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Libre Baskerville, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-[200px]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full md:w-auto px-12 py-4 bg-[#B87333] text-[#121212] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white transition-all duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. 3D / canvas scene (`3d-canvas`)
5. Process / steps (`how-it-works`)
6. Feature grid (`features`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #161616;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #b87333;
  --color-accent-2: #2c3e50;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#161616',
    surface: '#121212',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#b87333',
    accent2: '#2c3e50',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif with the second phrase in grey italic
- **Do:** Use the bronze (#b87333) only for the outline on the navigation button
- **Do:** Keep the page on a near-black ground (#161616) with a white primary button
- **Don't:** Don't use bright colours; the bronze is the only warm tone
- **Don't:** Don't set headlines in sans-serif
- **Don't:** Don't round the primary button into a pill; it stays rectangular

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
