# Design system — SORA AI UI Design Landing Page Template

`SN-W00725` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A minimal, tool-like hero: a white ground with a tight, centred Inter headline in near-black over a short grey subline. The centrepiece is a large rounded prompt box with a placeholder line and small chip buttons below it, so the input itself serves as the illustration. The header is a thin white bar with a neutral grey button. Greys carry the palette, with no strong accent.

**Mood:** minimal, neutral, tool-like, spare, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#4b5563` · `#d1d5db` · `#f9fafb` · `#6b7280` · `#374151` · `#171717` · `#9ca3af` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, &quot
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-[75%]`, `max-w-7xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Stats band (`stats`)
3. Pricing (`pricing`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #171717;
  --color-muted: #4b5563;
  --color-border: #e5e7eb;
  --color-accent: #34d399;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#171717',
    muted: '#4b5563',
    line: '#e5e7eb',
    accent: '#34d399',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline large, tight and centred in near-black Inter.
- **Do:** Build the central input as a large rounded box with chip buttons beneath it.
- **Do:** Keep the header a thin white bar with a neutral grey primary button.
- **Don't:** Don't add a bright accent; the page is greyscale.
- **Don't:** Don't use heavy shadows on the prompt box; the border defines it.
- **Don't:** Don't wrap the input in a dark frame.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
