# Design system — Family Law Firm Landing Page Template

`SN-W03903` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A traditional legal page built on a white ground, with a serif display face for the headline and one closing phrase set in italic tan (#b39360). Inter handles navigation, body copy and buttons, so the serif is the only expressive typeface. A slate photograph fills the right half of the hero, and a dark navy strip carries credibility points below it. The tone is steady and restrained.

**Mood:** trustworthy, steady, restrained, traditional, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#b39360` | Primary action and highlights |
| Second accent | `#0f172a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#64748b` · `#475569` · `#e2e8f0` · `#f1f5f9` · `#1e293b` · `#94a3b8` · `#b39360` · `#7c2d12`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-brand-navy text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-slate-800 transition-colors shadow-lg shadow-brand-navy/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Team (`team`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #b39360;
  --color-accent-2: #0f172a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#b39360',
    accent2: '#0f172a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display, with the closing phrase in italic tan (#b39360).
- **Do:** Use the tan button for the consultation action and keep tan as the only warm colour.
- **Do:** Place credibility points in the dark navy strip beneath the hero.
- **Don't:** Don't introduce bright colours; the palette stays white, slate and tan.
- **Don't:** Don't set headlines in Inter; the serif is the signature.
- **Don't:** Don't round the buttons fully; keep the small corner radius.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
