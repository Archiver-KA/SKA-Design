# Design system — Niteco Enterprise Agency Landing Page Template

`SN-W01651` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark charcoal page with a large white headline set tight on four lines, and a yellow (#f9d022) pill button in the header and hero. Fine diagonal yellow line strokes fill the right half as a graphic motif. The mood is bold and industrial, with yellow used as a single, saturated signal against near-black.

**Mood:** bold, industrial, high-contrast, enterprise, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#141618` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f9d022` | Primary action and highlights |
| Second accent | `#d31245` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f9d022` · `#848e9c` · `#141618` · `#17191c` · `#000000` · `#fef08a` · `#1c1e21` · `#333333` · `#1f6520`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[2px]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Content width:** `max-w-[1240px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-2`

**Primary button**

```html
<a class="bg-[#f9d022] text-[#141618] px-7 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Services (`services`)
5. Feature grid (`features`)
6. Logo cloud (`logo-cloud`)
7. Stats band (`stats`)
8. Call to action (`cta`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #141618;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f9d022;
  --color-accent-2: #d31245;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#141618',
    surface: '#ffffff',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#f9d022',
    accent2: '#d31245',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#f9d022) for the header button and one primary CTA per section
- **Do:** Set the headline large and tightly leaded in white on charcoal
- **Do:** Use thin diagonal yellow line strokes as the only decorative graphic
- **Don't:** Don't read this as a light page; the background is charcoal (#141618), not yellow
- **Don't:** Don't use the pale yellow (#fef08a) for buttons; the strong yellow is the accent
- **Don't:** Don't put yellow text on the charcoal ground for body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
