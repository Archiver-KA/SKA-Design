# Design system — DAMM fact sheet

`SN-W00912` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark fund fact sheet on near-black [#0a0a0a], with lime [#bfff00] kept for the fund ticker, section labels and the header rule. The layout is two columns: a numbered navigation list on the left and key-value rows in a bordered panel on the right. Values are monospaced and labels sit in muted grey, so the figures scan like a ledger.

**Mood:** precise, ledger-like, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#bfff00` | Primary action and highlights |
| Second accent | `#ff6b6b` | Supporting highlights |

Palette by frequency of use: `#bfff00` · `#262626` · `#ffffff` · `#737373` · `#0a0a0a` · `#d4d4d4` · `#a3a3a3` · `#121212` · `#525252` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Geist Mono, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 16px · h3 14px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1440px]`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="nav-item group flex items-center gap-3 px-4 py-3 rounded-lg text-base border-l-[3px] border-transparent text-neutral-500 hover:bg-white/5 hover:text-neutral-300">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Comparison (`comparison`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #121212;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #bfff00;
  --color-accent-2: #ff6b6b;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#121212',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#262626',
    accent: '#bfff00',
    accent2: '#ff6b6b',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use lime (#bfff00) only for the fund ticker, section labels and the header rule
- **Do:** Set key-value rows as label on the left and monospaced value on the right
- **Do:** Keep the left navigation as a numbered list with an icon per item
- **Don't:** Don't use lime for body paragraphs or table values
- **Don't:** Don't add shadowed cards; the panels use hairline borders
- **Don't:** Don't turn the key-value rows into free text; the figures need the ledger layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
