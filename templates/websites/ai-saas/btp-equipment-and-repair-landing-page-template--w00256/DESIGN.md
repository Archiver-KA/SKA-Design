# Design system — BTP Equipment & Repair Landing Page Template

`SN-W00256` · ai-saas · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A solid, direct industrial hero: a neutral grey photo overlay forms the ground, with white bold sans headlines and a single amber (#f59e0b) highlight phrase. Amber also fills the primary button, so colour is the one signal above the fold, while the secondary button is a dark outline. Carousel arrows and dots at the edges give the page a plain, construction-site tone.

**Mood:** industrial, direct, solid, high contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#52525b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#18181b` · `#e4e4e7` · `#fafafa` · `#f4f4f5` · `#71717a` · `#a1a1aa` · `#fde68a` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 14px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-amber-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Services (`services`)
5. Feature grid (`features`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Modal / overlay (`modal-overlay`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #52525b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#52525b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#f59e0b) for the highlighted headline phrase and the primary button
- **Do:** Set headlines in bold sans in white over the grey photo overlay
- **Do:** Keep the secondary button as a dark outline with white text
- **Don't:** Don't use amber for body text, borders or large fills
- **Don't:** Don't place white text over a bright part of the photo without the grey overlay
- **Don't:** Don't add a second highlight colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
