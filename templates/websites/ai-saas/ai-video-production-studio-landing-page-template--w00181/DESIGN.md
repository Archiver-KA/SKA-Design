# Design system — AI Video Production Studio Landing Page Template

`SN-W00181` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `ru`

## Direction

Black page with uppercase, heavy Cyrillic headlines set very large and tight, the middle lines fading into a silver gradient from white to grey. A minimal top nav in small caps and a solid white button make a strict monochrome frame. The fading gradient on the headline is the one expressive device; the rest is type and space.

**Mood:** monochrome, uppercase, dramatic, severe

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#581c87` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#d4d4d4` · `#000000` · `#050505` · `#262626` · `#525252` · `#a3a3a3` · `#171717` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Involve
- **Body:** Involve
- **Loaded families:** Manrope, Involve
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_8px_rgba(34,197,94,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="bg-white/5 hover:bg-white/10 px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all text-white">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --color-accent-2: #581c87;
  --font-display: "Involve", sans-serif;
  --font-body: "Involve", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#22c55e',
    accent2: '#581c87',
  },
  fontFamily: { display: ['Involve'], sans: ['Involve'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans-serif, large, with a white-to-grey gradient on the middle lines
- **Do:** Keep the page on black (#000000) and use white for all headline text
- **Do:** Use a solid white button in the nav as the single call to action
- **Don't:** Don't introduce bright colour; the page is monochrome
- **Don't:** Don't set body copy in uppercase; it stays in sentence case
- **Don't:** Don't set the headline on a light ground; the black is the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
