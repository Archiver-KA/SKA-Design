# Design system — Health Optimization Landing Page Template

`SN-W02395` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, premium performance hero on a black ground (#050505), with a large light sans-serif headline in white and an orange (#f97316) pill button as the primary action. Small orange labels and a thin orange ring mark the details, and a faint warm glow sits behind the headline. The page is cinematic and restrained, with orange used sparingly to lead the eye.

**Mood:** cinematic, premium, restrained, dark, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#737373` · `#000000` · `#fb923c` · `#050505` · `#a3a3a3` · `#ea580c` · `#d4d4d4` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 72px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_0_50px_10px_rgba(249,115,22,0.45)]`
- **Content width:** `max-w-7xl`, `max-w-[90%]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Logo cloud (`logo-cloud`)
6. Stats band (`stats`)
7. Case studies (`case-studies`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in light-weight Inter at large size, tight leading, white on black.
- **Do:** Use the orange (#f97316) for the primary button, small labels and the ring marks only.
- **Do:** Keep the page on the black ground (#050505) with the near-black surface (#000000).
- **Don't:** Don't set body copy in orange; it is reserved for action and labels.
- **Don't:** Don't add a second accent colour beside the orange.
- **Don't:** Don't use heavy bold on the headline; the light weight is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
