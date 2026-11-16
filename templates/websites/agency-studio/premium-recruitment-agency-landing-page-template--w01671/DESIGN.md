# Design system — Premium Recruitment Agency Landing Page Template

`SN-W01671` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A light grey-white page with a large dark headline set in three lines, where the middle line is in mid-grey, and an indigo (#6366f1) primary button beside a plain secondary. The hero image is a large rounded photograph on the right with a small white stat card overlapping it. The look is clean and professional, with indigo as the single accent.

**Mood:** clean, professional, light, approachable, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#f5f5f5` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ccfbf1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#737373` · `#f5f5f5` · `#6366f1` · `#a3a3a3` · `#4f46e5` · `#818cf8` · `#262626` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-medium rounded-lg transition-colors shadow-lg shadow-indigo-900/50 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. About (`about`)
5. Services (`services`)
6. Newsletter signup (`newsletter`)
7. Testimonials (`testimonials`)
8. Team (`team`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #f5f5f5;
  --color-accent: #6366f1;
  --color-accent-2: #ccfbf1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#f5f5f5',
    accent: '#6366f1',
    accent2: '#ccfbf1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large in near-black (#171717), with the middle line in grey
- **Do:** Use indigo (#6366f1) for the primary button and small highlights only
- **Do:** Overlap a small white stat card on the rounded hero photograph
- **Don't:** Don't set the headline in the slate (#1e293b) tone; use near-black
- **Don't:** Don't use the pale teal (#ccfbf1) for buttons; it is a background tint
- **Don't:** Don't add dark shadows to the stat card; use the existing soft lift

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
