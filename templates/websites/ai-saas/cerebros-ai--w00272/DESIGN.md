# Design system — CerebrOS AI

`SN-W00272` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A clean, light AI-console interface: a near-white page (#fafafa) with a narrow left icon rail and a centred prompt field as the focus. White cards with thin grey borders hold the suggestion shortcuts, and small status chips sit in the header. The look is quiet and functional, with the prompt bar doing most of the visual work and no decorative colour on screen.

**Mood:** quiet, functional, minimal, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#e4e4e7` · `#ffffff` · `#f59e0b` · `#10b981` · `#fafafa` · `#18181b` · `#d1fae5` · `#fef3c7` · `#71717a` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 24px · h2 20px · h3 12px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-soft`, `shadow-sm`, `shadow-elevated`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-4 py-2 text-xs font-medium text-white bg-ink-900 rounded shadow-sm hover:bg-ink-800 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #f59e0b;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#f59e0b',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page ground #fafafa with white cards and thin grey borders
- **Do:** Make the centred prompt field the largest element on the screen
- **Do:** Set suggestion cards as small titled blocks with one line of grey text
- **Don't:** Don't add coloured accents to the icon rail; it stays black and white
- **Don't:** Don't add a second large input beside the prompt
- **Don't:** Don't use heavy shadows on the cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
