# Design system — Construction and Insulation Landing Page Template

`SN-W03216` · real-estate · light mode · Sinera Atlas theme `dwell` · language `cs`

## Direction

A light, warm service page where a dark headline (#1c1917) on an off-white ground carries most of the weight, and a single italic orange word (#f97316) adds emphasis. Orange also fills the primary form button, so the colour marks the two things that matter: the emphasised phrase and the request. A white quote card with a thin warm-grey border sits beside the copy.

**Mood:** warm, plain, local, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#f97316` · `#ffffff` · `#e7e5e4` · `#78716c` · `#44403c` · `#1c1917` · `#fb923c` · `#a8a29e` · `#f5f5f4` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-orange-500 rounded-2xl p-6 transition group text-white hover:bg-orange-600">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark (#1c1917) with one italic word in orange (#f97316).
- **Do:** Use the orange only for the emphasised word and the primary form button.
- **Do:** Place the quote form in a white card with a thin border (#e7e5e4) beside the copy.
- **Don't:** Don't use orange for more than one emphasised phrase per section.
- **Don't:** Don't set the page on a dark ground; the look depends on the warm off-white.
- **Don't:** Don't set body copy in italics; the italic is reserved for the emphasised word.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
