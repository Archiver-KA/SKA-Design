# Design system — Handpick AI Job Agent Landing Page Template

`SN-W00433` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white, editorial-leaning product page with a tight sans headline that steps from black to grey on its second and third lines. Buttons are black and no accent colour is apparent, and a product card on the right shows a queue list, a selected role and a draft message in monospace labels. The restrained palette and the mono labels give it a utilitarian, workbench feel.

**Mood:** editorial, utilitarian, restrained, calm, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#09090b` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#1c1a17` | Hairlines, dividers, outlines |
| Accent | `#1c1a17` | Primary action and highlights |

Palette by frequency of use: `#52525b` · `#1c1a17` · `#a1a1aa` · `#71717a` · `#ffffff` · `#f4f4f5` · `#09090b` · `#e4e4e7` · `#8a8071` · `#6b6355`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight, Instrument Serif, IBM Plex Mono, Newsreader
- **Scale (largest breakpoint):** h1 48px · h2 16px · h3 14px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-[0.16em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]`, `shadow-[0_1px_2px_rgba(0,0,0,0.04),0_24px_48px_-32px_rgba(0,0,0,0.25)]`
- **Content width:** `max-w-[78rem]`, `max-w-[76rem]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="rounded-md bg-zinc-950 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-zinc-800">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Product grid (`product-grid`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #09090b;
  --color-muted: #52525b;
  --color-border: #1c1a17;
  --color-accent: #1c1a17;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#09090b',
    muted: '#52525b',
    line: '#1c1a17',
    accent: '#1c1a17',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Set the headline in tight Inter Tight, with the last lines in grey
- **Do:** Keep buttons black and add no accent colour
- **Do:** Show product state in small monospace labels inside a bordered panel
- **Don't:** Don't add a bright accent; the page runs on black, white and grey
- **Don't:** Don't set the headline in a single colour
- **Don't:** Don't drop the monospace labels; they carry the product's voice

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
