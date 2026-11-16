# Design system — HSK Performance Center

`SN-W02418` · healthcare · dark mode · Sinera Atlas theme `calm` · language `de`

## Direction

The gym page is black and aggressive: a #000000 ground, with a heavy red (#dc2626) wordmark and red tracked kicker lines as the only colour. Headings are all-caps white sans with a grey second line, and feature blocks sit in dark outlined panels. Red stays on the mark and labels, so the page reads as industrial.

**Mood:** aggressive, industrial, stark, uppercase

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#dc2626` · `#000000` · `#737373` · `#a3a3a3` · `#7f1d1d` · `#525252` · `#171717` · `#b91c1c` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_30px_rgba(220,38,38,0.4)]`, `shadow-[0_0_50px_rgba(220,38,38,0.25)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="vertical-text block bg-black border-y border-r border-red-900/50 text-red-600 text-sm font-medium tracking-[0.2em] py-8 px-3 hover:bg-red-600 hover:text-black hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-500 uppercase">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Integrations (`integrations`)
5. Bento grid (`bento-grid`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #dc2626;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
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
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#dc2626',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the ground black (#000000) and set the wordmark and kicker lines in red (#dc2626)
- **Do:** Set headings in heavy all-caps white sans with a grey second line
- **Do:** Use dark outlined panels with numbered labels for features
- **Don't:** Don't use red for body text or large backgrounds; keep it on the mark and small labels
- **Don't:** Don't round panel corners heavily; the panels are close to square
- **Don't:** Don't set headlines in mixed case; the uppercase is part of the voice

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
