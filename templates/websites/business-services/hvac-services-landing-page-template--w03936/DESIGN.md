# Design system — HVAC Services Landing Page Template

`SN-W03936` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A clean white page with a single red accent (#d41313) for the primary estimate button and the small tag above the headline. The headline is set in heavy near-black sans, and its last phrase is mid-grey, which quietly softens the emphasis. A tall grey card on the right carries a short caption about the service. The tone is clear and plainly professional.

**Mood:** clear, plain, professional, direct, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#d41313` | Primary action and highlights |

Palette by frequency of use: `#d41313` · `#ffffff` · `#18181b` · `#e4e4e7` · `#d4d4d8` · `#52525b` · `#a1a1aa` · `#71717a` · `#3f3f46` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · body 12px
- **Weights in use:** normal, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-red-200`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#d41313] text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-red-700 transition-all shadow-sm shadow-red-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Testimonials (`testimonials`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #d41313;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#d41313',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the red (#d41313) only for the primary estimate button and the small tag.
- **Do:** Set the closing phrase of the headline in mid-grey and the rest in near-black.
- **Do:** Keep the outlined secondary button beside the primary, with a thin grey border.
- **Don't:** Don't use red for headlines or body text.
- **Don't:** Don't add a second accent colour.
- **Don't:** Don't add drop shadows to the image card; keep it flat with a soft gradient.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
