# Design system — Cinematic Production Studio Landing Page Template

`SN-W01860` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black production-house landing page with a rounded, floating navigation bar and a centred large white sans headline. The second line, 'resonate.', is a metallic grey gradient, and a small red dot marks the status tag above. A solid white pill and an outlined pill carry the calls to action, and the red appears only in the tag dot.

**Mood:** cinematic, stark, premium, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#000000` · `#737373` · `#dc2626` · `#a3a3a3` · `#171717` · `#d4d4d4` · `#050505` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 20px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide overflow-hidden rounded-sm transition-all hover:pr-10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. About (`about`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Services (`services`)
8. Map / location (`map-location`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, with the second line in a metallic grey gradient
- **Do:** Keep the floating nav as a rounded, frosted bar
- **Do:** Use red (#ef4444) only for the small status dot
- **Don't:** Don't use red for buttons or headlines
- **Don't:** Don't use maroon (#7f1d1d) as a page ground
- **Don't:** Don't set the gradient on body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
