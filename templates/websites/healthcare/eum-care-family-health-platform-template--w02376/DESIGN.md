# Design system — EUM Care Family Health Platform Template

`SN-W02376` · healthcare · light mode · Sinera Atlas theme `calm` · language `ko`

## Direction

A friendly app-landing hero on a pale sky-blue ground (#e8f5ff), with a large Korean headline in deep blue and a phone mockup showing the product's family dashboard. Blue (#145c99) carries the headline, the header button and the UI, and the soft rounded panels keep it approachable. The page reads as a mobile-first product brochure rather than a clinic site.

**Mood:** friendly, approachable, clean, mobile, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#e8f5ff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#15324b` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#145c99` | Primary action and highlights |
| Second accent | `#ffc83d` | Supporting highlights |

Palette by frequency of use: `#6b7280` · `#ffffff` · `#e8f5ff` · `#145c99` · `#0f72dc` · `#15324b` · `#d9ebf8` · `#58758b` · `#66839b` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nabla
- **Body:** Nabla
- **Loaded families:** Nabla, Google Sans, Bricolage Grotesque
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 30px · body 16px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[24px]` (24px), `rounded-[30px]` (30px)
- **Shadows:** `shadow-[0_14px_36px_rgba(52,111,153,.09)]`, `shadow-[rgba(0,_0,_0,_0.17)_0px_-23px_25px_0px_inset,_rgba(0,_0,_0,_0.15)_0px_-36px_30px_0px_inset,_rgba(0,_0,_0,_0.1)_0px_-79px_40px_0px_inset,_rgba(0,_0,_0,_0.06)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]`, `shadow-[0_18px_45px_rgba(52,111,153,.10)]`
- **Content width:** `max-w-[1160px]`, `max-w-[720px]`
- **Section padding:** `py-[86px]`, `py-16`
- **Common gaps:** `gap-3`, `gap-x-2.5`, `gap-y-2.5`

**Primary button**

```html
<a class="ml-6 border-0 rounded-full bg-[#145c99] text-white py-3 px-5 font-semibold text-sm shadow-[0_12px_28px_rgba(20,92,153,.18)] transition-transform hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. App download (`app-download`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #e8f5ff;
  --color-surface: #ffffff;
  --color-text: #15324b;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #145c99;
  --color-accent-2: #ffc83d;
  --font-display: "Nabla", sans-serif;
  --font-body: "Nabla", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#e8f5ff',
    surface: '#ffffff',
    ink: '#15324b',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#145c99',
    accent2: '#ffc83d',
  },
  fontFamily: { display: ['Nabla'], sans: ['Nabla'] },
} }
```

## Do and don't

- **Do:** Set the headline in deep blue (#145c99) at large size, with the subhead in lighter blue-grey.
- **Do:** Keep the hero on the pale blue ground (#e8f5ff) with white cards.
- **Do:** Use the phone mockup as the main visual, with the UI in the same blue family.
- **Don't:** Don't set body copy in the bright blue (#0f72dc); it is reserved for the UI.
- **Don't:** Don't use the yellow (#ffc83d) for text; it is a small highlight only.
- **Don't:** Don't crop the phone mockup on the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
