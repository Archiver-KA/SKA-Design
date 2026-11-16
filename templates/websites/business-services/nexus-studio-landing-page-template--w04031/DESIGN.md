# Design system — Nexus Studio Landing Page Template

`SN-W04031` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A stark black studio page whose hero is a single oversized sans-serif line in white, with the second word set in mid-grey. A thin bottom bar of evenly spaced labels closes the hero, and one blue start-project button sits at its right end. Nothing else is coloured, so the page feels cinematic and deliberately empty.

**Mood:** cinematic, stark, minimal, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#60a5fa` · `#d4d4d4` · `#a3a3a3` · `#000000` · `#171717` · `#262626` · `#93c5fd` · `#3b82f6` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="mt-6 w-full rounded-lg border border-white/15 bg-transparent py-3 text-center text-sm font-medium text-white transition hover:bg-white/5 inline-flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Process / steps (`how-it-works`)
5. About (`about`)
6. Pricing (`pricing`)
7. Footer (`footer`)

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
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #f97316;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
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
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Split the hero headline into a white word and a grey word
- **Do:** Use the blue (#60a5fa) for the single start-project action
- **Do:** Keep the bottom navigation as an evenly spaced bar of labels
- **Don't:** Don't colour large text; keep headlines white and grey
- **Don't:** Don't place more than one blue action on a screen
- **Don't:** Don't add light backgrounds to sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
