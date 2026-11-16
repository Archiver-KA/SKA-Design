# Design system — Portfolio Showcase and Services

`SN-W02173` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Confident dark product page: a deep navy ground (#111827) with white Inter headings, a blue (#60a5fa) primary button and a slightly lighter navy card surface (#1f2937). The hero headline is large and plain, and the blue is kept to the call to action and a few link states. Rounded bento-style panels hold the work, so the page reads as a tidy grid of projects.

**Mood:** confident, dark, structured, clean, tech

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#60a5fa` · `#1f2937` · `#9ca3af` · `#3b82f6` · `#374151` · `#d1d5db` · `#2563eb` · `#1d4ed8` · `#ffffff` · `#111827`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-8`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #e5e7eb;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --color-accent: #60a5fa;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#e5e7eb',
    muted: '#9ca3af',
    line: '#374151',
    accent: '#60a5fa',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#60a5fa) for the primary button and active states only
- **Do:** Set cards on the lighter navy surface (#1f2937) with rounded-lg corners
- **Do:** Keep headings in white Inter at large size
- **Don't:** Don't use green (#22c55e) except as a secondary status colour
- **Don't:** Don't set body copy in blue on the navy ground
- **Don't:** Don't add gradients to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
