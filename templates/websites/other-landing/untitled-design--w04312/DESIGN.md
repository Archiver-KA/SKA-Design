# Design system — Untitled Design

`SN-W04312` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A bold dark fitness landing page on near-black with a centred, very large white headline in which the second line is set in red. The primary red button sits beside a dark outline button, and three large figures with small grey labels form a stats row beneath. Sans-serif type with tight line spacing gives the hero its weight and speed.

**Mood:** bold, energetic, dark, direct, athletic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#6b7280` · `#d1d5db` · `#9ca3af` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Framer Motion, React
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#eab308',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use red for the primary button and the second line of the hero headline
- **Do:** Set headlines very large in bold sans-serif with tight line spacing
- **Do:** Keep the stats row as three centred figures with small labels beneath
- **Don't:** Don't use a light background for the hero
- **Don't:** Don't add a second bright colour to buttons
- **Don't:** Don't pair the outline button with more than one solid button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
