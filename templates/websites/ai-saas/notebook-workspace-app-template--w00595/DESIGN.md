# Design system — Notebook Workspace App Template

`SN-W00595` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet document workspace in the Notion mould: a white ground, a pale grey sidebar with small favourites and page lists, and a large dark title in Inter at the top of the page. Metadata sits in small grey text beneath it, and checkboxes and a quoted block carry the structure. Colour is nearly absent, so the page reads as a neutral writing surface where the content does the work.

**Mood:** neutral, calm, document-first, orderly, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f4f4f5` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#18181b` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#e4e4e7` · `#a1a1aa` · `#52525b` · `#ffffff` · `#d4d4d8` · `#f4f4f5` · `#fafafa` · `#db2777` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 20px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_8px_rgba(24,24,27,0.08)]`, `shadow-sm`, `shadow-[0_0_10px_rgba(24,24,27,0.05)]`
- **Content width:** `max-w-[100px]`, `max-w-[700px]`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-2`, `gap-2.5`, `gap-3`

**Primary button**

```html
<a class="bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-zinc-800 hover:shadow-[0_0_15px_rgba(24,24,27,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-1.5">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f4f4f5;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #18181b;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f4f4f5',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#18181b',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to white (#ffffff) with a pale grey sidebar (#f4f4f5) and near-black text (#18181b).
- **Do:** Use a large bold title at the top of each page, with small grey metadata beneath it.
- **Do:** Keep checkboxes and quoted blocks as the only structural devices inside the page body.
- **Don't:** Don't add the pink (#db2777) or blue (#2563eb) accents to the page.
- **Don't:** Don't place a heavy border around the sidebar; separation is by tone only.
- **Don't:** Don't add heading markers or icons to section titles; they stay plain bold text.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
