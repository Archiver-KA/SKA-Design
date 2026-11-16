# Design system — VR Plan Pricing Options

`SN-W04335` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark pricing section on slate, with a bold heading in which the word VR is set in green [#4ade80]. Three plan cards sit side by side, and the middle Pro plan is outlined in a glowing green border with a small Most Popular badge. Each plan ends in a solid green button, and green is the only colour, reserved for the featured plan and the actions.

**Mood:** futuristic, dark, energetic, focused, glowing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#d1d5db` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#4ade80` | Primary action and highlights |

Palette by frequency of use: `#4ade80` · `#1f2937` · `#22c55e` · `#000000` · `#f8fafc` · `#d1d5db` · `#86efac` · `#16a34a` · `#374151` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Mono, IBM Plex Serif
- **Scale (largest breakpoint):** h2 48px · body 18px
- **Weights in use:** bold, extrabold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-3xl` (24px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-8`

**Primary button**

```html
<a class="btn-glow bg-green-400 hover:bg-green-300 text-black font-bold px-8 py-3 rounded-lg text-lg transition-shadow duration-300 w-full">…</a>
```

## Page structure

Blocks in page order:

1. Pricing (`pricing`)

## Motion, effects and stack

- **Effects:** gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #1f2937;
  --color-text: #f8fafc;
  --color-muted: #d1d5db;
  --color-border: #374151;
  --color-accent: #4ade80;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 24px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#1f2937',
    ink: '#f8fafc',
    muted: '#d1d5db',
    line: '#374151',
    accent: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the green (#4ade80) for the featured plan outline, badge and buttons
- **Do:** Set the heading in bold white with one green word
- **Do:** Show unavailable features with a muted cross rather than removing them
- **Don't:** Don't add green to the non-featured plan cards
- **Don't:** Don't use a light background for the pricing grid
- **Don't:** Don't put more than one badge in a row of plans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
