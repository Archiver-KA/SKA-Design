# Design system — Cultural Presentation Landing Page Template

`SN-W03438` · education · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark slide-style presentation page on near-black [#080805], with a thin lime [#d4d414] accent reserved for the slide label and the navigation indicator. The large white sans headline is left-aligned, with a grey subtitle to the right and a thin divider above the footer bar. The layout reads as a presentation cover, with generous empty space.

**Mood:** cinematic, minimal, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080805` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#2a2a2a` | Hairlines, dividers, outlines |
| Accent | `#d4d414` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#080805` · `#d4d414` · `#2a2a2a` · `#121212` · `#888888` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-3`, `gap-8`

## Page structure

Blocks in page order:

1. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), Framer Motion, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080805;
  --color-surface: #121212;
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
    surface: '#121212',
    ink: '#ffffff',
    muted: '#888888',
    line: '#2a2a2a',
    accent: '#d4d414',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Use the lime (#d4d414) only for the slide label and small indicators
- **Do:** Set the title left-aligned in large white sans-serif
- **Do:** Keep the subtitle in grey on the right, with a thin divider above the footer
- **Don't:** Don't use lime for large headings or body text
- **Don't:** Don't centre the title; the layout is left-aligned
- **Don't:** Don't fill the slide with photographs or illustration

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
