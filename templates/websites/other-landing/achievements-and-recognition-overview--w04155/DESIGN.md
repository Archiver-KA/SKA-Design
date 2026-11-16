# Design system — Achievements and Recognition Overview

`SN-W04155` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark slate page on #0f172a with light text and one purple accent (#a855f7) used for the small section label, the icon badges and the highlighted stat. Content sits in outlined slate panels, and large figures carry the emphasis. The headline is large Inter in a light tone, set against the dark ground.

**Mood:** refined, dark, data-led, corporate

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#1e293b` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#a855f7` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#a855f7` · `#94a3b8` · `#334155` · `#cbd5e1` · `#ffffff` · `#e2e8f0` · `#1e293b` · `#0f172a` · `#f1f5f9` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 36px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text: #f1f5f9;
  --color-muted: #94a3b8;
  --color-border: #334155;
  --color-accent: #a855f7;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#1e293b',
    ink: '#f1f5f9',
    muted: '#94a3b8',
    line: '#334155',
    accent: '#a855f7',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use purple (#a855f7) only for the section label, icon badges and one highlighted figure.
- **Do:** Set panels in #1e293b with a #334155 border.
- **Do:** Keep the headline in Inter at about 36px in #f1f5f9.
- **Don't:** Don't add a second accent colour beside the purple.
- **Don't:** Don't use a light background for the panels.
- **Don't:** Don't set large figures in grey; keep them in the light text colour.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
