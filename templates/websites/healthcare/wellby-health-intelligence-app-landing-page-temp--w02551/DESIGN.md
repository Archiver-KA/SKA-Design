# Design system — WellBy Health Intelligence App Landing Page Template

`SN-W02551` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, futuristic iOS-app landing page: a pure black ground with faint grid lines, a silver-to-white gradient headline, and a violet (#6155f5) second line that carries the emphasis. The navigation is a floating dark pill with text links, and the hero's single download button is a thin outlined pill. The stance is privacy-minded and technical, with few colours and the type doing the atmosphere.

**Mood:** futuristic, technical, private, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6155f5` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6155f5` · `#000000` · `#a1a1aa` · `#18181b` · `#71717a` · `#9ca3af` · `#27272a` · `#c084fc` · `#b89fff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.8)]`, `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #6155f5;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#6155f5',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use violet (#6155f5) for the second headline line and the badge dot
- **Do:** Keep the ground pure black (#000000) with the faint grid lines behind the hero
- **Do:** Keep the navigation to text links and one thin outlined pill
- **Don't:** Don't add a second bright colour to the hero; green is absent above the fold
- **Don't:** Don't use violet for body copy
- **Don't:** Don't fill the download button; it stays outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
