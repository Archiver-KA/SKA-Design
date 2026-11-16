# Design system — Syspos Cloud POS Landing Page Template

`SN-W00762` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black hero with a large white Geist headline, '#1 Unified Cloud POS', where the words Cloud POS are set in green. The primary button is a solid green pill beside a dark outline 'Watch video', and the nav and tag are small and quiet. Green is the single brand colour in the hero, and a dark product window sits below the buttons.

**Mood:** confident, dark, commercial, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#71717a` · `#d4d4d8` · `#f97316` · `#3b82f6` · `#18181b` · `#000000` · `#e4e4e7` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Inter, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all-ease">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Articles (`blog-articles`)
5. Map / location (`map-location`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #3b82f6;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in Geist at large size, with the product phrase in the brand green
- **Do:** Use the green only for the primary button and the highlighted headline words
- **Do:** Pair the solid green button with a dark outline secondary
- **Don't:** Don't use the orange (#f97316) in the hero; the green is the accent here
- **Don't:** Don't set body text in green
- **Don't:** Don't put a light background behind the nav

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
