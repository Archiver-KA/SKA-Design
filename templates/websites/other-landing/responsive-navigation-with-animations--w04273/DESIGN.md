# Design system — Responsive Navigation with Animations

`SN-W04273` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black landing page with a bold white sans headline in which one word is set in muted grey for contrast. Teal (#2dd4bf) is the single accent, used on the primary button, while the secondary button is a dark slate fill. A large dark workspace frame on the right carries small floating metric cards that show results at a glance.

**Mood:** sharp, modern, dark, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#030712` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#2dd4bf` | Primary action and highlights |
| Second accent | `#7f1d1d` | Supporting highlights |

Palette by frequency of use: `#2dd4bf` · `#000000` · `#f3f4f6` · `#9ca3af` · `#4ade80` · `#1f2937` · `#d1d5db` · `#6b7280` · `#14b8a6` · `#030712`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:scale-105 font-geist text-black bg-teal-400 hover:bg-teal-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. About (`about`)
5. Services (`services`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #030712;
  --color-text: #f3f4f6;
  --color-muted: #9ca3af;
  --color-border: #1f2937;
  --color-accent: #2dd4bf;
  --color-accent-2: #7f1d1d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#030712',
    ink: '#f3f4f6',
    muted: '#9ca3af',
    line: '#1f2937',
    accent: '#2dd4bf',
    accent2: '#7f1d1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the teal (#2dd4bf) on the primary button only
- **Do:** Set headlines in Inter at large size, with one muted grey word for contrast
- **Do:** Float small metric cards over the product frame instead of adding more panels
- **Don't:** Don't use teal for body text or section backgrounds
- **Don't:** Don't give the secondary button the accent colour
- **Don't:** Don't add a light background to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
