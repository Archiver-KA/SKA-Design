# Design system — Workspace Features Showcase

`SN-W04342` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light workspace features page on pale grey, with a large dark heading centred over a muted subtitle. Feature cards sit in two large columns with rounded-2xl corners, each with a grey image area and a dark gradient band at the base holding a small icon, a white title and a short line. The dark export button at the top right is the only solid action on the page.

**Mood:** modern, calm, product-led, restrained, tidy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#1f2937` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#111827` · `#1f2937` · `#f9fafb` · `#4b5563` · `#581c87` · `#1e3a8a` · `#064e3b` · `#7c2d12`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="fixed z-50 top-6 right-6 flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2.5 text-sm font-medium shadow-lg hover:bg-gray-800 hover:shadow-xl active:scale-95 transition-all duration-200 border border-gray-800">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Bento grid (`bento-grid`)
3. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #1f2937;
  --color-accent: #111827;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#1f2937',
    accent: '#111827',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-black (#111827) for headings and the single solid button
- **Do:** Place each feature title in a dark gradient band at the base of its card
- **Do:** Keep feature cards as large rounded-2xl panels in a two-column grid
- **Don't:** Don't add colour to the feature cards
- **Don't:** Don't place a second solid button beside the export action
- **Don't:** Don't put body text directly on the bright part of the card images

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
