# Design system — Livespay Social Commerce Platform Template

`SN-W00500` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `fr`

## Direction

A warm, editorial sales page on a cream ground (#f3f1ea) with a deep green (#24452f) headline and matching dark button. Large Inter headlines break across short lines, and one word is set in green to mark the point of the sentence. Photography sits in a white rounded frame beside the copy, and the pale yellow (#f5d349) appears only as a soft glow, so the page reads as calm and domestic.

**Mood:** warm, editorial, calm, natural, approachable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f1ea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1d2a22` | Headings and primary copy |
| Muted text | `#5b635c` | Secondary copy, captions |
| Border | `#e4e0d4` | Hairlines, dividers, outlines |
| Accent | `#24452f` | Primary action and highlights |
| Second accent | `#f5d349` | Supporting highlights |

Palette by frequency of use: `#24452f` · `#ffffff` · `#5b635c` · `#e6efe3` · `#e4e0d4` · `#3d6b4a` · `#1d2a22` · `#f5d349` · `#f3f1ea` · `#8a8f87`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-[#24452f]/5`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[1440px]`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden items-center gap-2 rounded-full bg-[#24452f] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1b3524] sm:flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Comparison (`comparison`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Team (`team`)
8. Pricing (`pricing`)
9. Product grid (`product-grid`)
10. Bento grid (`bento-grid`)
11. FAQ (`faq`)
12. Contact form (`contact-form`)
13. App download (`app-download`)
14. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f1ea;
  --color-surface: #ffffff;
  --color-text: #1d2a22;
  --color-muted: #5b635c;
  --color-border: #e4e0d4;
  --color-accent: #24452f;
  --color-accent-2: #f5d349;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f1ea',
    surface: '#ffffff',
    ink: '#1d2a22',
    muted: '#5b635c',
    line: '#e4e0d4',
    accent: '#24452f',
    accent2: '#f5d349',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of each headline in deep green (#24452f).
- **Do:** Frame product photography in white rounded cards beside the copy.
- **Do:** Use the yellow (#f5d349) only as a soft glow or a small highlight.
- **Don't:** Don't use yellow for buttons or text.
- **Don't:** Don't put the cream ground behind photographs; keep photos on white frames.
- **Don't:** Don't add cool blue or grey accents; the palette is green, cream and yellow.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
