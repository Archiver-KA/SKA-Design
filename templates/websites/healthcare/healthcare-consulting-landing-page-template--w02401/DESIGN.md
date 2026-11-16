# Design system — Healthcare Consulting Landing Page Template

`SN-W02401` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A corporate consulting hero on white, with a dark navy (#001f66) sans-serif headline and the word Collaboration set in green (#009953). Navy cards with white text sit beside photographs in a bento-style cluster, and a navy header button anchors the nav. The page reads as institutional and credible, with navy as the anchor and green as the one highlight.

**Mood:** institutional, credible, structured, navy, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#001f66` | Primary action and highlights |
| Second accent | `#009953` | Supporting highlights |

Palette by frequency of use: `#001f66` · `#ffffff` · `#009953` · `#64748b` · `#e2e8f0` · `#f1f5f9` · `#94a3b8` · `#f8fafc` · `#cbd5e1` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Inter, Manrope, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-primary rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-sm hover:shadow-md font-manrope">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Stats band (`stats`)
8. Logo cloud (`logo-cloud`)
9. Articles (`blog-articles`)
10. Testimonials (`testimonials`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #001f66;
  --color-accent-2: #009953;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#001f66',
    accent2: '#009953',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in Manrope at large size, navy (#001f66), with one highlight word in green (#009953).
- **Do:** Use navy for the header button and the solid feature cards.
- **Do:** Arrange photographs and cards in a bento grid with consistent corner radius.
- **Don't:** Don't set body copy in green; it is for the highlight word.
- **Don't:** Don't add a third accent colour.
- **Don't:** Don't mix serif faces into the headings.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
