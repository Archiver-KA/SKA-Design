# Design system — Scout Dental RCM Landing Page Template

`SN-W02520` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, near-black hero with a centred white sans headline whose second half fades to cool grey (#9ca3af). Indigo (#6366f1) is the header call to action, while the hero's primary button is white on the dark ground. A dashboard preview sits low in the hero as a dark panel, and the page reads as a software product.

**Mood:** dark, technical, modern, composed

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0c0e` | Page ground |
| Surface | `#15171b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#9ca3af` · `#6366f1` · `#10b981` · `#818cf8` · `#0b0c0e` · `#34d399` · `#15171b` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, bold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)]`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-2 rounded-md transition-all shadow-[0_0_15px_-3px_rgba(79,70,229,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Integrations (`integrations`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0c0e;
  --color-surface: #15171b;
  --color-text: #f5f5f5;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0c0e',
    surface: '#15171b',
    ink: '#f5f5f5',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white for the primary hero button and indigo (#6366f1) for the header call to action
- **Do:** Set headlines in white sans with the second half in grey (#9ca3af)
- **Do:** Show product previews as dark panels low in the hero
- **Don't:** Don't use the green (#10b981) accent.
- **Don't:** Don't use indigo as the hero background; the ground is near-black
- **Don't:** Don't put white buttons on light panels inside the dashboard preview

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
