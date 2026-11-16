# Design system — Architectural Design Services Landing Page Template

`SN-W03180` · real-estate · light mode · Sinera Atlas theme `dwell` · language `nl`

## Direction

A warm, cream-ground architecture page in Dutch, with a dark brown headline in a high-contrast serif and a brown button in the navigation. Colour is limited to cream, stone and the brown accent, and small spaced labels sit above the headline. The layout is airy, with a large empty stone-coloured frame that holds the place of a project photograph.

**Mood:** warm, editorial, quiet, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f1ea` | Page ground |
| Surface | `#d8d1c4` | Cards, panels, raised areas |
| Text | `#1c1a16` | Headings and primary copy |
| Border | `#d8d1c4` | Hairlines, dividers, outlines |
| Accent | `#8a6a38` | Primary action and highlights |

Palette by frequency of use: `#1c1a16` · `#f4f1ea` · `#8a6a38` · `#d8d1c4` · `#a6864f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 64px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-[#8A6A38] text-[#F4F1EA] px-6 py-3 text-sm tracking-wide font-medium hover:bg-[#A6864F] transition-all duration-300 hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f1ea;
  --color-surface: #d8d1c4;
  --color-text: #1c1a16;
  --color-border: #d8d1c4;
  --color-accent: #8a6a38;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f1ea',
    surface: '#d8d1c4',
    ink: '#1c1a16',
    line: '#d8d1c4',
    accent: '#8a6a38',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at regular weight with tight leading
- **Do:** Use the brown (#8a6a38) only for the navigation button and small highlights
- **Do:** Keep the cream ground (#f4f1ea) behind the hero and use stone (#d8d1c4) for image frames
- **Don't:** Don't use cool greys or blue; the palette is warm
- **Don't:** Don't set body copy in the serif; body text stays in Inter
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
