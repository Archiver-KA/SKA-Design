# Design system — VC Pitch Deck Carousel Template

`SN-W01061` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, square-format carousel slide built as a card on a black ground, with a bold white sans headline stacked in three lines and its final phrase in grey. A small orange-outlined eyebrow label and a faint orange glow in the top right are the only warm colour, so the slide reads as a sober fund document. The copy is short and set high on the card, leaving room below.

**Mood:** sober, editorial, dark, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#a1a1aa` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#27272a` · `#71717a` · `#18181b` · `#3f3f46` · `#f4f4f5` · `#52525b` · `#09090b` · `#e4e4e7` · `#a1a1aa` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 12px · h3 30px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-[540px]`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Testimonials (`testimonials`)
3. Feature grid (`features`)
4. Stats band (`stats`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #a1a1aa;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#a1a1aa',
    muted: '#71717a',
    line: '#27272a',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans, stacked, with the last phrase in grey
- **Do:** Use the orange (#f97316) for the eyebrow label and a single glow only
- **Do:** Keep the card on #09090b with a #27272a border and a generous inner margin
- **Don't:** Don't set headlines in orange; it marks labels only
- **Don't:** Don't add more than one glow to a slide
- **Don't:** Don't set the supporting lines in white; they stay muted grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
