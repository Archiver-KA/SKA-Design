# Design system — Creative Journal Blog Page Template

`SN-W03756` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A quiet light blog layout, shown inside a browser frame, with a narrow sidebar of plain serif links and a large serif page title. Small uppercase grey labels sit above the heading, and the main column is spacious with one large image block. Sections are separated by hairline dividers and whitespace rather than colour.

**Mood:** quiet, minimal, editorial, spacious, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f4f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#fbbf24` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#18181b` · `#e4e4e7` · `#ffffff` · `#a1a1aa` · `#f4f4f5` · `#71717a` · `#52525b` · `#fafafa` · `#d4d4d8` · `#f87171`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Serif
- **Body:** IBM Plex Serif
- **Loaded families:** IBM Plex Serif, Varela Round
- **Scale (largest breakpoint):** h1 40px · h2 32px · h3 24px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-[1400px]`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-white text-zinc-900 px-6 py-3 rounded-lg font-heading font-medium text-sm hover:bg-zinc-200 transition-colors whitespace-nowrap w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Menu list (`menu-list`)
3. Sidebar (`sidebar`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f4f4f5;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #fbbf24;
  --color-accent-2: #f87171;
  --font-display: "IBM Plex Serif", serif;
  --font-body: "IBM Plex Serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f4f5',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#fbbf24',
    accent2: '#f87171',
  },
  fontFamily: { display: ['IBM Plex Serif'], sans: ['IBM Plex Serif'] },
} }
```

## Do and don't

- **Do:** Set the page title in a serif face, with small uppercase grey labels above it
- **Do:** Keep the sidebar as a narrow column of plain serif links under a small heading
- **Do:** Separate sections with hairline dividers rather than colour
- **Don't:** Don't add accent colour to the sidebar or labels
- **Don't:** Don't use heavy shadows on the window frame
- **Don't:** Don't fill the sidebar with icons or badges

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
