# Design system — Imperial Contracting | Premium Roofing & Exterior Specialists in Rantoul, IL

`SN-W03944` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, high-contrast contractor page on a deep slate ground (#0f172a) with white type. Headlines are set in a bold serif at large size, which gives the page an established, traditional tone, while blue (#2563eb) supplies the only colour and marks each action. Short trust labels such as the rating pill and service list sit in small text beneath the buttons.

**Mood:** established, bold, direct, trustworthy, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#2563eb` · `#475569` · `#64748b` · `#e2e8f0` · `#cbd5e1` · `#60a5fa` · `#94a3b8` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Pricing (`pricing`)
5. Services (`services`)
6. Testimonials (`testimonials`)
7. Gallery / portfolio (`gallery-portfolio`)
8. About (`about`)
9. Contact form (`contact-form`)
10. Call to action (`cta`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a bold serif in white
- **Do:** Use the blue (#2563eb) for primary buttons and the rating label only
- **Do:** Place trust points as short labels below the hero buttons
- **Don't:** Don't set blue text on the dark slate ground
- **Don't:** Don't use more than one button colour in the hero
- **Don't:** Don't place decorative imagery behind the headline; keep the ground flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
