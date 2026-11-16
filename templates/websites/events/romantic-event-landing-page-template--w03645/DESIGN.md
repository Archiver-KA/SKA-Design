# Design system — Romantic Event Landing Page Template

`SN-W03645` · events · light mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A quiet, editorial romance page on a blush-cream ground, with a small, widely spaced wordmark centred in the first screen. A dimmed photograph of people at a café table sits along the bottom edge. Type is minimal and light, and the page is held together by generous empty space and the warm tint of the ground rather than by strong colour.

**Mood:** quiet, airy, intimate, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4eae6` | Page ground |
| Surface | `#f4eae6` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#6b7280` · `#d1d5db` · `#e5e7eb` · `#ffffff` · `#f4eae6` · `#9ca3af` · `#fcf9f7` · `#4b5563` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Manrope, Syncopate
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 30px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-10`

**Primary button**

```html
<a class="inline-flex items-center gap-4 bg-[var(--c-accent)] text-white px-10 md:px-14 py-5 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium hover:scale-105 transition-all rounded-full shadow-2xl">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4eae6;
  --color-surface: #f4eae6;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4eae6',
    surface: '#f4eae6',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#e5e7eb',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Keep the ground in the blush tint (#f4eae6) with grey text (#4b5563)
- **Do:** Set the wordmark small and widely letter-spaced
- **Do:** Show the photograph dimmed along the bottom of the first screen
- **Don't:** Don't add saturated accent colours
- **Don't:** Don't set headlines in heavy weights
- **Don't:** Don't place the photograph at full brightness beside the wordmark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
