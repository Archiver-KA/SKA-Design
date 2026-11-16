# Design system — Arcade Game Landing Page Template

`SN-W03669` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark arcade interface with a centred title and a minimal set of controls, all on a near-black field. White is the primary button colour, a dark outline button sits beside it, and a muted red marks the play action. The score sits in the top corner in small uppercase, so the play area stays uncluttered.

**Mood:** minimal, arcade, dark, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#09090b` · `#facc15` · `#d4d4d8` · `#ef4444` · `#e879f9` · `#27272a` · `#18181b` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 30px · h2 18px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[95%]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="bg-white text-zinc-950 rounded-xl px-4 py-2 text-xs font-semibold flex items-center gap-1.5 hover:bg-zinc-200 transition-all ml-1 shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)
4. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #27272a;
  --color-text: #fafafa;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#27272a',
    ink: '#fafafa',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use white for the primary Play button and the title
- **Do:** Set the score and labels small and uppercase in the top corner
- **Do:** Keep the red (#ef4444) to the one play action per screen
- **Don't:** Don't add decorative panels around the game field
- **Don't:** Don't use yellow for text on the dark background
- **Don't:** Don't give secondary actions a solid colour fill

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
