# Design system — Fitness Coaching Landing Page Template

`SN-W02596` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, confident coaching page on near-black with a large white serif headline set in stacked lines, the last line in bold orange (#f97316). Orange fills the header button and the badge, and the body copy is light grey on the dark ground. The design is a dark editorial page with one warm accent.

**Mood:** confident, dark, editorial, warm, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#111111` · `#9ca3af` · `#6b7280` · `#0d0d0d` · `#f3f4f6` · `#d1d5db` · `#ea580c` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bebas Neue, Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 30px · body 36px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-orange-500/20`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-4`, `gap-10`, `gap-2`

**Primary button**

```html
<a class="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 px-5 rounded-full transition-all items-center gap-2 uppercase tracking-wider">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Team (`team`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #f9fafb;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#f9fafb',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline line in the orange (#f97316) and keep the others white
- **Do:** Use the orange for the header button and the badge only
- **Do:** Keep the hero on the near-black ground with light grey body copy
- **Don't:** Don't use a light background; the ground is near-black
- **Don't:** Don't set body copy in orange; it is for headline emphasis and action
- **Don't:** Don't mix in other accent colours; the page depends on orange against black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
