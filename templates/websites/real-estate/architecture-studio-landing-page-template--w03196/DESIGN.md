# Design system — Architecture Studio Landing Page Template

`SN-W03196` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A calm, tonal page on sage green with dark olive type. The headline is a large Playfair-style serif with the middle word in italic, and the nav and metadata are small caps. Colour stays within a green-grey range, with a thin rule and a dark olive button, so the page reads as natural and quiet.

**Mood:** calm, natural, editorial, tonal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e3e7e0` | Page ground |
| Surface | `#d5dbd1` | Cards, panels, raised areas |
| Text | `#2a3324` | Headings and primary copy |
| Muted text | `#5c715e` | Secondary copy, captions |
| Border | `#c4cfc0` | Hairlines, dividers, outlines |
| Accent | `#2a3324` | Primary action and highlights |
| Second accent | `#00529b` | Supporting highlights |

Palette by frequency of use: `#2a3324` · `#c4cfc0` · `#e3e7e0` · `#111111` · `#5c715e` · `#231f20` · `#d5dbd1` · `#e51937` · `#000000` · `#00529b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Playfair Display
- **Loaded families:** Playfair Display, Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 30px · body 18px
- **Weights in use:** normal, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-12`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="bg-[#2A3324] text-[#E3E7E0] p-3 hover:bg-[#5C715E] transition-colors rounded-sm flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Integrations (`integrations`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Stats band (`stats`)
9. Call to action (`cta`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e3e7e0;
  --color-surface: #d5dbd1;
  --color-text: #2a3324;
  --color-muted: #5c715e;
  --color-border: #c4cfc0;
  --color-accent: #2a3324;
  --color-accent-2: #00529b;
  --font-display: "Playfair Display", serif;
  --font-body: "Playfair Display", serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e3e7e0',
    surface: '#d5dbd1',
    ink: '#2a3324',
    muted: '#5c715e',
    line: '#c4cfc0',
    accent: '#2a3324',
    accent2: '#00529b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Playfair Display'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the middle word in italic
- **Do:** Keep the page within the sage and olive tones from the palette
- **Do:** Use the dark olive (#2a3324) for buttons and key rules
- **Don't:** Don't add bright red or blue accents to the hero
- **Don't:** Don't set body copy in the serif at small sizes
- **Don't:** Don't use gradients on the sage background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
