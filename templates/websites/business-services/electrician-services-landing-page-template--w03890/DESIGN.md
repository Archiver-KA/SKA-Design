# Design system — Electrician Services Landing Page Template

`SN-W03890` · business-services · dark mode · Sinera Atlas theme `route` · language `pl`

## Direction

A dark navy page with a white bold sans-serif headline whose second line fades to grey, and a yellow primary button (#f5c518) that carries most of the colour. The hero is flat, with a small pill badge above the headline and a darker outlined secondary button beside the yellow. Supporting copy is light grey and kept to two short lines.

**Mood:** dark, direct, trustworthy, bold, local

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0f1e` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f5c518` | Primary action and highlights |
| Second accent | `#f5c518` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#d1d5db` · `#0f172a` · `#f1f5f9` · `#e2e8f0` · `#64748b` · `#6b7280` · `#f8fafc` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Inter
- **Loaded families:** Inter, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_15px_rgba(245,197,24,0.1)]`, `shadow-[0_0_20px_rgba(245,197,24,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-brand-accent hover:bg-brand-accentHover text-brand-dark px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(245,197,24,0.1)] hover:shadow-[0_0_20px_rgba(245,197,24,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Map / location (`map-location`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0f1e;
  --color-surface: #374151;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #f5c518;
  --color-accent-2: #f5c518;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0f1e',
    surface: '#374151',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#f5c518',
    accent2: '#f5c518',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans-serif with the second line in grey
- **Do:** Use the yellow (#f5c518) for the primary button and the small logo mark
- **Do:** Pair the yellow button with a dark outlined secondary button
- **Don't:** Don't use the yellow for headings or large areas; it marks action only
- **Don't:** Don't set the page on a light background; the navy ground is the look
- **Don't:** Don't add a second bright colour; the page is navy, white and yellow

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
