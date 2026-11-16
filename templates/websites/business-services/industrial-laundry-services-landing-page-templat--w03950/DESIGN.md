# Design system — Industrial Laundry Services Landing Page Template

`SN-W03950` · business-services · dark mode · Sinera Atlas theme `route` · language `pl`

## Direction

A clean service-business hero on a gradient running from deep teal (#0c4a6e) to pale blue-grey, which gives the page a cool, clear mood. The headline is large, white and set in short lines, and a sky-blue (#0ea5e9) button carries the main call to action beside an outlined secondary button. Navigation is light and small, so the hero copy leads.

**Mood:** clean, cool, professional, clear, service-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c4a6e` | Page ground |
| Surface | `#f0f9ff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#374151` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0c4a6e` · `#1e293b` · `#0ea5e9` · `#f0f9ff` · `#bae6fd` · `#374151` · `#6b7280` · `#0284c7` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 16px
- **Weights in use:** semibold, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-16`

**Primary button**

```html
<a class="bg-[#0ea5e9] hover:bg-[#0ea5e9]/90 text-white px-8 py-4 rounded-lg text-base transition-colors text-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c4a6e;
  --color-surface: #f0f9ff;
  --color-text: #ffffff;
  --color-muted: #374151;
  --color-border: #ffffff;
  --color-accent: #0ea5e9;
  --font-display: "Outfit", sans-serif;
  --font-body: "Outfit", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c4a6e',
    surface: '#f0f9ff',
    ink: '#ffffff',
    muted: '#374151',
    line: '#ffffff',
    accent: '#0ea5e9',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Use the gradient from deep teal (#0c4a6e) to pale blue as the hero ground
- **Do:** Use sky blue (#0ea5e9) for the primary button only
- **Do:** Set headlines in white, in short lines
- **Don't:** Don't place body text on the lightest part of the gradient
- **Don't:** Don't add a second accent colour beside sky blue
- **Don't:** Don't fill the secondary button; keep it outlined

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
