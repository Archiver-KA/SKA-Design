# Design system — Somatic Therapy Landing Page Template

`SN-W02526` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A quiet, paper-like therapy page: a warm stone ground (#f2ede8) with dark brown type (#2a2522) and a taupe (#a89880) button, with no decoration beyond a large split hero. The stance is restrained and bodily, closer to a printed brochure than a web product. The headline is a serif, and the photograph carries the mood.

**Mood:** quiet, tactile, restrained, earthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2ede8` | Page ground |
| Surface | `#e4ddd6` | Cards, panels, raised areas |
| Text | `#2a2522` | Headings and primary copy |
| Muted text | `#5c5450` | Secondary copy, captions |
| Border | `#c8bfb5` | Hairlines, dividers, outlines |
| Accent | `#a89880` | Primary action and highlights |

Palette by frequency of use: `#2a2522` · `#c8bfb5` · `#5c5450` · `#8c8480` · `#e4ddd6` · `#a89880` · `#ffffff` · `#f2ede8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Lora
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 18px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-16`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-[#A89880] text-[#FFFFFF] px-5 py-2.5 text-sm font-['Inter'] font-normal tracking-wide hover:bg-[#2A2522] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f2ede8;
  --color-surface: #e4ddd6;
  --color-text: #2a2522;
  --color-muted: #5c5450;
  --color-border: #c8bfb5;
  --color-accent: #a89880;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2ede8',
    surface: '#e4ddd6',
    ink: '#2a2522',
    muted: '#5c5450',
    line: '#c8bfb5',
    accent: '#a89880',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground warm stone (#f2ede8) and the text dark brown (#2a2522)
- **Do:** Use the taupe (#a89880) only for the primary button
- **Do:** Set the hero as a large headline on the left and a single image panel on the right
- **Don't:** Don't add saturated colour; the palette stays in warm neutrals
- **Don't:** Don't use the taupe for text on the stone ground; it is for fills
- **Don't:** Don't leave the image slot empty; the layout depends on the photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
