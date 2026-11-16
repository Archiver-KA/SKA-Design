# Design system — Car Wash Service Landing Page Template

`SN-W03856` · business-services · light mode · Sinera Atlas theme `route` · language `vi`

## Direction

A two-part page: a dark navy hero with a blue-black gradient carries a bold uppercase headline in white, under a light header bar. A yellow (#fbbf24) solid button leads the actions, paired with an outlined button, and the light sections below use plain headings and grey copy. The yellow is the only warm colour, and it marks the booking action.

**Mood:** clear, energetic, local, service-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#f9fafb` · `#1e3a8a` · `#e5e7eb` · `#475569` · `#94a3b8` · `#64748b` · `#dbeafe` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-inner`, `shadow-blue-900/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 px-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-2 mt-4">…</a>
```

## Page structure

Blocks in page order:

1. Schedule (`schedule-agenda`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Pricing (`pricing`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #e5e7eb;
  --color-accent: #fbbf24;
  --color-accent-2: #1e3a8a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#475569',
    muted: '#64748b',
    line: '#e5e7eb',
    accent: '#fbbf24',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold uppercase white on the navy gradient.
- **Do:** Use the yellow (#fbbf24) for the booking button only.
- **Do:** Keep the sections below the hero light, with dark navy headings.
- **Don't:** Don't use yellow for headings or long text.
- **Don't:** Don't place a light panel over the navy hero.
- **Don't:** Don't add a second warm colour beside the yellow.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
