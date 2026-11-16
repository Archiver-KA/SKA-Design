# Design system — Lumina Studio Creative Landing Page Template - home

`SN-W04234` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark creative studio page on black (#000000) where the headline's second line carries a blue-to-violet gradient, which is the one colour moment on the first screen. Large sans-serif type sits left, with pill-shaped white and outlined buttons below it. The right side holds a framed AI artwork panel with a soft glow, and the stats row below uses plain white numerals.

**Mood:** dark, creative, polished, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#c084fc` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#4ade80` · `#fafafa` · `#60a5fa` · `#737373` · `#c084fc` · `#2563eb` · `#9333ea` · `#ea580c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-black/40`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Bento grid (`bento-grid`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #c084fc;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#c084fc',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the gradient only on the second headline line, from blue (#60a5fa) to violet (#c084fc)
- **Do:** Use white pill buttons for the primary action and outlined ones for the secondary
- **Do:** Keep the background black (#000000) with white body text
- **Don't:** Don't put the gradient on body copy or buttons
- **Don't:** Don't add a second gradient to the same hero
- **Don't:** Don't lighten the page ground; the glow shapes need black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
