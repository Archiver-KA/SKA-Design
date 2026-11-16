# Design system — Handy Prime Contractor Landing Page Template

`SN-W02039` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A contractor template built on a full-bleed photographic hero with a deep navy panel (#132347) carrying the headline and a single yellow (#f5b82e) call to action. Inter is used throughout, set large and bold for the headline, so the page reads as direct and trustworthy. The recognisable element is the split between the photo and the solid navy text panel.

**Mood:** direct, trustworthy, bold, photographic, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8f9fc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5b82e` | Primary action and highlights |
| Second accent | `#132347` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#132347` · `#f5b82e` · `#64748b` · `#e2e8f0` · `#f8f9fc` · `#dbeafe` · `#0f172a` · `#e0a628` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Bricolage Grotesque, &quot
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-[#f5b82e] hover:bg-[#e0a628] text-[#132347] font-normal pr-6 py-1.5 pl-1.5 rounded-full transition-colors group whitespace-nowrap">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Services (`services`)
4. Case studies (`case-studies`)
5. Testimonials (`testimonials`)
6. Map / location (`map-location`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8f9fc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f5b82e;
  --color-accent-2: #132347;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8f9fc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f5b82e',
    accent2: '#132347',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the navy (#132347) panel as the anchor behind headline text placed over photography.
- **Do:** Reserve the yellow (#f5b82e) for the primary estimate button and the rating highlight.
- **Do:** Set headlines in Inter bold at large size, as in the 72px hero.
- **Don't:** Don't set yellow text on white; the accent is for fills and buttons.
- **Don't:** Don't place the hero headline directly on the photo without the navy panel.
- **Don't:** Don't add decorative gradients; the fills are flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
