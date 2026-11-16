# Design system — Custom Cabinetry Services Landing Page Template

`SN-W03875` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, centred hero on an off-white ground with a large black sans-serif headline. The second phrase is set in a grey serif italic, which gives the page its one stylistic contrast. Two buttons sit under the copy: a solid black primary and a white outlined secondary. A dark band begins below the hero.

**Mood:** craft, restrained, minimal, precise, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f4` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#f5f5f4` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#f5f5f4` · `#a8a29e` · `#57534e` · `#ffffff` · `#78716c` · `#292524` · `#1c1917` · `#e7e5e4` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-5 py-2 text-sm font-medium transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 text-black bg-stone-100 hover:bg-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Process / steps (`how-it-works`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f4;
  --color-surface: #000000;
  --color-text: #000000;
  --color-muted: #f5f5f4;
  --color-border: #e7e5e4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f4',
    surface: '#000000',
    ink: '#000000',
    muted: '#f5f5f4',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large black sans-serif with one phrase in grey italic serif
- **Do:** Use a solid black primary button beside a white outlined secondary button
- **Do:** Keep the hero on off-white (#f5f5f4) and let the dark sections start below it
- **Don't:** Don't set the grey italic phrase in a bold weight; it stays light
- **Don't:** Don't add colour accents; the page is black, white and grey
- **Don't:** Don't turn the grey pill tags above headlines into coloured badges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
