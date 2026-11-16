# Design system — Mystiquement-vôtre Shamanic Services Landing Page Template

`SN-W04029` · business-services · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A soft, light wellness page with a white ground and a large dark sans-serif headline. The final word of each headline takes a bright violet (#cc6ef5), and buttons are rounded pills, solid for booking and outlined for secondary. A tall photograph in a rounded panel carries a floating testimonial, which adds warmth to the layout.

**Mood:** soft, warm, airy, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#cc6ef5` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#cc6ef5` · `#ffffff` · `#0f172a` · `#f1f5f9` · `#94a3b8` · `#e2e8f0` · `#334155` · `#64748b` · `#f8fafc` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-[#cc6ef5]/10`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 bg-[#cc6ef5] hover:bg-[#b55bd9] text-white text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-[#cc6ef5]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #cc6ef5;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#cc6ef5',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour the final word of each headline in violet (#cc6ef5)
- **Do:** Use solid violet pills for booking and outlined pills for secondary actions
- **Do:** Frame photographs in tall rounded panels with a floating testimonial
- **Don't:** Don't set body text in violet
- **Don't:** Don't use hard borders on cards; use soft tints
- **Don't:** Don't set headlines in a serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
