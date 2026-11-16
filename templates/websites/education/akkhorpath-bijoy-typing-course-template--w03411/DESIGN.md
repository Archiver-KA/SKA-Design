# Design system — AkkhorPath Bijoy Typing Course Template

`SN-W03411` · education · light mode · Sinera Atlas theme `calm` · language `bn`

## Direction

Calm typing-course panel on a pale grey-green ground, with a bold Bengali headline in dark teal and its last phrase in the same deep teal. Deep teal fills the primary button, and a white card holds a keyboard diagram with one key highlighted in mint. The mint is used only for that key and the active step, so the teaching focus is clear.

**Mood:** calm, focused, instructional, muted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f8f8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#172126` | Headings and primary copy |
| Muted text | `#71807d` | Secondary copy, captions |
| Border | `#e0e8e6` | Hairlines, dividers, outlines |
| Accent | `#163d46` | Primary action and highlights |
| Second accent | `#dff1e9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e0e8e6` · `#edf6f3` · `#e1e9e7` · `#163d46` · `#71807d` · `#dfe8e5` · `#172126` · `#73817f` · `#b8cfcc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Noto Sans Bengali
- **Body:** Noto Sans Bengali
- **Loaded families:** Noto Sans Bengali, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 30px · h2 20px · h3 18px · body 12px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-[0_20px_60px_rgba(23,50,48,.08)]`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#657270] hover:bg-[#f2f6f5]">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f7f8f8;
  --color-surface: #ffffff;
  --color-text: #172126;
  --color-muted: #71807d;
  --color-border: #e0e8e6;
  --color-accent: #163d46;
  --color-accent-2: #dff1e9;
  --font-display: "Noto Sans Bengali", sans-serif;
  --font-body: "Noto Sans Bengali", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f8f8',
    surface: '#ffffff',
    ink: '#172126',
    muted: '#71807d',
    line: '#e0e8e6',
    accent: '#163d46',
    accent2: '#dff1e9',
  },
  fontFamily: { display: ['Noto Sans Bengali'], sans: ['Noto Sans Bengali'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold Bengali in dark teal (#163d46), with the final phrase in the same teal.
- **Do:** Use the mint (#dff1e9) only to highlight the active key or step on the keyboard card.
- **Do:** Keep the keyboard diagram on a white card with light grey keys.
- **Don't:** Don't use bright colours; the palette is teal, mint and grey.
- **Don't:** Don't set Bengali body copy in the display weight.
- **Don't:** Don't remove the progress bar from the lesson card.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
