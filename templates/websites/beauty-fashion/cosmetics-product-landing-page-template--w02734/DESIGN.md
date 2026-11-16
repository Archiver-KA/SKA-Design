# Design system — Cosmetics Product Landing Page Template

`SN-W02734` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `de`

## Direction

Clean white product landing page with a very large bold sans headline, centred, split into a black first line and a muted grey second line. The primary action is a solid black pill with a text link beside it, and the yellow (#eab308) appears only as a tiny badge above the headline. The look is minimal and clinical, and the product name carries the weight.

**Mood:** minimal, bold, clinical, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#6b7280` · `#ffffff` · `#9ca3af` · `#1f2937` · `#000000` · `#e5e7eb` · `#f9fafb` · `#f3f4f6` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-5`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="bg-gray-900 hover:bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full transition-all transform hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold Inter at display size, with the second line in muted grey
- **Do:** Use black filled pills for the primary action and text links for secondary actions
- **Do:** Keep the yellow (#eab308) to a small badge label above the headline
- **Don't:** Don't use yellow for buttons; it is limited to the badge
- **Don't:** Don't add decorative imagery to the hero; the hero relies on type alone
- **Don't:** Don't set the subline in a heavier weight; the grey tone is the contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
