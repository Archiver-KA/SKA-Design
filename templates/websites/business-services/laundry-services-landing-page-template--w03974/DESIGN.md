# Design system — Laundry Services Landing Page Template

`SN-W03974` · business-services · dark mode · Sinera Atlas theme `route` · language `pl`

## Direction

A cool, blue-toned service hero: a blurred photograph of a laundry drum fills the background, tinted deep teal (#0c4a6e), and the headline is set in large white lines. Sky blue (#0ea5e9) fills the primary button, with an outlined secondary beside it. A small uppercase eyebrow in pale blue sits above the headline.

**Mood:** cool, clean, dependable, focused, service-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c4a6e` | Page ground |
| Surface | `#f0f9ff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#0c4a6e` · `#0ea5e9` · `#1e293b` · `#bae6fd` · `#f0f9ff` · `#6b7280` · `#9ca3af` · `#f9fafb` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Outfit
- **Body:** Outfit
- **Loaded families:** Outfit
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_4px_24px_rgba(14,165,233,0.05)]`, `shadow-[0_4px_24px_rgba(14,165,233,0.10)]`, `shadow`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full bg-[#0c4a6e] hover:bg-[#0c4a6e]/90 text-white py-4 rounded-lg text-sm transition-colors mt-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c4a6e;
  --color-surface: #f0f9ff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
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
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#0ea5e9',
  },
  fontFamily: { display: ['Outfit'], sans: ['Outfit'] },
} }
```

## Do and don't

- **Do:** Use a deep teal (#0c4a6e) ground with a blurred photograph behind the headline
- **Do:** Use sky blue (#0ea5e9) for the primary button only
- **Do:** Set headlines in large white lines with a small uppercase eyebrow above
- **Don't:** Don't set pale blue text over the lighter parts of the photograph
- **Don't:** Don't fill the secondary button
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
