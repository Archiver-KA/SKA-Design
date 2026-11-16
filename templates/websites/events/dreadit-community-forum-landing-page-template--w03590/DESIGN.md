# Design system — Dreadit Community Forum Landing Page Template

`SN-W03590` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dreadit is a dark forum on near-black (#0a0a0c), with dark grey cards and a darker border. Red marks the signals: vote counts, flair and the infamy meter use red tones (#f87171 and #7f1d1d), while dark purple tags name the communities. The layout is dense, in three columns with small, tight type, and the overall feel is sharp and tense.

**Mood:** edgy, dark, dense, tense, aggressive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0c` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#450a0a` | Primary action and highlights |
| Second accent | `#3b0764` | Supporting highlights |

Palette by frequency of use: `#27272a` · `#71717a` · `#d4d4d8` · `#18181b` · `#f87171` · `#52525b` · `#7f1d1d` · `#450a0a` · `#a1a1aa` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 16px · h3 14px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-red-900/40`
- **Content width:** `max-w-7xl`
- **Common gaps:** `gap-1.5`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0c;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #450a0a;
  --color-accent-2: #3b0764;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0c',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#27272a',
    accent: '#450a0a',
    accent2: '#3b0764',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on near-black (#0a0a0c) with dark grey cards (#18181b)
- **Do:** Reserve red (#f87171) for votes, flair and the infamy meter
- **Do:** Use the dark purple tags only for community names
- **Don't:** Don't use red for body text or long passages
- **Don't:** Don't lighten the card surfaces toward grey; keep them near-black
- **Don't:** Don't add bright colours beyond the red and purple tags

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
