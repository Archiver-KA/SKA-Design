# Design system — sortengarten-10-03-26-2

`SN-W02528` · healthcare · dark mode · Sinera Atlas theme `calm` · language `de`

## Direction

A botanical education page built on a deep moss-green hero (#3e5f55) with white bold sans headlines. The beige accent (#bfa58a) carries the italic second clause of each headline and the primary button, so colour does the emphasis work without illustration. The stance is calm and instructional, a well-spaced hero that reads like the front page of a course.

**Mood:** botanical, calm, instructional, grounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#3e5f55` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#222222` | Headings and primary copy |
| Muted text | `#6f6f6f` | Secondary copy, captions |
| Border | `#d7ddd9` | Hairlines, dividers, outlines |
| Accent | `#bfa58a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d7ddd9` · `#222222` · `#6f6f6f` · `#3e5f55` · `#5e7f73` · `#fafaf7` · `#bfa58a` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Source Sans 3
- **Body:** Source Sans 3
- **Loaded families:** Inter, Source Sans 3
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded text-[#3E5F55] bg-[#BFA58A] hover:bg-[#BFA58A]/90 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. About (`about`)
6. Sign-in form (`auth-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #3e5f55;
  --color-surface: #ffffff;
  --color-text: #222222;
  --color-muted: #6f6f6f;
  --color-border: #d7ddd9;
  --color-accent: #bfa58a;
  --font-display: "Source Sans 3", sans-serif;
  --font-body: "Source Sans 3", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#3e5f55',
    surface: '#ffffff',
    ink: '#222222',
    muted: '#6f6f6f',
    line: '#d7ddd9',
    accent: '#bfa58a',
  },
  fontFamily: { display: ['Source Sans 3'], sans: ['Source Sans 3'] },
} }
```

## Do and don't

- **Do:** Use beige (#bfa58a) for the italic clause of each headline and the primary button
- **Do:** Keep the hero on the moss ground (#3e5f55) with white headlines
- **Do:** Keep the secondary button as a thin beige outline
- **Don't:** Don't add bright greens; the palette stays muted
- **Don't:** Don't set whole paragraphs in italic; italic is for the headline clause
- **Don't:** Don't set body copy in beige on green; beige is for accents

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
