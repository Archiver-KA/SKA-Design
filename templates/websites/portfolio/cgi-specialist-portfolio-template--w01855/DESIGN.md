# Design system — CGI Specialist Portfolio Template

`SN-W01855` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black, cinematic 3D artist page where a large white sans headline sits over a blurred scene, with the middle phrase blurred to suggest depth. The first screen is almost entirely grey and white, and the nav is a single outlined pill. The lime and blue accents do not show on the first screen, so the hero reads as monochrome.

**Mood:** cinematic, blurred, monochrome, futuristic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#bef264` · `#06b6d4` · `#3b82f6` · `#171717` · `#a3e635` · `#60a5fa` · `#22d3ee` · `#a78bfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 60px · h3 20px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)]`, `shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-white/80 bg-white/5 rounded-full px-6 py-3">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Case studies (`case-studies`)
6. About (`about`)
7. Services (`services`)
8. Process / steps (`how-it-works`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #3b82f6;
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
    surface: '#171717',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, with one phrase blurred to suggest depth
- **Do:** Use a dark, low-contrast backdrop behind the hero text
- **Do:** Keep the nav to outlined pills
- **Don't:** Don't introduce the lime accent (#a3e635) into the hero
- **Don't:** Don't put body copy directly on the blurred scene
- **Don't:** Don't use light-coloured text on a light scene

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
