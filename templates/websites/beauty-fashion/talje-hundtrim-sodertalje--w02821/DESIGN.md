# Design system — Tälje Hundtrim Södertälje

`SN-W02821` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `sv`

## Direction

A friendly grooming page on warm cream (#fff7ed) with dark headline text and rounded white cards holding dog photographs. Orange (#ea580c) marks small category labels and status tags, while the navigation's dark pill button carries the booking action. The large wordmark sits under the hero photo, and rounded corners on cards and buttons keep the page approachable rather than clinical.

**Mood:** friendly, warm, approachable, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff7ed` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#f5f5f4` · `#ea580c` · `#e7e5e4` · `#78716c` · `#fff7ed` · `#fafaf9` · `#fdfcf8` · `#a8a29e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wider`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-3 px-5 py-3 text-stone-500 hover:bg-stone-50 rounded-full transition-all w-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Map / location (`map-location`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fff7ed;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #ea580c;
  --color-accent-2: #22c55e;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff7ed',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#ea580c',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the page ground on warm cream (#fff7ed) with near-black (#1c1917) headings
- **Do:** Use orange (#ea580c) for small labels and status tags only
- **Do:** Round cards and buttons generously and keep photographs in rounded frames
- **Don't:** Don't use the pale orange (#fed7aa) as the page ground; it is too strong
- **Don't:** Don't set the booking button in orange; it is dark
- **Don't:** Don't set body copy in orange

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
