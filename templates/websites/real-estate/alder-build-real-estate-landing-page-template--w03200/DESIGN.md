# Design system — Alder Build Real Estate Landing Page Template

`SN-W03200` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `lv`

## Direction

A near-black Latvian property page with a heavy white grotesk headline set in two short lines, and small monospace labels for the city and coordinates. Orange (#ff6b35) appears only as a thin outline on the active nav item. The page relies on dark space and type, with a short grey paragraph set at the right.

**Mood:** dark, precise, architectural, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050609` | Page ground |
| Surface | `#080b0d` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#adadad` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6b35` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ff6b35` · `#050609` · `#adadad` · `#292929` · `#080b0d`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Mono
- **Body:** IBM Plex Mono
- **Loaded families:** IBM Plex Mono, Inter
- **Scale (largest breakpoint):** h2 60px · body 12px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-[0.13em]`, `tracking-[0.1em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_35px_rgba(255,107,53,.38)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2 border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#FF6B35] hover:text-[#050609] sm:text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050609;
  --color-surface: #080b0d;
  --color-text: #ffffff;
  --color-muted: #adadad;
  --color-border: #ffffff;
  --color-accent: #ff6b35;
  --font-display: "IBM Plex Mono", sans-serif;
  --font-body: "IBM Plex Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050609',
    surface: '#080b0d',
    ink: '#ffffff',
    muted: '#adadad',
    line: '#ffffff',
    accent: '#ff6b35',
  },
  fontFamily: { display: ['IBM Plex Mono'], sans: ['IBM Plex Mono'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white grotesk, in two short lines
- **Do:** Set city, coordinates and status labels in small monospace caps
- **Do:** Use orange (#ff6b35) only on the active nav state and rare highlights
- **Don't:** Don't use orange for large fills or backgrounds
- **Don't:** Don't set headlines in monospace; the mono is for labels only
- **Don't:** Don't add light panels to the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
