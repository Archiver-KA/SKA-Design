# Design system — Altara Automated Trading Landing Page Template

`SN-W00873` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page (#020408) with a centred white sans headline in two tight lines, set smaller than the hero size suggests. A single red (#ef4444) button is the only strong fill, and a small blue label sits above the headline. The page is restrained: the dark ground carries the mood and red is kept for the action, with light-grey body copy beneath.

**Mood:** dark, restrained, precise, red-accented, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020408` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f2937` · `#6b7280` · `#ef4444` · `#9ca3af` · `#d1d5db` · `#374151` · `#020408` · `#3b82f6` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="bg-red-700 hover:bg-red-600 text-white text-xs font-medium py-2 px-5 rounded-full transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Logo cloud (`logo-cloud`)
5. Stats band (`stats`)
6. Feature grid (`features`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020408;
  --color-surface: #1f2937;
  --color-text: #d1d5db;
  --color-muted: #6b7280;
  --color-border: #1f2937;
  --color-accent: #ef4444;
  --color-accent-2: #3b82f6;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020408',
    surface: '#1f2937',
    ink: '#d1d5db',
    muted: '#6b7280',
    line: '#1f2937',
    accent: '#ef4444',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the primary CTA in red (#ef4444) as the only saturated fill in the hero
- **Do:** Set the headline in white sans, tightly spaced and centred
- **Do:** Use blue (#3b82f6) only for small labels above headlines
- **Don't:** Don't use the red as a background or section fill
- **Don't:** Don't add gradients to the headline
- **Don't:** Don't set body copy in pure white; use the light grey (#d1d5db)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
