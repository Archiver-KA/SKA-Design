# Design system — Educational Blog & Career Interview Template

`SN-W03453` · education · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

An editorial interview page with a teal [#107f82] gradient hero, where a large white sans-serif pull quote sits in the centre. Yellow [#d3a019] highlights the key phrase of the quote and the thin announcement bar at the top, and the photograph area is a white rounded card. The layout is centred and literary, with colour doing the emphasis.

**Mood:** editorial, warm, confident, literary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#107f82` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#202020` | Headings and primary copy |
| Muted text | `#495057` | Secondary copy, captions |
| Border | `#e8e4da` | Hairlines, dividers, outlines |
| Accent | `#107f82` | Primary action and highlights |
| Second accent | `#d3a019` | Supporting highlights |

Palette by frequency of use: `#107f82` · `#ffffff` · `#e8e4da` · `#495057` · `#004b4d` · `#202020` · `#fdfcf9` · `#d3a019` · `#cd9c2e` · `#f4fafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 20px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow`
- **Content width:** `max-w-[1100px]`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-1.5`, `gap-y-2`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-xs border border-[#e8e4da] bg-white text-[#004b4d] hover:border-[#107f82] hover:text-[#107f82] transition-all shadow-sm hover:shadow">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #107f82;
  --color-surface: #ffffff;
  --color-text: #202020;
  --color-muted: #495057;
  --color-border: #e8e4da;
  --color-accent: #107f82;
  --color-accent-2: #d3a019;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#107f82',
    surface: '#ffffff',
    ink: '#202020',
    muted: '#495057',
    line: '#e8e4da',
    accent: '#107f82',
    accent2: '#d3a019',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the pull quote in large white sans-serif on the teal background
- **Do:** Use yellow (#d3a019) for one highlighted phrase and the announcement bar only
- **Do:** Place photographs inside a white rounded card
- **Don't:** Don't set body text in yellow on teal
- **Don't:** Don't add more than one highlight colour to the hero
- **Don't:** Don't place the pull quote on the light page background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
