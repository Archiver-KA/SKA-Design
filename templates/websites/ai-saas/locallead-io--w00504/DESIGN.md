# Design system — locallead.io

`SN-W00504` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A saturated, dark-blue lead-generation page with a radial glow over a deep navy (#022950) ground, white Inter-style headlines and a mint (#99f6db) emphasis line. Thin grid lines and a faint circular map give it a technical, data-led look. The bright blue (#1b9df3) appears in the nav button and the glow, so the page reads as confident and energetic rather than corporate.

**Mood:** energetic, technical, confident, saturated, data-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#022950` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1b9df3` | Primary action and highlights |
| Second accent | `#99f6db` | Supporting highlights |

Palette by frequency of use: `#1b9df3` · `#99f6db` · `#ffffff` · `#0660ac` · `#73e049` · `#022950` · `#ef4444` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_20px_rgba(27,157,243,0.2)]`, `shadow-[0_0_20px_rgba(27,157,243,0.3)]`, `shadow-[0_0_5px_#73e049]`
- **Content width:** `max-w-7xl`, `max-w-[240px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#1b9df3] px-4 py-2 text-xs font-medium text-white transition-all hover:bg-[#1b9df3]/80 shadow-[0_0_20px_rgba(27,157,243,0.3)] hover:shadow-[0_0_25px_rgba(27,157,243,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Team (`team`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #022950;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #1b9df3;
  --color-accent-2: #99f6db;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#022950',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#1b9df3',
    accent2: '#99f6db',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the emphasis line of the headline in mint (#99f6db).
- **Do:** Use the bright blue (#1b9df3) for the nav button and primary action.
- **Do:** Keep the hero on the deep navy ground with a soft radial glow.
- **Don't:** Don't set the hero copy in dark text; it is white on navy.
- **Don't:** Don't use the red (#ef4444) or yellow (#eab308) from the palette in the hero.
- **Don't:** Don't add flat light sections between the dark blue blocks.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
