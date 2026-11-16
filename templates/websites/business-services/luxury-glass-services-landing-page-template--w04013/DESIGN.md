# Design system — Luxury Glass Services Landing Page Template

`SN-W04013` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, quiet installer page with a large centred serif headline in white, where 'Redefined.' is set in italic grey. Buttons are white or outlined, and the page has no accent colour, so it reads as monochrome. Small spaced capitals and a thin brand mark add precision without decoration.

**Mood:** quiet, precise, monochrome, elegant, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f4f4f5` | Primary action and highlights |

Palette by frequency of use: `#71717a` · `#f4f4f5` · `#27272a` · `#18181b` · `#09090b` · `#a1a1aa` · `#d4d4d8` · `#3f3f46` · `#000000` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Manrope, Cormorant Garamond
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 16px
- **Weights in use:** normal, light, extralight
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-zinc-900/50`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="px-6 py-2.5 bg-zinc-100 text-zinc-900 text-xs uppercase tracking-widest hover:bg-zinc-300 transition-all duration-300 rounded-sm font-normal">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Process / steps (`how-it-works`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Contact form (`contact-form`)
9. Map / location (`map-location`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f4f4f5;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f4f4f5',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, centred, with one italic grey word
- **Do:** Keep buttons white or outlined; there is no accent colour
- **Do:** Use small uppercase tracking for navigation and labels
- **Don't:** Don't add a colour accent to the hero
- **Don't:** Don't use a bold sans-serif headline; the serif is the voice
- **Don't:** Don't place the hero on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
