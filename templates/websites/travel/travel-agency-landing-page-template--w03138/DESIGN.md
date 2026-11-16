# Design system — Travel Agency Landing Page Template

`SN-W03138` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A clean, fresh travel page on a near-white ground (#fafafa) with a bold dark sans headline and one line set in green (#25d366). Pill-shaped buttons and rounded cards carry the layout, with a soft glow behind the hero. Green is the single accent and marks both the emphasis line and the primary button, so colour stays tightly controlled.

**Mood:** clean, fresh, friendly, minimal, rounded

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1d1d1f` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#25d366` | Primary action and highlights |

Palette by frequency of use: `#25d366` · `#1d1d1f` · `#ffffff` · `#6b7280` · `#9ca3af` · `#f3f4f6` · `#374151` · `#e5e7eb` · `#fafafa` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-full font-medium hover:bg-[#20bd5a] transition-all shadow-xl shadow-[#25D366]/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Map / location (`map-location`)
4. Listings (`listings`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Footer (`footer`)
8. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #1d1d1f;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #25d366;
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
    ink: '#1d1d1f',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in green (#25d366) and the first line in dark (#1d1d1f)
- **Do:** Use pill-shaped buttons for all CTAs, with a green fill for the primary action
- **Do:** Keep the page ground near-white (#fafafa) with white cards
- **Don't:** Don't use green for body text or small labels
- **Don't:** Don't use square corners on buttons or cards
- **Don't:** Don't add a second accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
