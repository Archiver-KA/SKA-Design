# Design system — NEW SITE

`SN-W00564` · ai-saas · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A light, industrial hero on a pale ground (#fafafa) with a heavy black headline set across two lines and a grey subline. The primary action is a solid black button, with a white outline button beside it, and a black Contact Us button anchors the nav. A small blue dot marks the certification tag. The page is monochrome, so black and white carry the structure.

**Mood:** precise, clean, industrial, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#111827` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#6b7280` · `#000000` · `#ffffff` · `#e5e7eb` · `#9ca3af` · `#d1d5db` · `#1f2937` · `#4b5563` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 16px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]`, `shadow-sm`, `shadow-[0_0_0_4px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="h-8 px-3 rounded-md bg-black text-white text-xs font-medium flex items-center justify-center hover:bg-gray-800 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #111827;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#111827',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use solid black (#111827) for primary buttons and the nav action
- **Do:** Set headlines in heavy near-black Inter, centred, over two lines
- **Do:** Keep the blue dot to the certification tag as the only blue on the page
- **Don't:** Don't add colour to the buttons; black and white are the system
- **Don't:** Don't use grey for the headline; it stays near-black
- **Don't:** Don't use a dark background for the hero; it stays light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
