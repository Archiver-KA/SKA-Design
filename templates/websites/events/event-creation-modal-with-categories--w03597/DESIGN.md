# Design system — Event Creation Modal with Categories

`SN-W03597` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

This event creation modal is a dark, form-focused component. A dark slate panel holds stacked inputs with thin grey borders and small muted labels. Bright cyan (#00baf4) fills the active category tab and the primary Create button, and the controls share one height. The look is utilitarian and app-like, with colour limited to the active state and the main action.

**Mood:** utilitarian, dark, form-focused, app-like, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#17181a` | Page ground |
| Surface | `#1b1d22` | Cards, panels, raised areas |
| Text | `#fcfcfc` | Headings and primary copy |
| Muted text | `#bbc3c9` | Secondary copy, captions |
| Border | `#31343f` | Hairlines, dividers, outlines |
| Accent | `#00baf4` | Primary action and highlights |

Palette by frequency of use: `#1b1d22` · `#00baf4` · `#fcfcfc` · `#000000` · `#bbc3c9` · `#535d6c` · `#31343f` · `#22262f` · `#727c8c` · `#191d22`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Weights in use:** semibold, medium

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`
- **Content width:** `max-w-[390px]`
- **Common gaps:** `gap-2`, `gap-3`

**Primary button**

```html
<a class="flex-1 bg-[#00BAF4] hover:bg-[#0998C0] text-black font-semibold py-3 rounded-md text-[17px] transition">…</a>
```

## Page structure

Blocks in page order:

1. Contact form (`contact-form`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #17181a;
  --color-surface: #1b1d22;
  --color-text: #fcfcfc;
  --color-muted: #bbc3c9;
  --color-border: #31343f;
  --color-accent: #00baf4;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#17181a',
    surface: '#1b1d22',
    ink: '#fcfcfc',
    muted: '#bbc3c9',
    line: '#31343f',
    accent: '#00baf4',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Fill the active category tab and the Create button with cyan (#00baf4)
- **Do:** Keep inputs on the dark panel with thin grey borders and muted labels
- **Do:** Use cyan only for the active state and the primary action
- **Don't:** Don't use cyan for input borders or labels
- **Don't:** Don't add shadows or gradients to the modal
- **Don't:** Don't place more than one primary button in the form

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
