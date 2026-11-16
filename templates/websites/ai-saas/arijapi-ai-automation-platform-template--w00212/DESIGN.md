# Design system — ArijAPI AI Automation Platform Template

`SN-W00212` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bright, light hero with a blue gradient wash at the top and a dark navy headline whose second line is set in blue. The page is clear and conventional, with a white navigation bar, a blue primary button and an outlined secondary, and a chat-style card below for product detail. Blue (#2563eb) does the work of linking the headline, buttons and product UI.

**Mood:** bright, clear, conventional, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#d1fae5` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#64748b` · `#e2e8f0` · `#f1f5f9` · `#94a3b8` · `#2563eb` · `#f8fafc` · `#475569` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 36px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_8px_rgba(37,99,235,0.8)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Unicorn Studio (WebGL scenes), React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #d1fae5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#d1fae5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in blue (#2563eb) and the first in dark navy
- **Do:** Use blue for the primary button and the live status indicators
- **Do:** Keep the top gradient wash pale and limited to the top of the page
- **Don't:** Don't use a second saturated colour in the hero
- **Don't:** Don't set the headline in a light weight
- **Don't:** Don't use the pale slate tones as text colour on white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
