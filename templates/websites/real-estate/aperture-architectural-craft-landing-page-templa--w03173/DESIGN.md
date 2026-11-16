# Design system — Aperture Architectural Craft Landing Page Template

`SN-W03173` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A gallery-like architectural page: a warm off-white ground, near-black ink, and full-bleed photographs of timber and stone doors. Headlines are large and light, with an italic serif phrase, while the eyebrow labels are small spaced caps. The quiet frame and oversized type let the product photographs carry the look.

**Mood:** editorial, luxurious, restrained, tactile

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f6f2` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#161713` | Headings and primary copy |
| Muted text | `#777d74` | Secondary copy, captions |
| Border | `#161713` | Hairlines, dividers, outlines |
| Accent | `#161713` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#161713` · `#000000` · `#354035` · `#777d74` · `#667062` · `#202820` · `#5f715c` · `#f7f6f2` · `#666b63`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-[0_2rem_5rem_rgba(22,23,19,0.18)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-5`, `gap-4`

**Primary button**

```html
<a class="hidden items-center gap-3 rounded-full border border-white/30 bg-white px-5 py-3 text-sm text-[#161713] shadow-lg transition-transform hover:scale-[0.98] sm:flex">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Product grid (`product-grid`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Pricing (`pricing`)
10. Team (`team`)
11. Contact form (`contact-form`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f6f2;
  --color-surface: #ffffff;
  --color-text: #161713;
  --color-muted: #777d74;
  --color-border: #161713;
  --color-accent: #161713;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f6f2',
    surface: '#ffffff',
    ink: '#161713',
    muted: '#777d74',
    line: '#161713',
    accent: '#161713',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines large and light, with one italic serif phrase per headline
- **Do:** Use small spaced uppercase labels above section headings
- **Do:** Keep the off-white (#f7f6f2) ground and let photographs carry the colour
- **Don't:** Don't add bright accent colours; the palette is ink, stone and moss
- **Don't:** Don't shrink the door photography into small thumbnails
- **Don't:** Don't set headlines in a heavy sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
