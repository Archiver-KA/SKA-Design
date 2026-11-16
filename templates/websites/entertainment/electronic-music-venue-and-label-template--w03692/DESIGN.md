# Design system — Electronic Music Venue & Label Template

`SN-W03692` · entertainment · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A white-ground page where a very large heavy headline in saturated blue-violet (#4a4dff) fills the first screen, set in uppercase with tight leading. Small monospace captions in the same blue add a technical layer above and below it. The layout is typographic and bold, with a faint pink wash at the left edge.

**Mood:** bold, technical, loud, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#1a232b` | Cards, panels, raised areas |
| Text | `#ecebe7` | Headings and primary copy |
| Border | `#ecebe7` | Hairlines, dividers, outlines |
| Accent | `#4a4dff` | Primary action and highlights |
| Second accent | `#4a4dff` | Supporting highlights |

Palette by frequency of use: `#ecebe7` · `#0f1117` · `#0ed35a` · `#4a4dff` · `#ff3b1f` · `#ffffff` · `#1a232b` · `#30343a` · `#f5b324` · `#e2c6e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk, Space Mono
- **Scale (largest breakpoint):** h1 72px · h2 72px · h3 20px · body 12px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-[0.16em]`, `tracking-[0.12em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-none`
- **Content width:** `max-w-[96rem]`, `max-w-4xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="border-2 border-[#4A4DFF] bg-[#4A4DFF] px-3 py-2 font-mono text-xs tracking-[0.12em] text-white transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. About (`about`)
4. Schedule (`schedule-agenda`)
5. Pricing (`pricing`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #1a232b;
  --color-text: #ecebe7;
  --color-border: #ecebe7;
  --color-accent: #4a4dff;
  --color-accent-2: #4a4dff;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#1a232b',
    ink: '#ecebe7',
    line: '#ecebe7',
    accent: '#4a4dff',
    accent2: '#4a4dff',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans-serif in the blue-violet (#4a4dff) at very large size
- **Do:** Use small uppercase monospace captions for labels above and below headlines
- **Do:** Keep the ground white and let the blue carry the page
- **Don't:** Don't set body text in the blue; keep it dark
- **Don't:** Don't add dark panels to the hero; the design starts light
- **Don't:** Don't mix more than one display face on one screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
