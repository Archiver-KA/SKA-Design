# Design system — Employer Branding Landing Page Template

`SN-W01565` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A warm off-white ground (#f5f4f0) with a faint curved line motif and a large headline in dark slate (#1f2b37), set in a serif. The primary action is a muted slate button (#4a5568) beside an outlined secondary, and a white product window holds the video. The palette is quiet and editorial.

**Mood:** quiet, editorial, warm, calm, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f4f0` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1f2b37` | Headings and primary copy |
| Muted text | `#52667a` | Secondary copy, captions |
| Border | `#e5e4de` | Hairlines, dividers, outlines |
| Accent | `#4a5568` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f2b37` · `#e5e4de` · `#52667a` · `#4a5568` · `#f5f4f0` · `#d1d0c9` · `#d1d5db` · `#3f5265` · `#ebeae4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="rounded-full bg-[#52667a] px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Video / media (`video-media`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Feature grid (`features`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f5f4f0;
  --color-surface: #ffffff;
  --color-text: #1f2b37;
  --color-muted: #52667a;
  --color-border: #e5e4de;
  --color-accent: #4a5568;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f4f0',
    surface: '#ffffff',
    ink: '#1f2b37',
    muted: '#52667a',
    line: '#e5e4de',
    accent: '#4a5568',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif at large size in dark slate (#1f2b37)
- **Do:** Use the slate (#4a5568) for primary buttons and keep secondary buttons outlined
- **Do:** Frame product media in a white window with rounded corners and a thin border
- **Don't:** Don't use yellow for buttons or highlights; the page is slate and cream
- **Don't:** Don't set the background pure white; keep the warm off-white ground
- **Don't:** Don't add heavy shadows to the product window

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
