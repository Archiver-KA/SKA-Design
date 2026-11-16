# Design system — Architect Studio Portfolio Landing Page Template

`SN-W01798` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Photo-led and cinematic: a full-bleed architecture photograph carries the hero, with large white sans capitals stacked over it in two lines and a thin rule between them. The chrome is small and sparse, with spaced uppercase nav links and a tracked subtitle under the title. Colour comes from the photograph itself, warm timber against dusk blue, so the interface stays neutral and the image sets the palette.

**Mood:** cinematic, photographic, restrained, architectural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#4b5563` · `#f3f4f6` · `#6b7280` · `#000000` · `#f9fafb` · `#1f2937` · `#d1d5db` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[1600px]`, `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #22c55e;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f3f4f6',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#22c55e',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use a full-bleed architecture photograph as the hero and let it set the colour
- **Do:** Set hero titles in large white sans capitals directly over the image
- **Do:** Keep nav and subtitles small, uppercase and widely tracked
- **Don't:** Don't add accent colours to the interface; the photograph is the palette
- **Don't:** Don't put the title in a tinted or coloured box
- **Don't:** Don't crowd the title; leave the lower band of the photo open

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
