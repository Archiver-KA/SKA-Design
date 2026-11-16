# Design system — Luxury Salon Landing Page Template

`SN-W02794` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark salon hero on a deep navy-grey ground (#0f172a) over a desaturated photograph. The headline is a large white serif, and its second line, 'Every Style', is set in bright cyan (#00d7ef) in an upright sans, a contrast in colour and typeface. Cyan carries the eyebrow pill, the primary button and the nav booking button. The cyan and typeface switch do the distinguishing.

**Mood:** cool, bold, modern, crisp, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00d7ef` | Primary action and highlights |
| Second accent | `#c9a24d` | Supporting highlights |

Palette by frequency of use: `#00d7ef` · `#ffffff` · `#0f172a` · `#9ca3af` · `#d1d5db` · `#4b5563` · `#c9a24d` · `#6b7280` · `#f8fafc` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(0,215,239,0.3)]`, `shadow-[0_0_20px_rgba(0,215,239,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-medium tracking-wide text-[#0F172A] uppercase bg-[#00D7EF] rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(0,215,239,0.5)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Map / location (`map-location`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #00d7ef;
  --color-accent-2: #c9a24d;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#00d7ef',
    accent2: '#c9a24d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in bright cyan (#00d7ef) and keep the rest of the headline white.
- **Do:** Use cyan for the eyebrow pill, the primary button and the nav booking button only.
- **Do:** Overlay the photograph with navy so white and cyan text stay legible.
- **Don't:** Don't use cyan for paragraphs; it is for emphasis and buttons.
- **Don't:** Don't lighten the hero background above navy (#0f172a).
- **Don't:** Don't add gold accents; the page uses cyan only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
