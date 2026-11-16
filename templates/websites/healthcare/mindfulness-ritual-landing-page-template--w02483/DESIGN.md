# Design system — Mindfulness Ritual Landing Page Template

`SN-W02483` · healthcare · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

A soft, airy landing page in near-white and pale sage, with a large serif headline whose second line is italic and small uppercase labels above sections. The hero is mostly whitespace, and a dark pill button is the only strong colour. Backdrop-blur panels float over a faint gradient, so depth comes from translucency rather than edges.

**Mood:** airy, quiet, reflective, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f9fafb` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#f9fafb` · `#ffffff` · `#9ca3af` · `#6b7280` · `#000000` · `#f3f4f6` · `#e5e7eb` · `#4b5563` · `#f5f2ed` · `#e8f5ed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-soft`, `shadow-card`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="text-xs font-medium bg-brand-dark text-white px-5 py-2 rounded-full hover:bg-black transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Testimonials (`testimonials`)
5. Pricing (`pricing`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #f9fafb;
  --color-accent: #000000;
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
    surface: '#f9fafb',
    ink: '#000000',
    muted: '#6b7280',
    line: '#f9fafb',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the main headline in a serif with an italic second line.
- **Do:** Keep the primary button dark (#000000) and use one per screen
- **Do:** Use backdrop-blur panels over soft gradients for floating content
- **Don't:** Don't use yellow (#ffd700) as an accent.
- **Don't:** Don't crowd the hero; keep generous space around the headline
- **Don't:** Don't fill whole sections with saturated colour blocks

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
