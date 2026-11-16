# Design system — Think & Grow Rich Coach Landing Page Template

`SN-W02258` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A refined coaching landing page on a near-white ground, with a dark charcoal serif headline whose second line is set in a light grey italic, which makes the statement reflective rather than loud. A small pill badge sits above, and black and white pill buttons sit side by side below. The nav is a plain white bar with a small uppercase name, and the mix of charcoal and light grey italic is the key device, with no accent colour used.

**Mood:** refined, reflective, clean, calm, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |

Palette by frequency of use: `#171717` · `#737373` · `#ffffff` · `#a3a3a3` · `#e5e5e5` · `#fafafa` · `#262626` · `#d4d4d4` · `#525252` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="px-4 py-2 bg-neutral-900 text-white text-xs font-medium rounded-full hover:bg-neutral-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Newsletter signup (`newsletter`)
5. Integrations (`integrations`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #d97706;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in grey italic at the same size as the first.
- **Do:** Use black for the primary button and white with a border for the secondary.
- **Do:** Keep the page on near-white (#fafafa) with white cards.
- **Don't:** Don't add an accent colour; the page uses charcoal and grey only.
- **Don't:** Don't use drop shadows on buttons; separation comes from the ground colour.
- **Don't:** Don't set the headline in a bold weight; the regular serif is the voice.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
