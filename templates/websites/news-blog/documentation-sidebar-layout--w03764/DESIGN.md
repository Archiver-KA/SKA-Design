# Design system — Documentation Sidebar Layout

`SN-W03764` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black documentation page with a dark sidebar of small uppercase section labels and plain links, the active item marked with a dark grey fill. Content headings are bold white, while subheadings and check marks use a clear blue [#4f9dff]. Important notes sit in a dark callout with an icon, and the feature list is a simple vertical stack.

**Mood:** clear, neutral, precise, structured, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4f9dff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#4f9dff` · `#111111` · `#030303` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 36px · h2 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Content width:** `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`

**Primary button**

```html
<a class="sidebar-link block px-2 py-2 rounded-lg hover:bg-white/5 border-l-2 border-transparent text-white/60 hover:text-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Sidebar (`sidebar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #030303;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #4f9dff;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    surface: '#111111',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#4f9dff',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set subheadings and list check marks in blue (#4f9dff) only
- **Do:** Group sidebar links under small uppercase section labels
- **Do:** Mark notes with a dark callout box and an icon
- **Don't:** Don't use blue for links within the body copy
- **Don't:** Don't add coloured backgrounds to the feature list
- **Don't:** Don't remove the sidebar section labels

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
