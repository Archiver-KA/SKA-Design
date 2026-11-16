# Design system — Hair Salon Landing Page Template

`SN-W02753` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Light editorial hair salon page where the hero headline is set in a serif, with the middle line in grey italic. A tall rectangular photograph of a stylist sits to the right of the text, and a small outlined pill above the headline carries a status line. The stance is clean and print-like, with the photograph doing the emotional work and the type kept quiet.

**Mood:** editorial, light, clean, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#f4f4f5` · `#71717a` · `#fafafa` · `#e4e4e7` · `#27272a` · `#a1a1aa` · `#52525b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-zinc-950/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-8`, `gap-1`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center h-10 px-6 text-xs uppercase tracking-widest font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-all duration-200 rounded-full focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. About (`about`)
5. Testimonials (`testimonials`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#27272a',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the middle line in grey italic
- **Do:** Place a tall rectangular salon photograph to the right of the hero text
- **Do:** Use a small outlined pill above the headline for status text
- **Don't:** Don't set the hero headline in a sans serif; the headline is a serif
- **Don't:** Don't add colour to the headline; the grey italic line is the only tonal change
- **Don't:** Don't crop the photo into a circle or arch; it stays a plain tall rectangle

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
