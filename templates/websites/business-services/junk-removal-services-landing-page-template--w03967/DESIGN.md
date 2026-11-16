# Design system — Junk Removal Services Landing Page Template

`SN-W03967` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, cinematic service page on near-black (#020202) with a soft glow behind the centred headline. The first line is white and the second is mint green (#34d399), and green also colours the supporting paragraph. A white pill primary button stands out against the dark ground, with a dark outlined pill beside it.

**Mood:** dark, cinematic, bold, clean, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#34d399` · `#10b981` · `#020202` · `#737373` · `#6ee7b7` · `#064e3b` · `#059669` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_40px_-5px_#10b981]`, `shadow-[0_0_30px_-5px_#10b981]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="group p-2 rounded-full transition-colors hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Bento grid (`bento-grid`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Pricing (`pricing`)
8. Listings (`listings`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground near-black (#020202) with a soft glow behind the headline
- **Do:** Use mint green (#34d399) for the second headline line and supporting copy only
- **Do:** Use a white pill for the primary button and an outlined dark pill for the secondary
- **Don't:** Don't use mint green for buttons or large fills
- **Don't:** Don't set the supporting copy in white; keep it green
- **Don't:** Don't add light panels to the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
