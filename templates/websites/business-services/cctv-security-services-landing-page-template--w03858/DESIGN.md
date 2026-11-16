# Design system — CCTV Security Services Landing Page Template

`SN-W03858` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, photographic hero: a near-black ground with a faint grid of security cameras behind the copy, and a deep red (#8b0000) reserved for the main call to action. Large white sans-serif headlines put the second line in a softer grey. Pill-shaped buttons and a compact top navigation keep the layout plain, and the red is the only colour that asks for attention.

**Mood:** dark, serious, technical, restrained, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#8b0000` | Primary action and highlights |
| Second accent | `#0b2c9a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#8b0000` · `#171717` · `#737373` · `#0b2c9a` · `#525252` · `#000000` · `#e5e5e5` · `#a3a3a3` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 18px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#8B0000] hover:bg-[#9B0F0F] text-white text-sm font-medium py-2.5 px-5 rounded-full transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #8b0000;
  --color-accent-2: #0b2c9a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#8b0000',
    accent2: '#0b2c9a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the primary button in #8b0000 with white text and use no other red elsewhere
- **Do:** Set headlines in a large sans-serif with the second line in grey
- **Do:** Place security imagery behind dark overlays so the text stays readable
- **Don't:** Don't introduce light section backgrounds in the hero; it stays dark
- **Don't:** Don't use bright colours on secondary buttons; they stay outlined and neutral
- **Don't:** Don't square off the primary button; it keeps its full pill shape

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
