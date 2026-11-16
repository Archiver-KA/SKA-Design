# Design system — AI Art Landing Page Template

`SN-W00038` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet, gallery-like light page: an off-white ground with dark charcoal navigation and a thin outlined button. The tagline is set in a gold italic serif, the only warm colour on the first screen. The gallery below uses grey frames for the artwork, so the art is meant to be the main visual.

**Mood:** editorial, quiet, gallery-like, neutral, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#d1d5db` | Cards, panels, raised areas |
| Text | `#1a1818` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#9ca3af` · `#6b7280` · `#4b5563` · `#d1d5db` · `#1a1818` · `#f3f4f6` · `#374151` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Bodoni Moda, Inter
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** bold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),1px_1px_1px_-0.5px_rgba(0,0,0,0.06),3px_3px_3px_-1.5px_rgba(0,0,0,0.06),_6px_6px_6px_-3px_rgba(0,0,0,0.06),12px_12px_12px_-6px_rgba(0,0,0,0.06),24px_24px_24px_-12px_rgba(0,0,0,0.06)]`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-6`, `gap-1`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. Testimonials (`testimonials`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #d1d5db;
  --color-text: #1a1818;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#d1d5db',
    ink: '#1a1818',
    muted: '#4b5563',
    line: '#e5e7eb',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the tagline in a gold italic serif, once per screen
- **Do:** Keep navigation in small dark sans with one outlined button at the right
- **Do:** Give gallery images generous space on the plain off-white ground
- **Don't:** Don't add a colour background behind the gallery; the ground stays white
- **Don't:** Don't set the tagline in the sans used for buttons
- **Don't:** Don't use the gold for buttons or links; it is for the tagline only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
