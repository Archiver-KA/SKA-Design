# Design system — Locksmith Services Landing Page Template

`SN-W03994` · business-services · light mode · Sinera Atlas theme `route` · language `pt-BR`

## Direction

A clean, light locksmith page with a heavy dark headline whose second line is set in mid grey for contrast. The teal (#0891b2) primary button leads, with a plain outline button beside it for secondary actions. Small trust markers under the headline list arrival time and ratings in icon-and-text rows, giving the page a practical, direct tone.

**Mood:** practical, direct, clean, reliable, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#dbeafe` | Hairlines, dividers, outlines |
| Accent | `#0891b2` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#525252` · `#dbeafe` · `#06b6d4` · `#eff6ff` · `#0891b2` · `#0e7490` · `#bfdbfe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white transition-all shadow-sm hover:shadow-md active:scale-95 bg-cyan-600 hover:bg-cyan-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Testimonials (`testimonials`)
6. Map / location (`map-location`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #737373;
  --color-border: #dbeafe;
  --color-accent: #0891b2;
  --color-accent-2: #ffedd5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#737373',
    line: '#dbeafe',
    accent: '#0891b2',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use teal (#0891b2) for the primary call button only
- **Do:** Set the second headline line in grey (#737373) for contrast
- **Do:** Keep trust markers as small icon-and-text rows below the buttons
- **Don't:** Don't use teal over large background areas
- **Don't:** Don't place more than one solid button in the hero
- **Don't:** Don't set the headline in a single colour; the grey second line is part of the layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
