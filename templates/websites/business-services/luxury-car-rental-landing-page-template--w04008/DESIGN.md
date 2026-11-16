# Design system — Luxury Car Rental Landing Page Template

`SN-W04008` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A minimal, almost black car-rental hero with a large white sans-serif headline set left and stacked over two lines. A small olive-yellow label (#d4d414) and a short rule introduce the page, and the navigation is reduced to a search pill and a menu button. Generous empty space around the type gives the page a calm, editorial pace.

**Mood:** minimal, calm, editorial, dark, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080805` | Page ground |
| Surface | `#2a2a2a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#d4d414` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4d414` · `#2a2a2a` · `#080805` · `#888888` · `#121212` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1.5`, `gap-6`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Framer Motion, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080805;
  --color-surface: #2a2a2a;
  --color-text: #ffffff;
  --color-muted: #888888;
  --color-border: #2a2a2a;
  --color-accent: #d4d414;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080805',
    surface: '#2a2a2a',
    ink: '#ffffff',
    muted: '#888888',
    line: '#2a2a2a',
    accent: '#d4d414',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Use yellow (#d4d414) only for the eyebrow label and the rule above the headline
- **Do:** Set headlines in white sans-serif, left aligned, stacked on two lines
- **Do:** Keep the navigation to a minimal bar with a search pill and a menu button
- **Don't:** Don't fill the hero with a light background
- **Don't:** Don't use yellow for large headlines
- **Don't:** Don't add many links to the top bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
