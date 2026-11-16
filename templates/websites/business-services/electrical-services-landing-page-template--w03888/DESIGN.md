# Design system — Electrical Services Landing Page Template

`SN-W03888` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, warm off-white page with a bold dark sans-serif headline and an italic serif second line. The primary button is solid black, and a tall phone-style mockup in dark tones sits on the right beside small round decorative dots. Compliance labels sit as small pill tags above the headline, keeping the hero calm.

**Mood:** light, editorial, calm, modern, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#000000` · `#6b7280` · `#4b5563` · `#f3f4f6` · `#efeae5` · `#d1c8c0` · `#1f2937` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="relative bg-orange-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Sign-in form (`auth-form`)
5. Services (`services`)
6. About (`about`)
7. Feature grid (`features`)
8. Case studies (`case-studies`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #111827;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
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
    surface: '#111827',
    ink: '#000000',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy black sans-serif with the second line in italic serif
- **Do:** Use a solid black primary button beside a plain text link
- **Do:** Keep the page on a warm off-white ground with small round decorative dots
- **Don't:** Don't set the page on dark tones; the hero is light
- **Don't:** Don't set the compliance tags in bright colours; they stay small and grey
- **Don't:** Don't crop the phone mockup; it sits whole on the right

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
