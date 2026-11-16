# Design system — SEO Action Plan & Roadmap Template

`SN-W01690` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A clean white page with heavy navy headlines set in sans, and a small rounded pill above the headline as a label. Blue buttons sit beside outlined secondary buttons, and the copy is restrained, with a single short price line under the call to action. The look is plain and sales-led, with colour used only for headings and buttons.

**Mood:** plain, sales-led, clear, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#cbd5e1` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#1e3a8a` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#475569` · `#e2e8f0` · `#94a3b8` · `#cbd5e1` · `#1e3a8a` · `#334155` · `#2563eb` · `#172554`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="text-white text-sm font-medium px-4 py-2 rounded-md transition-colors bg-blue-600 hover:bg-blue-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Testimonials (`testimonials`)
5. Process / steps (`how-it-works`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #cbd5e1;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #1e3a8a;
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
    surface: '#cbd5e1',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#1e3a8a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headings in heavy sans in navy (#1e3a8a) on white.
- **Do:** Put one solid primary button per section beside an outlined secondary button.
- **Do:** Keep a small rounded pill above the headline for the label.
- **Don't:** Don't introduce tinted blue section grounds; the page is white.
- **Don't:** Don't add a second heading colour.
- **Don't:** Don't use gradients; the page is flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
