# Design system — Woodworking Services Landing Page Template

`SN-W04136` · business-services · light mode · Sinera Atlas theme `route` · language `cs`

## Direction

A warm page with a serif headline in dark brown (#382920) over a cream ground (#f9f7f4). The lower hero fades into a brown photographic gradient behind the text, and the buttons are cream fills with thin outlines. The palette stays within cream and browns, so the wood tones carry the mood and no bright colour appears.

**Mood:** warm, earthy, soft, traditional, crafted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f7f4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#382920` | Headings and primary copy |
| Muted text | `#b09678` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7a5c40` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#ef4444` · `#000000` · `#7a5c40` · `#f9f7f4` · `#382920` · `#f0ebe3` · `#b09678` · `#947452`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="group relative px-6 py-2.5 bg-wood-800 text-wood-50 text-sm font-medium rounded-sm overflow-hidden shadow-lg shadow-wood-300/50 transition-all hover:shadow-xl hover:shadow-wood-400/40">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Contact form (`contact-form`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9f7f4;
  --color-surface: #ffffff;
  --color-text: #382920;
  --color-muted: #b09678;
  --color-border: #ffffff;
  --color-accent: #7a5c40;
  --color-accent-2: #ef4444;
  --font-display: "Playfair Display", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f7f4',
    surface: '#ffffff',
    ink: '#382920',
    muted: '#b09678',
    line: '#ffffff',
    accent: '#7a5c40',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the page within cream (#f9f7f4) and browns, with no bright accent colour
- **Do:** Set headlines in a serif face in dark brown (#382920)
- **Do:** Fade hero photography into a brown gradient behind the text
- **Don't:** Don't use yellow or red in the layout
- **Don't:** Don't put bright buttons on the wood imagery
- **Don't:** Don't use cool greys for body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
