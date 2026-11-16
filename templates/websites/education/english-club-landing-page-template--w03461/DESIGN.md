# Design system — English Club Landing Page Template

`SN-W03461` · education · light mode · Sinera Atlas theme `calm` · language `es`

## Direction

A friendly, direct page for a language club, set in Poppins with bold headlines in blue (#1f5fa6). Orange (#f47c20) marks the main call to action, and photographs of people talking in a relaxed setting show the community. The copy is written as short, confident sentences, and light grey dividers keep the sections clearly apart on a white ground.

**Mood:** friendly, direct, warm, clean, sociable

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#f47c20` | Primary action and highlights |
| Second accent | `#1f5fa6` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#e5e7eb` · `#4b5563` · `#9ca3af` · `#f47c20` · `#1f5fa6` · `#f3f4f6` · `#f9fafb` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Poppins
- **Body:** Poppins
- **Loaded families:** Montserrat, Poppins, Geist, Roboto, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-5`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Call to action (`cta`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-border: #e5e7eb;
  --color-accent: #f47c20;
  --color-accent-2: #1f5fa6;
  --font-display: "Poppins", sans-serif;
  --font-body: "Poppins", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    line: '#e5e7eb',
    accent: '#f47c20',
    accent2: '#1f5fa6',
  },
  fontFamily: { display: ['Poppins'], sans: ['Poppins'] },
} }
```

## Do and don't

- **Do:** Set headlines in Poppins bold, in blue (#1f5fa6)
- **Do:** Use orange (#f47c20) for the main call to action only
- **Do:** Round photo panels and cards to the rounded-xl corners
- **Don't:** Don't set orange body text on white
- **Don't:** Don't mix a second display font with Poppins
- **Don't:** Don't add decorative ornaments; the layout stays plain

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
