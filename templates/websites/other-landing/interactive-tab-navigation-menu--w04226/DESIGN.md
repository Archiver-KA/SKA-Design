# Design system — Interactive Tab Navigation Menu

`SN-W04226` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A minimal dark tab component on a navy-black ground (#020617), with the active tab in blue (#3b82f6) and a thin underline that marks it. Labels are small and sans-serif, with inactive tabs in slate grey (#94a3b8), and the content panel sits in a slightly lighter navy (#0f172a) with a thin border. The look is quiet and utilitarian, with the blue used only for the active state.

**Mood:** minimal, utilitarian, quiet, navy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Accent | `#3b82f6` | Primary action and highlights |

Palette by frequency of use: `#94a3b8` · `#1e293b` · `#0f172a` · `#3b82f6` · `#020617` · `#ffffff` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 20px
- **Weights in use:** medium, semibold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-accent: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#ffffff',
    muted: '#94a3b8',
    accent: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the active tab label and underline in blue (#3b82f6)
- **Do:** Keep inactive tabs in slate (#94a3b8) on the navy ground
- **Do:** Keep content panels at #0f172a with a thin border and rounded-lg corners
- **Don't:** Don't fill the active tab with blue; the indicator is an underline
- **Don't:** Don't add shadows to the content panel
- **Don't:** Don't add more accent colours to the tabs

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
