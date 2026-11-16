# Design system — Automotive Archive Website Template

`SN-W03825` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A cinematic dark page built around a full-width photograph of a grey car, darkened with an overlay so the white headline stays readable. The headline is very large, uppercase and tightly set, with a small letter-spaced exhibit label above it and a short light-grey caption below. The page has almost no colour of its own: the photograph supplies the tone and the type stays white.

**Mood:** cinematic, monochrome, museum-like, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#171717` · `#737373` · `#262626` · `#0a0a0a` · `#d4d4d4` · `#f5f5f5` · `#000000` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-[1800px]`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Case studies (`case-studies`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-muted: #737373;
  --color-border: #262626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#fafafa',
    muted: '#737373',
    line: '#262626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero over a full-width photograph with a dark overlay.
- **Do:** Use uppercase white headlines with tight spacing.
- **Do:** Keep captions in light grey beneath the headline.
- **Don't:** Don't add a coloured accent that competes with the photography.
- **Don't:** Don't place the headline over a bright part of the image.
- **Don't:** Don't set the headlines in lowercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
