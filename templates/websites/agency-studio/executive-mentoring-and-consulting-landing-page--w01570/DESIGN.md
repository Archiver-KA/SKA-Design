# Design system — Executive Mentoring & Consulting Landing Page Template

`SN-W01570` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A near-black ground (#050505) with a large serif headline in white and a dimmed grey interior photograph in a framed panel on the right. Gold (#d4af37) appears only on the small logo and the rectangular call-to-action button, so the page reads as formal and discreet. The two-column split gives generous space to short copy.

**Mood:** formal, discreet, executive, quiet, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#d1d5db` · `#050505` · `#333333` · `#d4af37` · `#262626` · `#0a0a0a` · `#171717` · `#080808`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 14px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-rivaz-gold hover:bg-rivaz-goldLight text-rivaz-dark font-medium px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Call to action (`cta`)
5. Testimonials (`testimonials`)
6. Feature grid (`features`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #d1d5db;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --font-display: "Playfair Display", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#050505',
    ink: '#d1d5db',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display in white at large size
- **Do:** Use gold (#d4af37) for the call-to-action button and logo only
- **Do:** Frame photography in a dimmed panel beside the copy
- **Don't:** Don't brighten the photograph; keep it muted behind the layout
- **Don't:** Don't use gold for body text
- **Don't:** Don't introduce rounded pill buttons; this page uses square corners

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
