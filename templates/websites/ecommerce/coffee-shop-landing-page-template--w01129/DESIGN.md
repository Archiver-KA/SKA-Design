# Design system — Coffee Shop Landing Page Template

`SN-W01129` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A French cafe page has a soft grey-to-cream gradient hero, where the headline is a large serif in two tones: white on the first line and pale yellow (#fbbf24) on the second. The contrast is weak, so the headline reads as a faded, atmospheric display rather than a bold statement. Small tracked uppercase labels sit above it, and a single scroll cue sits at the bottom of the screen.

**Mood:** atmospheric, faded, classic, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfbf7` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#1c1917` | Secondary copy, captions |
| Border | `#1c1917` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#d97706` · `#78716c` · `#ffffff` · `#fdfbf7` · `#fbbf24` · `#f5f2eb` · `#44403c` · `#f59e0b` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif, Merriweather
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-12`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Marquee (`marquee`)
5. Menu list (`menu-list`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfbf7;
  --color-surface: #1c1917;
  --color-text: #1c1917;
  --color-muted: #1c1917;
  --color-border: #1c1917;
  --color-accent: #fbbf24;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfbf7',
    surface: '#1c1917',
    ink: '#1c1917',
    muted: '#1c1917',
    line: '#1c1917',
    accent: '#fbbf24',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the second line in pale yellow (#fbbf24)
- **Do:** Keep the grey-to-cream gradient as the hero ground, without a photograph
- **Do:** Keep the navigation and labels small and tracked in uppercase
- **Don't:** Don't set the pale yellow headline on the light part of the gradient; it loses contrast
- **Don't:** Don't add a bright or saturated accent
- **Don't:** Don't rely on a background image for texture.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
