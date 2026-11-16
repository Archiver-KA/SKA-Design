# Design system — WhatsApp Productivity Assistant Landing Page Template

`SN-W00833` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A soft off-white page with a dark ink headline in Inter, where the phrase 'human-ish' is set in a warm bronze gradient (#c88a58). Buttons are a bright green pill and a white outlined pill, and the bronze is used only for the one highlight. Feature cards and the testimonial block are white with pale borders, giving a warm, gentle, personal tone.

**Mood:** warm, personal, soft, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#27272a` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#f4f4f5` | Hairlines, dividers, outlines |
| Accent | `#c88a58` | Primary action and highlights |
| Second accent | `#6a7afe` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#f4f4f5` · `#e4e4e7` · `#c88a58` · `#fafafa` · `#ebcdad` · `#27272a` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 14px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #27272a;
  --color-muted: #71717a;
  --color-border: #f4f4f5;
  --color-accent: #c88a58;
  --color-accent-2: #6a7afe;
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
    ink: '#27272a',
    muted: '#71717a',
    line: '#f4f4f5',
    accent: '#c88a58',
    accent2: '#6a7afe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the bronze (#c88a58) only for the headline highlight phrase
- **Do:** Set the headline at 72px in Inter with a grey and dark two-tone split
- **Do:** Keep feature and testimonial cards white with pale borders on the off-white ground
- **Don't:** Don't set body text in the bronze
- **Don't:** Don't use the bright green on more than one button
- **Don't:** Don't add dark sections to this light layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
