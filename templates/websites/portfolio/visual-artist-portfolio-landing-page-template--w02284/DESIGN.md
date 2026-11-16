# Design system — Visual Artist Portfolio Landing Page Template

`SN-W02284` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black ground with white, heavy, uppercase Inter headlines that run the full width of the first screen. Nothing else competes on the hero: a minimal nav with a logo and two text links, and a small floating control at the bottom left. The accent colour does not appear in the first screen, so colour is left to the content further down.

**Mood:** cinematic, stark, bold, minimal, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b7280` · `#000000` · `#9ca3af` · `#1f2937` · `#d1d5db` · `#374151` · `#030712` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 24px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-2`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Stats band (`stats`)
5. Video / media (`video-media`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111827;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #f97316;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#111827',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#f97316',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in heavy uppercase Inter at full width
- **Do:** Keep the first screen to black and white only
- **Do:** Keep the navigation to a logo and a few short text links
- **Don't:** Don't add gradients or glow to the hero; the flat black field is the look
- **Don't:** Don't place a light section directly under the hero
- **Don't:** Don't add decorative imagery to the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
