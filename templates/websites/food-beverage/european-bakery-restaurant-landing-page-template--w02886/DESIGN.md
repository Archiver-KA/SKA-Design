# Design system — European Bakery Restaurant Landing Page Template

`SN-W02886` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A dark, warm restaurant page built on a near-black ground (#0c0a09) with cream text and a restrained warm tan for eyebrows. Cinzel carries the wordmark and the uppercase brand lockup, while the body is set in a plain sans, so the headings feel like an engraved menu card. Imagery sits in rounded panels beside the text, and the photos are darkened so they stay subdued.

**Mood:** dark, warm, engraved, restrained, upscale

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#444444` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a8a29e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0c0a09` · `#a8a29e` · `#d6d3d1` · `#78716c` · `#1c1917` · `#333333` · `#444444` · `#e7e5e4` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Inter
- **Loaded families:** Cinzel, Great Vibes, Inter, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 30px · h2 48px · h3 18px · body 14px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_20px_40px_rgba(0,0,0,0.5)]`, `shadow-[0_0_10px_rgba(34,197,94,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="group overflow-hidden glass-card hover:bg-gold-500/10 transition-all duration-500 border-gold-500/20 md:px-6 md:py-3 flex items-center md:flex-col md:items-end justify-center shrink-0 gap-2 md:gap-0 border rounded-full pt-2 pr-4 pb-2 pl-4 relative">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Feature grid (`features`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #444444;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #a8a29e;
  --font-display: "Cinzel", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#444444',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#a8a29e',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headings in Cinzel and body copy in Inter on the dark ground (#0c0a09).
- **Do:** Keep eyebrow labels in the warm tan (#a8a29e) and do not use them for buttons.
- **Do:** Place photos in rounded panels beside text blocks, not full bleed behind copy.
- **Don't:** Don't use the green accent (#22c55e); the page has no green.
- **Don't:** Don't put light backgrounds behind sections; the page stays dark throughout.
- **Don't:** Don't set the wordmark in a sans or in mixed case; it is tracked uppercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
