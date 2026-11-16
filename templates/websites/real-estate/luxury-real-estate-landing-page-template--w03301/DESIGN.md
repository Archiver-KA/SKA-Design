# Design system — Luxury Real Estate Landing Page Template

`SN-W03301` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, warm-black hero with a photograph fading into shadow on one side. Large cream serif headlines carry the page, with the key word set in italic for emphasis, and outline pill buttons and figures sit below in tracked small caps. The palette stays within warm near-blacks and cream text, so the page reads as quiet and considered.

**Mood:** warm, quiet, dark, editorial

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
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-4xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2.5`

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
8. Feature grid (`features`)
9. Awards / press (`awards-press`)
10. Articles (`blog-articles`)
11. Call to action (`cta`)
12. Footer (`footer`)
13. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
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
  --radius: 8px;
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

- **Do:** Set headlines in a serif at large size, in cream (#f5f0eb), with one italic word for emphasis.
- **Do:** Use outline pill buttons with tracked uppercase labels.
- **Do:** Keep backgrounds to the warm near-blacks #1a1917 and #0f0f0e.
- **Don't:** Don't add a bright accent colour; the page relies on cream and near-black.
- **Don't:** Don't set body copy in small caps; caps are for labels and buttons.
- **Don't:** Don't place headlines over the lightest part of the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
