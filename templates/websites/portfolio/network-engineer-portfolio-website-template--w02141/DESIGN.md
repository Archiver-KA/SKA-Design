# Design system — Network Engineer Portfolio Website Template

`SN-W02141` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, technical portfolio on near-black (#0a0a0a) with a white headline whose second line fades into a grey-blue gradient. Small monospace status labels and a sky-blue certification pill (#38bdf8) give it a terminal-like, data-centre tone, while the body copy is muted grey. Buttons are simple, a solid white primary and a dark outlined secondary, so the page reads as serious and understated.

**Mood:** technical, dark, serious, understated, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#38bdf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#cbd5e1` · `#64748b` · `#94a3b8` · `#005073` · `#0a0a0a` · `#38bdf8` · `#a855f7` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 20px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_#10B981]`, `shadow-2xl`, `shadow-[0_0_20px_rgba(0,80,115,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-white bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Case studies (`case-studies`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #cbd5e1;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #38bdf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#cbd5e1',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#38bdf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white, with the second line in a grey-blue fade rather than a solid colour.
- **Do:** Use sky blue (#38bdf8) for certification pills and small status labels only.
- **Do:** Pair a solid white primary button with a dark outlined secondary button.
- **Don't:** Don't use the teal #005073 as the page ground; the ground is near-black.
- **Don't:** Don't use the monospace status style for body text.
- **Don't:** Don't add bright gradients behind the hero text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
