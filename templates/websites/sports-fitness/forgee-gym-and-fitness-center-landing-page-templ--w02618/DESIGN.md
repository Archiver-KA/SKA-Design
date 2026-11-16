# Design system — FORGEE | Gym and Fitness Center Landing Page Template

`SN-W02618` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark, photo-led gym hero in Portuguese. A dimmed photograph of equipment sits under three uppercase Inter lines, with the final line in orange (#e84400) and the rest in white. The orange appears on the header button and on the last headline line, and the navigation is small and understated, so the page is blunt and direct.

**Mood:** blunt, dark, photographic, direct, uppercase

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a0a0a0` | Secondary copy, captions |
| Border | `#242424` | Hairlines, dividers, outlines |
| Accent | `#e84400` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a0a0a0` · `#242424` · `#0a0a0a` · `#111111` · `#e84400` · `#555555` · `#e8e8e8` · `#1a1a1a` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 24px · body 18px
- **Weights in use:** black, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a0a0a0;
  --color-border: #242424;
  --color-accent: #e84400;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a0a0a0',
    line: '#242424',
    accent: '#e84400',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set each headline line in heavy uppercase Inter, with the final line in orange (#e84400).
- **Do:** Use orange (#e84400) for the header button and the final headline line only.
- **Do:** Keep a dimmed photograph under the hero so white text stays readable.
- **Don't:** Don't set the Portuguese subline in uppercase; it stays in sentence case.
- **Don't:** Don't use the orange for navigation links.
- **Don't:** Don't place the hero copy over a bright image.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
