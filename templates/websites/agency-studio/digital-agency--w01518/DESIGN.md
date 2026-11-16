# Design system — Digital Agency

`SN-W01518` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a red glow behind the hero and a red highlight on the second headline phrase, which gives the brand its colour. The headline is large and bold in one sans-serif, with white and grey body text. The primary button is white, so red is kept for the headline and the glow, and the page reads as dark and dramatic.

**Mood:** dramatic, bold, dark, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e81d25` · `#000000` · `#9ca3af` · `#6b7280` · `#d1d5db` · `#ef4444` · `#a3a3a3` · `#171717` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 72px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-x-3`, `gap-y-3`, `gap-2`

**Primary button**

```html
<a class="w-full py-4 bg-[#e81d25] text-white font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Logo cloud (`logo-cloud`)
5. Services (`services`)
6. Marquee (`marquee`)
7. Pricing (`pricing`)
8. Case studies (`case-studies`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #fbbf24;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Use red (#e81d25) for one highlighted headline phrase and the background glow only
- **Do:** Make the primary button white with black text
- **Do:** Set headlines in Figtree bold on a black ground (#000000)
- **Don't:** Don't use red as a solid page background
- **Don't:** Don't set body copy in red
- **Don't:** Don't use the amber secondary accent (#fbbf24) in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
