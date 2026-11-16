# Design system — Online Business M&A Landing Page Template

`SN-W04033` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A calm, light page on a white ground with a faint lavender wash. The headline is dark serif with its second line set in italic blue (#3b82f6), which creates contrast without colour fills. Buttons are a dark navy pill and an outline pill, and small grey capitals beneath them list the reassurances.

**Mood:** calm, precise, reassuring, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#111827` · `#f3f4f6` · `#6b7280` · `#0f172a` · `#e5e7eb` · `#f9fafb` · `#f8fafc` · `#4b5563`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full bg-[#3B82F6] hover:bg-blue-500 text-white font-medium py-3 rounded mt-4 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Contact form (`contact-form`)
6. Call to action (`cta`)
7. Process / steps (`how-it-works`)
8. Articles (`blog-articles`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #111827;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #f3f4f6;
  --color-accent: #3b82f6;
  --color-accent-2: #f59e0b;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#111827',
    ink: '#111827',
    muted: '#6b7280',
    line: '#f3f4f6',
    accent: '#3b82f6',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in blue (#3b82f6) italic serif
- **Do:** Make the primary button dark ink (#111827) and the secondary an outline
- **Do:** Put reassurance phrases in small grey capitals under the buttons
- **Don't:** Don't use blue for body text
- **Don't:** Don't introduce dark sections; the page stays light
- **Don't:** Don't show more than two buttons in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
