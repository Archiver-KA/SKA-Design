# Design system — STRIDE Personal Growth Landing Page Template

`SN-W02242` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet dark coaching page: a near-black ground (#050505) with white headlines and grey supporting copy, so the brand reads as calm and minimal rather than cyan. The hero pairs a heavy sans first line with a light serif italic second line, which gives the headline its voice. Pale pill buttons sit on the dark ground and dark glass-like cards hold the dashboard mock-up, with contrast between the sans and the italic as the recognisable trait.

**Mood:** calm, minimal, dark, focused, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Second accent | `#ef4444` | Supporting highlights |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#00f3ff` · `#a3a3a3` · `#737373` · `#000000` · `#050505` · `#262626` · `#171717` · `#d4d4d4` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Syne, Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(229,231,235,0.3)]`, `shadow-xl`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="h-12 px-8 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#00F3FF] transition-colors flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. About (`about`)
6. Logo cloud (`logo-cloud`)
7. Testimonials (`testimonials`)
8. Process / steps (`how-it-works`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero as a heavy sans line followed by a light serif italic line.
- **Do:** Use white pill buttons for the primary action on the dark ground.
- **Do:** Keep cards dark with hairline borders instead of coloured fills.
- **Don't:** Don't use the cyan (#00f3ff) as a page ground; it does not appear in the hero.
- **Don't:** Don't switch the page to a white ground; the hero stays near-black throughout.
- **Don't:** Don't set more than one italic phrase in a single headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
