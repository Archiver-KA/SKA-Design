# Design system — Luxury Skincare Studio Landing Page Template

`SN-W02796` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A calm clinic-style hero on a mid-grey wash, with a light nav bar carrying a near-black booking button. A small pill label sits above a large centred serif headline, then a short paragraph and a solid white secondary button. The grey ground keeps white type legible, and the near-black button is the strongest element. The palette is neutral.

**Mood:** clinical, calm, neutral, refined, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#bfa15f` · `#1c1917` · `#ffffff` · `#f5f5f4` · `#78716c` · `#000000` · `#57534e` · `#fafaf9` · `#a8a29e` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="hidden sm:block bg-stone-900 text-stone-50 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. FAQ (`faq`)
7. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-black (#1c1917) for the nav booking button and primary actions.
- **Do:** Keep the hero on a mid-grey wash with white serif text.
- **Do:** Centre the label, headline, paragraph and button in one stack.
- **Don't:** Don't add a colour accent; the page is neutral.
- **Don't:** Don't set white paragraph copy on a light grey wash.
- **Don't:** Don't use gold (#bfa15f) for text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
