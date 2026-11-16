# Design system — Creative Professionals Landing Page

`SN-W04178` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A charcoal page with a bold white headline set on the left and a short grey paragraph on the right. The only colour is a blue text link (#60a5fa) with an arrow, and the feature cards are dark grey panels with rounded corners and generous space above their text. The layout is airy, and the hierarchy comes from the large headline and the spacing around it.

**Mood:** airy, restrained, dark, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#262626` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#a3a3a3` · `#404040` · `#ffffff` · `#fafafa` · `#d4d4d4` · `#262626` · `#60a5fa` · `#f5f5f5` · `#93c5fd` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, IBM Plex Serif, IBM Plex Mono, Bricolage Grotesque
- **Scale (largest breakpoint):** h1 60px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-card`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-10`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Process / steps (`how-it-works`)
3. Stats band (`stats`)
4. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #262626;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #404040;
  --color-accent: #60a5fa;
  --color-accent-2: #a855f7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#262626',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#404040',
    accent: '#60a5fa',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#60a5fa) for text links and arrows only.
- **Do:** Set the headline in bold Inter, large, on the left.
- **Do:** Keep feature cards dark grey with rounded corners and generous space above the text.
- **Don't:** Don't add bright accent colours to the links.
- **Don't:** Don't centre the headline on the page.
- **Don't:** Don't add shadows to the cards.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
