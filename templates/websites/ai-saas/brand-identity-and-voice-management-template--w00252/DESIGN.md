# Design system — Brand Identity and Voice Management Template

`SN-W00252` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light admin dashboard: a pale slate page (#f8fafc) with white cards, thin borders and dark slate text (#0f172a). The one accent is a saturated violet (#7c3aed) on the primary Create profile button and the active tab, while the rest of the chrome stays neutral. Inter at small sizes carries the information, and cards are separated by borders and whitespace rather than shadow.

**Mood:** functional, neutral, tidy, violet-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#e2e8f0` | Hairlines, dividers, outlines |
| Accent | `#7c3aed` | Primary action and highlights |
| Second accent | `#7c3aed` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#f8fafc` · `#ede9fe` · `#475569` · `#334155` · `#c4b5fd` · `#7c3aed` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 20px · h2 16px · h3 16px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Logo cloud (`logo-cloud`)
3. Contact form (`contact-form`)
4. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #e2e8f0;
  --color-accent: #7c3aed;
  --color-accent-2: #7c3aed;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#e2e8f0',
    accent: '#7c3aed',
    accent2: '#7c3aed',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use #7c3aed only for the primary button and the active tab
- **Do:** Keep card borders thin and neutral (#e2e8f0) on the #f8fafc page ground
- **Do:** Set labels small in Inter and keep form fields full width within their card
- **Don't:** Don't add shadows to cards; separation is by border
- **Don't:** Don't use violet for tags or badges, which stay neutral grey
- **Don't:** Don't give the page display-size headlines; it works at 20px titles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
