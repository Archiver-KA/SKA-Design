# Design system — Atlantic Multimarcas Automotive Landing Page Template

`SN-W03812` · business-services · dark mode · Sinera Atlas theme `route` · language `pt-BR`

## Direction

A dark automotive page on a near-black ground, with a large white sans-serif headline and lime yellow (#d4d414) reserved for the main call to action and the key figures. Stat tiles sit in a dark card on the right, each with a large number and a small grey label. The page reads as a direct sales front, with the lime as the only signal colour.

**Mood:** direct, dark, sales-led, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080805` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9a9a9a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4d414` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4d414` · `#9a9a9a` · `#080805` · `#2a2a2a` · `#000000` · `#121212`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.5rem]` (1.5rem), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-[1440px]`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center space-x-2 rounded-full bg-accent text-black px-3 md:px-4 py-2 text-xs md:text-sm font-medium hover:brightness-105 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal, Framer Motion, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080805;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-muted: #9a9a9a;
  --color-border: #ffffff;
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
    muted: '#9a9a9a',
    line: '#ffffff',
    accent: '#d4d414',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Use lime yellow (#d4d414) for the main call to action and key figures only.
- **Do:** Set headlines in Figtree in white at a large size with tight spacing.
- **Do:** Keep stat tiles on a dark surface, with a large number above a small grey label.
- **Don't:** Don't use the lime for body text on dark grounds.
- **Don't:** Don't add a second signal colour.
- **Don't:** Don't place the lime button on a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
