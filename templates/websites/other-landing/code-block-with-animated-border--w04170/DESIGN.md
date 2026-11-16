# Design system — Code Block with Animated Border

`SN-W04170` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A single code block in IBM Plex Mono on a deep navy ground (#111827), set in a rounded dark panel with a cyan glow along its lower edge. Cyan (#1fcdfc) marks the copy button and keywords, and amber (#f7b731) is used for strings and tags. The heading is small and plain, so the code panel carries the design.

**Mood:** technical, precise, dark, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e0e0e0` | Secondary copy, captions |
| Accent | `#1fcdfc` | Primary action and highlights |
| Second accent | `#f7b731` | Supporting highlights |

Palette by frequency of use: `#1fcdfc` · `#f7b731` · `#ffd60a` · `#ffffff` · `#111827` · `#d1d5db` · `#181925` · `#00b7e9` · `#dbeafe` · `#e0e0e0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Mono
- **Body:** IBM Plex Mono
- **Loaded families:** IBM Plex Mono, Inter, IBM Plex Serif, Satoshi
- **Scale (largest breakpoint):** h2 24px
- **Weights in use:** bold, semibold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]`
- **Content width:** `max-w-2xl`
- **Section padding:** `py-12`

**Primary button**

```html
<a class="px-3 py-1.5 rounded-full text-xs font-medium bg-[#1fcdfc] text-[#181925] hover:bg-[#00b7e9] transition">…</a>
```

## Page structure

Blocks in page order:

1. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111827;
  --color-text: #ffffff;
  --color-muted: #e0e0e0;
  --color-accent: #1fcdfc;
  --color-accent-2: #f7b731;
  --font-display: "IBM Plex Mono", sans-serif;
  --font-body: "IBM Plex Mono", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    ink: '#ffffff',
    muted: '#e0e0e0',
    accent: '#1fcdfc',
    accent2: '#f7b731',
  },
  fontFamily: { display: ['IBM Plex Mono'], sans: ['IBM Plex Mono'] },
} }
```

## Do and don't

- **Do:** Use cyan (#1fcdfc) for the copy button and keywords only.
- **Do:** Set code in IBM Plex Mono at its existing size.
- **Do:** Keep the panel rounded, with the glow along its lower edge.
- **Don't:** Don't add a light background to the code area.
- **Don't:** Don't use amber for anything except syntax highlights.
- **Don't:** Don't make the heading larger than the code panel's label.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
