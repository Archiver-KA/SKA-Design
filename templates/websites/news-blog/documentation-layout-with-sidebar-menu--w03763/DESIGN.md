# Design system — Documentation Layout with Sidebar Menu

`SN-W03763` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark documentation layout with a left sidebar of section links and a centred reading column. Violet [#6e56cf] marks numbered steps, the active sidebar link and the primary button, while commands sit in dark panels in monospace. Thin-bordered cards on a near-black ground keep the reading area calm and structured.

**Mood:** technical, clear, calm, structured, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f0f0f` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#e5e7eb` | Headings and primary copy |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#6e56cf` | Primary action and highlights |

Palette by frequency of use: `#6e56cf` · `#1a1a1a` · `#ffffff` · `#c4b5fd` · `#9ca3af` · `#2a2a2a` · `#9e8cfc` · `#19181d` · `#161616` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 20px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_2px_10px_rgba(0,0,0,0.13)]`, `shadow-[0_2px_10px_rgba(0,0,0,0.15)]`
- **Content width:** `max-w-[1200px]`, `max-w-3xl`
- **Common gaps:** `gap-6`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center px-5 py-2 rounded-lg bg-[#6E56CF] text-white font-semibold hover:bg-[#7C5FFF] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #0f0f0f;
  --color-surface: #1a1a1a;
  --color-text: #e5e7eb;
  --color-border: #2a2a2a;
  --color-accent: #6e56cf;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f0f0f',
    surface: '#1a1a1a',
    ink: '#e5e7eb',
    line: '#2a2a2a',
    accent: '#6e56cf',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use violet (#6e56cf) for numbered steps, the active sidebar link and the primary button
- **Do:** Set code and commands in monospace on dark panels with thin borders
- **Do:** Lay out quick-start actions as two step cards side by side
- **Don't:** Don't use violet for body text or headings
- **Don't:** Don't set code in a proportional typeface
- **Don't:** Don't fill the reading column with coloured backgrounds

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
