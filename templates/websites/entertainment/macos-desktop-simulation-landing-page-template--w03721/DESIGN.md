# Design system — MacOS Desktop Simulation Landing Page Template

`SN-W03721` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A full-bleed desktop wallpaper that moves from blue to violet, with a dark menu bar across the top and a column of rounded app tiles down the left edge. Each tile is a flat, saturated square in its own hue with a white label beneath, and a translucent dock sits centred at the bottom. The page is built to look like a real operating system, so colour comes from the wallpaper and the tiles rather than from the page chrome.

**Mood:** playful, familiar, glossy, colourful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#2563eb` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#4b5563` · `#e5e7eb` · `#374151` · `#d1d5db` · `#1f2937` · `#f3f4f6` · `#2563eb` · `#6b7280` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Product Sans
- **Body:** Product Sans
- **Loaded families:** Product Sans
- **Scale (largest breakpoint):** h1 36px · h2 24px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-3xl`, `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-6`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium">…</a>
```

## Page structure

Blocks in page order:

1. App download (`app-download`)
2. Navigation bar (`navbar`)
3. Call to action (`cta`)
4. Hero (`hero`)
5. 3D / canvas scene (`3d-canvas`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Feature grid (`features`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Font Awesome

## Tokens

```css
:root {
  --color-background: #2563eb;
  --color-surface: #f3f4f6;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #2563eb;
  --color-accent-2: #ef4444;
  --font-display: "Product Sans", sans-serif;
  --font-body: "Product Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#2563eb',
    surface: '#f3f4f6',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#2563eb',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Product Sans'], sans: ['Product Sans'] },
} }
```

## Do and don't

- **Do:** Use a blue-to-violet gradient for the full-bleed backdrop
- **Do:** Give app tiles flat, saturated fills with white labels beneath
- **Do:** Keep the menu bar dark and thin across the top
- **Don't:** Don't add shadows or textures to the desktop wallpaper
- **Don't:** Don't use a light menu bar
- **Don't:** Don't mix in icon styles beyond the flat tiles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
