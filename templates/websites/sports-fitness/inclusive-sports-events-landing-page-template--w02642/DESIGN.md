# Design system — Inclusive Sports Events Landing Page Template

`SN-W02642` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A photograph-led events hero. A full-bleed image of an athlete at the start of a red track fills the top half, with a large white sans-serif title, Motorsurf, above a bigger EVENTS heading. A white card for the next event sits on the lower right, and a near-black strip below holds small grey captions. Colour comes from the photograph.

**Mood:** photo-led, sporty, bold, event-led, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#0ea5e9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#f5f5f5` · `#171717` · `#000000` · `#a3a3a3` · `#525252` · `#d4d4d4` · `#e5e5e5` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-8xl`, `max-w-[200px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="flex items-center justify-between w-full bg-white border border-neutral-200 px-4 py-3 rounded text-sm font-medium hover:bg-neutral-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Articles (`blog-articles`)
4. Timeline (`timeline`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #ea580c;
  --color-accent-2: #0ea5e9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#ea580c',
    accent2: '#0ea5e9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page title in large white sans-serif over a full-bleed photograph.
- **Do:** Use a white card for the next event, placed on the lower corner of the photo.
- **Do:** Keep the strip below the photograph near-black, with small grey captions.
- **Don't:** Don't place small text over the busiest part of the photograph.
- **Don't:** Don't add an orange accent to the hero; the photograph carries the colour.
- **Don't:** Don't use a light page ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
