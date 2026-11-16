# Design system — Enterprise 3PL Logistics Landing Page Template

`SN-W03897` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A stark black page with centred white serif headlines set large and tightly leaded, followed by a short white sans-serif line and a solid white button with black text. The top bar is a thin black strip with a pale blue log-in button. The hero has no imagery, so the type carries the whole first screen.

**Mood:** stark, formal, high-contrast, minimal, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#333333` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e7eb` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#70d9ff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#70d9ff` · `#000000` · `#d1d5db` · `#e5e7eb` · `#111827` · `#038cdb` · `#4b5563` · `#333333` · `#1e3a8a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Noto Serif
- **Body:** Helvetica
- **Loaded families:** Noto Serif
- **Scale (largest breakpoint):** h1 60px · h2 36px · body 20px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(112,217,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="px-6 py-2.5 text-xs font-semibold tracking-wide uppercase bg-primary text-black hover:bg-white transition-all duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Pricing (`pricing`)
5. FAQ (`faq`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Alpine.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #333333;
  --color-text: #ffffff;
  --color-muted: #e5e7eb;
  --color-border: #ffffff;
  --color-accent: #70d9ff;
  --font-display: "Noto Serif", serif;
  --font-body: "Helvetica", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#333333',
    ink: '#ffffff',
    muted: '#e5e7eb',
    line: '#ffffff',
    accent: '#70d9ff',
  },
  fontFamily: { display: ['Noto Serif'], sans: ['Helvetica'] },
} }
```

## Do and don't

- **Do:** Set headlines centred in large serif, white on black
- **Do:** Use the pale blue (#70d9ff) for the log-in button and small highlights only
- **Do:** Make the primary button solid white with black text
- **Don't:** Don't set headlines in sans-serif; the serif is the voice of the page
- **Don't:** Don't add imagery to the hero; the type carries the first screen
- **Don't:** Don't use a coloured background; the page stays black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
