# Design system — Pressure Washing Services Landing Page Template

`SN-W04065` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A trust-building page that opens on a full-bleed photograph of the work, with a bold white sans headline and one key word set in blue. The header is a light bar with dark text and a solid dark button, and the sections below return to white with grey copy. The layout is plain and easy to scan, suited to a local service business.

**Mood:** trustworthy, practical, clear, local, uncomplicated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#374151` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#e5e7eb` · `#f3f4f6` · `#4b5563` · `#9ca3af` · `#374151` · `#f9fafb` · `#6b7280` · `#facc15`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-0.5`, `gap-2`

**Primary button**

```html
<a class="bg-gray-900 hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 animate-cta-attention hover:animate-none">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Stats band (`stats`)
6. Process / steps (`how-it-works`)
7. Logo cloud (`logo-cloud`)
8. Listings (`listings`)
9. Footer (`footer`)
10. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #374151;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#374151',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in bold white sans, with a single key word in blue
- **Do:** Keep the header bar light with dark text and a solid dark button
- **Do:** Overlay the hero photograph with a dark tint so white type stays legible
- **Don't:** Don't add more than one highlight colour to a headline
- **Don't:** Don't set body copy in white on the light sections
- **Don't:** Don't run headline text across busy parts of the photograph without the overlay

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
