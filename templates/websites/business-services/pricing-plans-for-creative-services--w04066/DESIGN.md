# Design system — Pricing Plans for Creative Services

`SN-W04066` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A three-tier pricing section on white, with the headline split into a red serif first line and a large black serif second line. The middle plan is inverted to black with white type, and a red badge marks it as the most popular choice. Red (#ef4444) is the only accent, used for the headline lead-in and the badge, so the recommended plan stands out without extra decoration.

**Mood:** clear, structured, confident, minimal, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |

Palette by frequency of use: `#ef4444` · `#000000` · `#ffffff` · `#737373` · `#e5e5e5` · `#525252` · `#a3a3a3` · `#dc2626` · `#d4d4d4` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono, Instrument Serif
- **Scale (largest breakpoint):** h1 60px · h2 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="w-full rounded-full bg-red-500 text-white px-6 py-3 text-sm font-semibold hover:bg-red-600 transition-all duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #000000;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #ef4444;
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
    surface: '#f5f5f5',
    ink: '#000000',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the section headline in a serif, with the opening words in red (#ef4444)
- **Do:** Invert the recommended plan to a dark card with a red badge
- **Do:** Keep the other plans white with light grey borders
- **Don't:** Don't use red for prices or body text
- **Don't:** Don't add a second highlight colour to the plan cards
- **Don't:** Don't set plan names in the serif; only the section headline takes it

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
