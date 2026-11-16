# Design system — Restaurant Menu Landing Page Template

`SN-W02991` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark menu page with a centred white Forum heading at a large size, a muted grey subtitle, and a rust (#c65a1e) fill for the one call to action, Book a Table. A single row of category links sits under the hero above a thin divider, and section titles are large serif set left-aligned. The page is built from type and rules, and it leaves the rust for the booking action.

**Mood:** dark, restrained, serif-led, menu-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#e4e4e7` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#c65a1e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#27272a` · `#c65a1e` · `#18181b` · `#a1a1aa` · `#71717a` · `#3f3f46` · `#f4f4f5` · `#09090b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Forum
- **Body:** Forum
- **Loaded families:** Forum, Open Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_20px_rgba(198,90,30,0.2)]`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-[#C65A1E] text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-[#A34A18] transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_rgba(198,90,30,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Product grid (`product-grid`)
4. Services (`services`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #e4e4e7;
  --color-muted: #71717a;
  --color-border: #3f3f46;
  --color-accent: #c65a1e;
  --font-display: "Forum", sans-serif;
  --font-body: "Forum", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#e4e4e7',
    muted: '#71717a',
    line: '#3f3f46',
    accent: '#c65a1e',
  },
  fontFamily: { display: ['Forum'], sans: ['Forum'] },
} }
```

## Do and don't

- **Do:** Set section titles in Forum at a large size, left-aligned.
- **Do:** Use the rust (#c65a1e) for the Book a Table button only.
- **Do:** Keep the category links in one row with a thin divider beneath.
- **Don't:** Don't use rust for the category link text.
- **Don't:** Don't set the subtitle in white; it is muted grey.
- **Don't:** Don't crowd the category row with extra colour or pills.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
