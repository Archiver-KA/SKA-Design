# Design system — Worldbuilding Wiki Web App Template

`SN-W00838` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet, Notion-style workspace on white and pale stone grey, with a left sidebar of small grey labels and a centred empty state. The page title is a large light serif in grey, and the one strong colour is the crimson (#e11d48) primary button. The layout is plain and document-like, so the crimson marks the single action on the screen.

**Mood:** quiet, document-like, structured, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#f5f5f4` · `#a8a29e` · `#e7e5e4` · `#57534e` · `#78716c` · `#ffffff` · `#fafaf9` · `#ffe4e6` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[850px]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-lg transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Sidebar (`sidebar`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f4;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #e11d48;
  --color-accent-2: #fbbf24;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f4',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#e11d48',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the crimson (#e11d48) for the primary button only
- **Do:** Set page titles in a serif and sidebar labels in small grey Inter
- **Do:** Keep the sidebar on the pale stone surface (#f5f5f4) with grouped sections
- **Don't:** Don't add a second accent colour to the workspace
- **Don't:** Don't use the crimson for links or section headings
- **Don't:** Don't centre the sidebar content

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
