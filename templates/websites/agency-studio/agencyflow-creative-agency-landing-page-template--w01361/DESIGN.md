# Design system — AgencyFlow Creative Agency Landing Page Template

`SN-W01361` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light off-white page with a very large black Inter wordmark across the top of the first screen. Below it, a solid black feature card holds a line icon and white text, and a photograph card on the right fades to black at its base. Orange (#f97316) is used sparingly for the small Growth Exclusive line and the featured tag, as a light annotation rather than a fill.

**Mood:** bold, light, editorial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#f97316` · `#737373` · `#ea580c` · `#a3a3a3` · `#e5e5e5` · `#525252` · `#d4d4d4` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 30px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-7xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="bg-neutral-900 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Process / steps (`how-it-works`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Stats band (`stats`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page title in very large black Inter, at near full width.
- **Do:** Use orange (#f97316) for small labels and tags only, never for large fills.
- **Do:** Build feature panels as solid black cards with white text and a line icon.
- **Don't:** Don't add drop shadows to cards; the contrast between black and off-white does the work.
- **Don't:** Don't use orange as a button or section background.
- **Don't:** Don't set body text in orange.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
