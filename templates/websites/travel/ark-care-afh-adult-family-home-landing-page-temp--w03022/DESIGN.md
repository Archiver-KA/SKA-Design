# Design system — Ark Care AFH Adult Family Home Landing Page Template

`SN-W03022` · travel · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A pale mint-grey page (#f2f7f5) carries dark green text (#0f2a26), with teal (#0f766e) for emphasis. Amber (#f4b860) is the warm accent, and Be Vietnam Pro sets both headings and body text with fully rounded controls.

**Mood:** calm, warm, soft, reassuring

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f2f7f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f2a26` | Headings and primary copy |
| Muted text | `#4e6661` | Secondary copy, captions |
| Border | `#d3e2dd` | Hairlines, dividers, outlines |
| Accent | `#f4b860` | Primary action and highlights |
| Second accent | `#0f766e` | Supporting highlights |

Palette by frequency of use: `#d3e2dd` · `#4e6661` · `#0f2a26` · `#ffffff` · `#f2f7f5` · `#0f766e` · `#f4b860` · `#cfe0db` · `#0b5f58` · `#2e6b64`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Be Vietnam Pro
- **Body:** Be Vietnam Pro
- **Loaded families:** Be Vietnam Pro
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, bold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-14`, `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="mt-8 inline-flex items-center justify-center min-h-[48px] px-7 rounded-full bg-white text-ink font-semibold hover:bg-accent2 transition-colors">…</a>
```

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f2f7f5;
  --color-surface: #ffffff;
  --color-text: #0f2a26;
  --color-muted: #4e6661;
  --color-border: #d3e2dd;
  --color-accent: #f4b860;
  --color-accent-2: #0f766e;
  --font-display: "Be Vietnam Pro", sans-serif;
  --font-body: "Be Vietnam Pro", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f2f7f5',
    surface: '#ffffff',
    ink: '#0f2a26',
    muted: '#4e6661',
    line: '#d3e2dd',
    accent: '#f4b860',
    accent2: '#0f766e',
  },
  fontFamily: { display: ['Be Vietnam Pro'], sans: ['Be Vietnam Pro'] },
} }
```

## Do and don't

- **Do:** Set headings and body text in Be Vietnam Pro
- **Do:** Use the teal (#0f766e) for emphasis and amber (#f4b860) sparingly as the warm accent
- **Do:** Keep controls fully rounded
- **Don't:** Don't use cold blues or blue-greys; the palette is mint, green and amber
- **Don't:** Don't set body text in pale green; use the dark green (#0f2a26)
- **Don't:** Don't use amber for large fills; it is an accent

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
