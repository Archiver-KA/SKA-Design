# Design system — IT Consulting & Infrastructure Landing Page Template

`SN-W01609` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A quiet, light business page on pale grey (#f9fafb). A dark slate (#0f172a) headline set in Inter sits centred above short grey supporting text. Amber (#f59e0b) is reserved for small label icons and eyebrow text, while a deep blue (#1e40af) panel forms the strong block beside the service cards. The cards are white with soft edges, so the page reads as a tidy corporate brochure.

**Mood:** corporate, clean, calm, trustworthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#1e40af` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#0f172a` · `#d97706` · `#e2e8f0` · `#64748b` · `#475569` · `#f8fafc` · `#f1f5f9` · `#fef3c7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 30px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-0`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-amber-500 hover:bg-amber-600 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Team (`team`)
4. Integrations (`integrations`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #1e40af;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#1e40af',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the dark slate (#0f172a) for headlines and the grey (#64748b) for supporting text
- **Do:** Use amber (#f59e0b) only for eyebrow labels and their icons
- **Do:** Keep the blue (#1e40af) for one solid panel per section
- **Don't:** Don't set amber text in paragraphs; it is for labels only
- **Don't:** Don't add heavy shadows to the service cards
- **Don't:** Don't use the blue as a page background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
