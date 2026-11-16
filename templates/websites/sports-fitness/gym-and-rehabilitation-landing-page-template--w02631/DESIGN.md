# Design system — Gym & Rehabilitation Landing Page Template

`SN-W02631` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, minimal clinic-gym hero with an amber accent. A large white sans-serif headline sits on two lines, with the last word fading into grey, above a short grey subline and a pair of buttons, one white and one outline. An amber pill badge and a round amber chat button are the only colour.

**Mood:** minimal, dark, clinical, restrained, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#000000` · `#a3a3a3` · `#262626` · `#171717` · `#737373` · `#404040` · `#d4d4d4` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_30px_rgba(245,158,11,0.1)]`, `shadow-2xl`, `shadow-amber-500/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2 text-base font-medium rounded-full transition-colors text-black bg-white hover:bg-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Bento grid (`bento-grid`)
6. Pricing (`pricing`)
7. Testimonials (`testimonials`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans-serif, with the final word in a grey gradient.
- **Do:** Use amber (#f59e0b) for the badge and the floating chat button only.
- **Do:** Pair one white filled button with one outline button.
- **Don't:** Don't use a light grey page ground; the page is black.
- **Don't:** Don't use amber for the main buttons.
- **Don't:** Don't set the subline in pure white; it stays grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
