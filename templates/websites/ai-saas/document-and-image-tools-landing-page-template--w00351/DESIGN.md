# Design system — Document & Image Tools Landing Page Template

`SN-W00351` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, editorial page on cream (#fbf9f6) with charcoal headlines and a burnt-orange italic serif phrase, Documents and Images, that carries the page's voice. Buttons are a solid burnt-orange primary beside a white outlined secondary, with a dark pill for sign-up in the navigation.

**Mood:** warm, editorial, friendly, crafted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbf9f6` | Page ground |
| Surface | `#2f2b28` | Cards, panels, raised areas |
| Text | `#2f2b28` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#b9ada2` | Hairlines, dividers, outlines |
| Accent | `#ad4b05` | Primary action and highlights |
| Second accent | `#c6bfe2` | Supporting highlights |

Palette by frequency of use: `#2f2b28` · `#ad4b05` · `#ffffff` · `#b9ada2` · `#fbf9f6` · `#f4f1ec` · `#a8645e` · `#2a241f` · `#e7a09a` · `#ece8e2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-premium`, `shadow-card`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-dark-charcoal text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-hover-charcoal transition-colors shadow-lg shadow-secondary/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Process / steps (`how-it-works`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fbf9f6;
  --color-surface: #2f2b28;
  --color-text: #2f2b28;
  --color-muted: #ffffff;
  --color-border: #b9ada2;
  --color-accent: #ad4b05;
  --color-accent-2: #c6bfe2;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbf9f6',
    surface: '#2f2b28',
    ink: '#2f2b28',
    muted: '#ffffff',
    line: '#b9ada2',
    accent: '#ad4b05',
    accent2: '#c6bfe2',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic serif in burnt orange (#ad4b05)
- **Do:** Keep the page on cream (#fbf9f6) with charcoal headlines
- **Do:** Use the solid burnt-orange button only for the main action
- **Don't:** Don't use a dark page background
- **Don't:** Don't set headlines in a sans face where the serif italic is used
- **Don't:** Don't add cool blues or greens; the palette is warm

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
