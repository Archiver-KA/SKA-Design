# Design system — Executive Search & Recruitment Landing Page Template

`SN-W03902` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black ground carries oversized uppercase headlines in a white sans, with a soft blue and violet light bloom behind the hero for depth. The display size dominates the first screen, while the other text stays small and quiet. The primary action is a solid blue button beside an outlined secondary, and the navigation sits in a translucent rounded glass bar. The result is cinematic and high-contrast.

**Mood:** cinematic, high-contrast, premium, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050a14` | Page ground |
| Surface | `#050a14` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#007bff` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#007bff` · `#9ca3af` · `#050a14` · `#d1d5db` · `#000000` · `#f97316` · `#10b981` · `#22d3ee` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Open Sans
- **Body:** Open Sans
- **Loaded families:** Montserrat, Open Sans
- **Scale (largest breakpoint):** h1 152px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-inner`, `shadow-lg`, `shadow-[0_0_10px_#007bff]`
- **Content width:** `max-w-7xl`, `max-w-[100vw]`
- **Common gaps:** `gap-6`, `gap-3`, `gap-4`

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. About (`about`)
6. Team (`team`)
7. Feature grid (`features`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050a14;
  --color-surface: #050a14;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #007bff;
  --color-accent-2: #f97316;
  --font-display: "Open Sans", sans-serif;
  --font-body: "Open Sans", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050a14',
    surface: '#050a14',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#007bff',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Open Sans'], sans: ['Open Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase at very large size with tight leading, in white.
- **Do:** Use the blue (#007bff) only for the primary button and the light bloom behind the hero.
- **Do:** Keep the navigation in a translucent rounded glass bar over the hero.
- **Don't:** Don't place light backgrounds behind the hero; the near-black ground is part of the style.
- **Don't:** Don't set body copy in grey over the blue glow; keep it on the dark ground.
- **Don't:** Don't use more than one glow colour at a time.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
