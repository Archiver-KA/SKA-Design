# Design system — Founder Profile Landing Page Template

`SN-W02019` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale, near-white ground with faint pink and blue haze, where a large sans name in bright cyan (#24b8e0) carries the page. The name is set on two stacked lines at the top left, with a short dark grey tagline beneath it. A white card on the right holds a placeholder portrait and a role line, so the layout splits between type and a product-like panel.

**Mood:** fresh, airy, modern, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#24b8e0` | Primary action and highlights |
| Second accent | `#d91d57` | Supporting highlights |

Palette by frequency of use: `#737373` · `#171717` · `#ffffff` · `#e5e5e5` · `#fafafa` · `#f5f5f5` · `#24b8e0` · `#a3a3a3` · `#d91d57` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 24px · h3 16px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group block p-6 rounded-xl hover:bg-neutral-50 transition-all border border-transparent hover:border-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Logo cloud (`logo-cloud`)
4. Hero (`hero`)
5. Testimonials (`testimonials`)
6. Bento grid (`bento-grid`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #24b8e0;
  --color-accent-2: #d91d57;
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
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#24b8e0',
    accent2: '#d91d57',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in large Inter in cyan (#24b8e0), stacked on two lines
- **Do:** Keep the ground pale, with soft haze rather than solid colour
- **Do:** Place the profile card as a white panel with a short role line
- **Don't:** Don't use the cyan for body copy; it is for the name only
- **Don't:** Don't use the solid cyan as the page ground; the ground stays pale
- **Don't:** Don't leave the portrait card without its role line

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
