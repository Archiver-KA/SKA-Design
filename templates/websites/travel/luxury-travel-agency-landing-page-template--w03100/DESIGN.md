# Design system — Luxury Travel Agency Landing Page Template

`SN-W03100` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark hero on near-black (#0a0a0a) with a white headline, Curating the, and a grey second line, Uncharted. The indigo (#818cf8) primary button sits beside an outlined secondary. The right side is a stack of rounded photo cards with a floating trip summary, so the photographs supply the colour while the interface stays dark and neutral.

**Mood:** dark, cinematic, modern, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#cffafe` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#000000` · `#737373` · `#c8cdc7` · `#050505` · `#818cf8` · `#525252` · `#262626` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(59,130,246,0.6)]`, `shadow-[0_0_20px_rgba(37,99,235,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-sage px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 text-black hover:bg-white group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Booking form (`booking`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #cffafe;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#cffafe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans-serif in white, with the second line in grey
- **Do:** Use the indigo (#818cf8) for the primary button only
- **Do:** Frame photographs as tall rounded cards with a small floating summary panel
- **Don't:** Don't use the grey-green ground (#c8cdc7); the hero is near-black
- **Don't:** Don't put the pale cyan (#cffafe) on white; it disappears
- **Don't:** Don't let the photographs run full bleed behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
