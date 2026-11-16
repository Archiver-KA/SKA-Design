# Design system — AI Photobooth & Beauty Salon Landing Page Template

`SN-W02703` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Photobooth studio page on a near-black ground (#171717). The hero headline is a large white serif, with the second line in italic, and the nav and pill buttons are white on the dark field. A small trending card sits on the right, so the page reads as a dark, editorial event site with the serif carrying the personality.

**Mood:** editorial, dark, polished, event

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#881337` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#262626` · `#171717` · `#e5e5e5` · `#404040` · `#737373` · `#818cf8` · `#fafafa` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-indigo-400/40`
- **Content width:** `max-w-7xl`, `max-w-[80%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white text-neutral-900 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-neutral-100 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Booking form (`booking`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #fafafa;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #818cf8;
  --color-accent-2: #881337;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#fafafa',
    ink: '#ffffff',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#818cf8',
    accent2: '#881337',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero on near-black (#171717) with white serif headlines.
- **Do:** Use an italic second line in the headline for emphasis.
- **Do:** Make primary buttons solid white with dark text, and keep them the only solid blocks.
- **Don't:** Don't set the page on white (#ffffff); the page is dark.
- **Don't:** Don't set headlines in sans; the serif is the look.
- **Don't:** Don't add a coloured accent to the hero; it uses white and grey only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
