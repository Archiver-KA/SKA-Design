# Design system — Luxury Real Estate Landing Page Template

`SN-W03302` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

The French version of the warm dark hero: a near-black field (#1a1917) with a photograph shading into it on the left, and cream serif headlines in #f5f0eb. The keyword 'Sotchi' is set in italic, and two outline buttons sit below in tracked small caps. Figures are set as serif numerals with tiny labels beneath, keeping the palette to cream and warm black.

**Mood:** warm, restrained, dark, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1917` | Page ground |
| Surface | `#0f0f0e` | Cards, panels, raised areas |
| Text | `#f5f0eb` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#f5f0eb` · `#ffffff` · `#1a1917` · `#000000` · `#0f0f0e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h3 20px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[var(--color-copper)] hover:bg-[var(--color-terracotta)] rounded-md px-4 py-3 flex items-center justify-center transition-colors text-xs tracking-widest uppercase font-medium border-none cursor-pointer mt-1 text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Marquee (`marquee`)
6. Case studies (`case-studies`)
7. Process / steps (`how-it-works`)
8. Pricing (`pricing`)
9. Awards / press (`awards-press`)
10. Articles (`blog-articles`)
11. Call to action (`cta`)
12. Footer (`footer`)
13. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1917;
  --color-surface: #0f0f0e;
  --color-text: #f5f0eb;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1917',
    surface: '#0f0f0e',
    ink: '#f5f0eb',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at large size, in cream (#f5f0eb), with an italic keyword.
- **Do:** Use outline buttons with tracked uppercase labels for paired actions.
- **Do:** Set figures as serif numerals with small tracked labels beneath.
- **Don't:** Don't introduce a saturated colour; the palette stays cream and warm black.
- **Don't:** Don't set long copy in uppercase.
- **Don't:** Don't place the headline on the lightest part of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
