# Design system — Stone & Tile Services Landing Page Template

`SN-W04103` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

The hero is a dark slate gradient with a centred white serif headline and one italic word in muted blue-grey (#9ca3af). Buttons are small, uppercase and letter-spaced, with a solid light fill for the primary action beside a thin outline for the secondary one. The pairing of classic serif and restrained sans gives the page a refined, editorial tone.

**Mood:** refined, editorial, dark, classic, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#f8f9fa` | Cards, panels, raised areas |
| Text | `#2a2a2a` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#9ca3af` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#2a2a2a` · `#6b7280` · `#e5e7eb` · `#9ca3af` · `#d1d5db` · `#f8f9fa` · `#1a1a1a` · `#2a3441` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Montserrat
- **Loaded families:** Cormorant Garamond, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, bold, normal
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-primary/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="hidden md:block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Case studies (`case-studies`)
5. About (`about`)
6. Testimonials (`testimonials`)
7. Contact form (`contact-form`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #f8f9fa;
  --color-text: #2a2a2a;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #9ca3af;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#f8f9fa',
    ink: '#2a2a2a',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#9ca3af',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond with one italic word
- **Do:** Use uppercase, letter-spaced sans-serif for buttons and labels
- **Do:** Pair a solid light primary button with a thin outline secondary button
- **Don't:** Don't set the headline in bold weights
- **Don't:** Don't use the gold accent (#c9a961) as a large background fill
- **Don't:** Don't use bright or saturated colours in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
