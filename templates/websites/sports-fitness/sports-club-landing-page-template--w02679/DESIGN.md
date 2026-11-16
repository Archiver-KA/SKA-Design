# Design system — Sports Club Landing Page Template

`SN-W02679` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A sporty club hero on a solid deep purple band (#581c87) with a large white sans-serif headline and a light lower section beneath it. The purple is the signature colour and fills the hero rather than acting as a small accent. Photo placeholders and rounded cards sit in the white section.

**Mood:** sporty, bold, saturated, clean, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f3f4f6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#581c87` | Primary action and highlights |
| Second accent | `#581c87` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f3f4f6` · `#111827` · `#2563eb` · `#1e40af` · `#0f172a` · `#581c87` · `#831843` · `#bfdbfe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-[1600px]`, `max-w-[14rem]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition text-sm font-medium tracking-wide glass-panel font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-border: #ffffff;
  --color-accent: #581c87;
  --color-accent-2: #581c87;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f3f4f6',
    surface: '#ffffff',
    ink: '#0f172a',
    line: '#ffffff',
    accent: '#581c87',
    accent2: '#581c87',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the deep purple (#581c87) as the hero field with white headlines.
- **Do:** Set headlines in large white sans-serif on the purple band.
- **Do:** Switch to a white section with dark headlines below the hero.
- **Don't:** Don't use the light grey (#f3f4f6) for the hero; the first screen is purple.
- **Don't:** Don't use the blue (#1e40af) as a large fill beside the purple.
- **Don't:** Don't use the purple as small body text on white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
