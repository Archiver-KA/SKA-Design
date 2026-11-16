# Design system — Accra Real Estate Landing Page Template

`SN-W03165` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

An airy, data-led real estate hero on an off-white ground (#f8fafc), with a large bold sans headline whose second phrase drops to a cool grey. A pill search field and a dark slate round button sit beneath, with a faint red market alert above the headline. Pale blurred chart cards sit under the fold, which keeps the page professional and calm.

**Mood:** airy, data-led, professional, clean, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#94a3b8` · `#e2e8f0` · `#f1f5f9` · `#64748b` · `#1e293b` · `#475569` · `#cbd5e1` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="px-8 py-3.5 bg-slate-800 text-white border border-slate-700 font-medium rounded-full hover:bg-slate-700 transition-colors font-geist w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Map / location (`map-location`)
5. Pricing (`pricing`)
6. Bento grid (`bento-grid`)
7. Call to action (`cta`)
8. Logo cloud (`logo-cloud`)
9. Team (`team`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #1e293b;
  --color-accent-2: #f43f5e;
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
    ink: '#1e293b',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#1e293b',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans in dark slate (#1e293b), with the second phrase in grey
- **Do:** Use the dark slate (#1e293b) for the search button and primary actions
- **Do:** Use the red (#f43f5e) only for small alert markers
- **Don't:** Don't use red for buttons or headlines
- **Don't:** Don't set the search field with hard borders; it sits as a soft pill
- **Don't:** Don't add more than one alert line above the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
