# Design system — Rockwell Fitness Gym Landing Page Template

`SN-W02672` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark gym hero on #0f172a with a full-width dimmed photograph of equipment. The headline is heavy white sans-serif, and its second line is a gradient from light blue to lime (#a3e635), which is the page's signature. Blue (#2563eb) fills the primary buttons and lime marks the secondary free-class button.

**Mood:** energetic, fresh, dark, modern, bright-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#a3e635` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#2563eb` · `#94a3b8` · `#f8fafc` · `#e2e8f0` · `#334155` · `#f1f5f9` · `#cbd5e1` · `#dbeafe`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2.5 text-sm font-medium bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Bento grid (`bento-grid`)
5. Services (`services`)
6. Listings (`listings`)
7. Schedule (`schedule-agenda`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #f8fafc;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #a3e635;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#f8fafc',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#a3e635',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line with a blue-to-lime gradient on a dark ground.
- **Do:** Use #2563eb for primary buttons and #a3e635 for one secondary button.
- **Do:** Dim the hero photograph with a dark overlay before placing text on it.
- **Don't:** Don't use the light grey (#f8fafc) as the page ground for the hero.
- **Don't:** Don't use the lime for body text.
- **Don't:** Don't use the blue for body copy on dark.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
