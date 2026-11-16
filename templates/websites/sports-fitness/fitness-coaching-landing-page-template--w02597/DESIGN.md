# Design system — Fitness Coaching Landing Page Template

`SN-W02597` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, plain coaching page on near-black with a very large heavy white sans-serif headline set in six short lines. Orange (#f97316) is the one accent, used on the header button and the contact link, and the type is set left-aligned with no imagery in the hero. The result is direct and text-led, with the headline doing all the work.

**Mood:** direct, text-led, dark, heavy, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#9ca3af` · `#0d0d0d` · `#6b7280` · `#000000` · `#d1d5db` · `#1a1a1a` · `#111111` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-orange-500/20`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-md transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Pricing (`pricing`)
7. Stats band (`stats`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Contact form (`contact-form`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #1a1a1a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#1a1a1a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans-serif, left-aligned, with tight line spacing
- **Do:** Use the orange (#f97316) only for the header button and contact link
- **Do:** Keep the hero text-only, with no photograph or decorative shapes
- **Don't:** Don't use an orange background; the ground is near-black
- **Don't:** Don't set the headline in a light weight; the heavy weight is the voice
- **Don't:** Don't add decorative effects to the hero; it is plain

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
