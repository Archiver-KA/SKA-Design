# Design system — Life Insurance Advisor Landing Page Template

`SN-W00991` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A calm, light advisory page on a white ground, with a near-black headline set in a bold serif and a black primary button. Colour is almost absent: small green check marks flag the trust points, and a photograph of a smiling advisor carries the warmth. Stacked, left-aligned copy and a generous gutter give it the feel of a clear, reassuring consultation.

**Mood:** calm, reassuring, plain, personal, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#7c3aed` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#059669` · `#78716c` · `#57534e` · `#e7e5e4` · `#292524` · `#a8a29e` · `#d6d3d1` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-1`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Services (`services`)
5. Logo cloud (`logo-cloud`)
6. Feature grid (`features`)
7. Articles (`blog-articles`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #7c3aed;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#7c3aed',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold serif in near-black (#1c1917), left-aligned.
- **Do:** Use the black button for every call to action, including Schedule a call.
- **Do:** Use the green (#059669) only for small check icons.
- **Don't:** Don't use green for buttons or large fills.
- **Don't:** Don't centre the hero copy.
- **Don't:** Don't add decorative gradients behind the photograph.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
