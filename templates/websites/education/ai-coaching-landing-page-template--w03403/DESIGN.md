# Design system — AI Coaching Landing Page Template

`SN-W03403` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Warm, personal coaching page on an off-white ground with a slate serif headline, its first phrase set in italic. The orange-red pill is the one strong colour and carries the main action, with a white pill beside it for the secondary. Supporting copy is a lighter slate and the layout is centred with generous space, so it reads as considered and human.

**Mood:** warm, personal, considered, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f8f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d3b42` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4623` | Primary action and highlights |
| Second accent | `#bbddef` | Supporting highlights |

Palette by frequency of use: `#2d3b42` · `#ffffff` · `#ef4623` · `#f9f8f6` · `#bbddef` · `#f9f0e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Source Serif 4
- **Loaded families:** Geist, Plus Jakarta Sans, Source Serif 4, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 20px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-coral font-sans font-medium text-lg px-8 py-4 rounded-full shadow-lg shadow-coral/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. 3D / canvas scene (`3d-canvas`)
6. Testimonials (`testimonials`)
7. Product grid (`product-grid`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f8f6;
  --color-surface: #ffffff;
  --color-text: #2d3b42;
  --color-border: #ffffff;
  --color-accent: #ef4623;
  --color-accent-2: #bbddef;
  --font-display: "Geist", sans-serif;
  --font-body: "Source Serif 4", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f8f6',
    surface: '#ffffff',
    ink: '#2d3b42',
    line: '#ffffff',
    accent: '#ef4623',
    accent2: '#bbddef',
  },
  fontFamily: { display: ['Geist'], sans: ['Source Serif 4'] },
} }
```

## Do and don't

- **Do:** Set the headline in slate (#2d3b42) with the first phrase in italic.
- **Do:** Use the orange-red (#ef4623) only for the main call to action.
- **Do:** Keep the ground warm off-white (#f9f8f6) with no coloured panels behind the hero.
- **Don't:** Don't use orange-red for headings or links.
- **Don't:** Don't set body copy in pure black.
- **Don't:** Don't add a second saturated colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
