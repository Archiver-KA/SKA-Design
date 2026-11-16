# Design system — livedesk-list-1

`SN-W00499` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black, launcher-style screen in the iOS manner: a grid of small rounded icon tiles with short white Inter labels, a clock and a page indicator at the bottom. The surface is almost empty black, so the icons and their labels carry the look, and the only chrome is a thin top bar. The result feels like a home screen for productivity tools rather than a marketing page.

**Mood:** minimal, launcher-like, dark, orderly, utilitarian

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#facc15` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1f2937` · `#000000` · `#6b7280` · `#374151` · `#111827` · `#9ca3af` · `#6366f1` · `#4b5563` · `#111111`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 20px · h2 14px · h3 14px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm'`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 bg-white text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Gallery / portfolio (`gallery-portfolio`)
3. Call to action (`cta`)
4. Video / media (`video-media`)
5. Contact form (`contact-form`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Alpine.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #1f2937;
  --color-accent: #6366f1;
  --color-accent-2: #facc15;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#1f2937',
    accent: '#6366f1',
    accent2: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Lay out app tiles in an even grid with small rounded icons and short labels.
- **Do:** Keep labels in white Inter at small size under each icon.
- **Do:** Keep the background pure black (#000000) and let the tiles stand out.
- **Don't:** Don't add hero copy or large imagery above the grid.
- **Don't:** Don't use bright colour on the chrome; the top bar stays neutral.
- **Don't:** Don't crowd the grid beyond the row width at phone size.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
