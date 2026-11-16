# Design system — Industrial Electrical Services Landing Page Template

`SN-W03946` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A bold, high-contrast electrical contractor page that opens on a black hero with headlines in uppercase heavy sans-serif. Yellow (#facc15) fills the primary buttons, so the actions are the only saturated shapes on the screen. Body text is a clean sans-serif at moderate size, set with generous space around the hero copy.

**Mood:** bold, industrial, high-contrast, direct, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#4b5563` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6b7280` · `#9ca3af` · `#1f2937` · `#4b5563` · `#f3f4f6` · `#111827` · `#facc15` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Space Grotesk
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-brand-yellow text-brand-dark px-6 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors hidden md:flex items-center gap-2 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Services (`services`)
6. Logo cloud (`logo-cloud`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f9fafb;
  --color-text: #4b5563;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f9fafb',
    ink: '#4b5563',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase heavy sans-serif
- **Do:** Use yellow (#facc15) for primary buttons and the top call to action only
- **Do:** Keep the hero on black with white text and a bordered photograph
- **Don't:** Don't use yellow for body text or large areas
- **Don't:** Don't introduce a second accent colour beside the yellow
- **Don't:** Don't set headlines in mixed case; keep them uppercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
