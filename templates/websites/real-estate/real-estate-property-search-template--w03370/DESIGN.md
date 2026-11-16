# Design system — Real Estate Property Search Template

`SN-W03370` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A functional listing page on near-white (#f8fafc) with a dark navy top bar (#0f172a) and a large dark headline above a faded building photograph. Filter controls sit in a single row of pill outlines under the hero, and an amber (#d97706) button is the one filled action in the hero. Result cards are white with thin borders, and a map panel sits beside them.

**Mood:** functional, clear, civic, practical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |
| Second accent | `#d97706` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#e2e8f0` · `#475569` · `#d97706` · `#f1f5f9` · `#334155` · `#f8fafc` · `#94a3b8` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 20px · body 16px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-inner`
- **Content width:** `max-w-[1400px]`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-xl text-base font-medium transition-colors w-full md:w-auto shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Feature grid (`features`)
5. Footer (`footer`)
6. Map / location (`map-location`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #d97706;
  --color-accent-2: #d97706;
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
    line: '#f1f5f9',
    accent: '#d97706',
    accent2: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use amber (#d97706) for the primary action in the hero only
- **Do:** Keep the navigation as a dark navy bar (#0f172a) with white labels
- **Do:** Set filter controls as a single row of pill outlines under the hero
- **Don't:** Don't use amber for links or badges across the results
- **Don't:** Don't put the dark navy behind body copy
- **Don't:** Don't stack more than one filled button in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
