# Design system — AI Companion Landing Page Template

`SN-W00072` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black page with a full-bleed red-tinted photograph behind a large white uppercase sans headline, with glitch-like colour fringing across the image. A small orange phrase sits beside the copy, and a dark translucent card with a weekday tracker sits lower left. The image carries the colour, and orange is kept for emphasis.

**Mood:** cinematic, glitched, bold, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#000000` · `#525252` · `#262626` · `#a3a3a3` · `#171717` · `#737373` · `#404040` · `#ea580c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1px]` (1px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_4px_30px_rgba(0,0,0,0.1)]`, `shadow-lg`
- **Content width:** `max-w-[1600px]`, `max-w-[200px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="bg-neutral-800 text-white px-3 py-1 hover:bg-orange-500 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. FAQ (`faq`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
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
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy uppercase over the full-bleed photo
- **Do:** Use orange (#f97316) for one highlight phrase
- **Do:** Keep UI cards dark and translucent
- **Don't:** Don't place body copy over the busiest part of the photo
- **Don't:** Don't use orange for large fills
- **Don't:** Don't add more than one glitch effect per hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
