# Design system — Healthcare AI Advisory Landing Page Template

`SN-W02399` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, advisory hero on a black ground, with a bold italic white display wordmark and a large grey sans-serif headline below it. A red (#ef4444) button marks the primary action, and a dark product panel with a faint red glow sits on the right. The page is confident and high-contrast, and red is used for the one action and the glow.

**Mood:** confident, high-contrast, editorial, dark, assertive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#000000` · `#ef4444` · `#71717a` · `#f87171` · `#52525b` · `#d4d4d8` · `#3b82f6` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 12px · h3 48px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(239,68,68,0.3)]`, `shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium text-white transition-all duration-200 bg-red-600/90 border border-red-500/50 rounded-full hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:-translate-y-0.5 uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Bento grid (`bento-grid`)
5. Timeline (`timeline`)
6. About (`about`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #3b82f6;
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
    surface: '#000000',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in bold italic white, and the headline in large grey sans-serif.
- **Do:** Use the red (#ef4444) for the primary button only.
- **Do:** Keep the page on the black ground (#000000) with dark panels for the product frame.
- **Don't:** Don't set the page background in red; the ground is black.
- **Don't:** Don't use the blue (#3b82f6) in the hero; it is a minor accent.
- **Don't:** Don't set body copy in red.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
