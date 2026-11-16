# Design system — Release History Timeline and Features

`SN-W04271` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark slate changelog page with a large bold white heading on navy and a single bordered panel that holds the release history. Versions sit in a vertical timeline with small dots, dates are in muted grey, and a green pill marks the current release. Inter is used throughout, so hierarchy comes from weight and size rather than colour.

**Mood:** technical, quiet, dark, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f172a` | Page ground |
| Surface | `#475569` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#334155` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#e2e8f0` · `#94a3b8` · `#64748b` · `#f1f5f9` · `#475569` · `#667eea` · `#cbd5e1` · `#334155` · `#0f172a` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono
- **Scale (largest breakpoint):** h1 48px · h2 20px · h3 20px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f172a;
  --color-surface: #475569;
  --color-text: #f1f5f9;
  --color-muted: #94a3b8;
  --color-border: #334155;
  --color-accent: #e2e8f0;
  --color-accent-2: #9333ea;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f172a',
    surface: '#475569',
    ink: '#f1f5f9',
    muted: '#94a3b8',
    line: '#334155',
    accent: '#e2e8f0',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page heading in bold Inter in near-white on the navy ground
- **Do:** Keep release entries inside one bordered panel with the timeline rail on its left
- **Do:** Mark the current version with a small green pill beside the panel title
- **Don't:** Don't add colour to the headings; hierarchy comes from size and weight
- **Don't:** Don't split the release entries into separate cards
- **Don't:** Don't use a serif face for the release copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
