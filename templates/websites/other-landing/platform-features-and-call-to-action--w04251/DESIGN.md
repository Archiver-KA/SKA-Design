# Design system — Platform Features and Call to Action

`SN-W04251` · other-landing · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark feature section on charcoal (#121212), with three equal cards for the main features and a full-width call to action strip below. The accent is a muted indigo (#5e6ad2), used for the primary button and the Learn more links. Headings are bold and white, and the cards are flat, with hairline borders in dark grey and no shadow.

**Mood:** flat, dark, orderly, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121212` | Page ground |
| Surface | `#2e2e2e` | Cards, panels, raised areas |
| Text | `#f7f8f8` | Headings and primary copy |
| Border | `#2e2e2e` | Hairlines, dividers, outlines |
| Accent | `#5e6ad2` | Primary action and highlights |

Palette by frequency of use: `#5e6ad2` · `#2e2e2e` · `#1e1e1e` · `#4a55c7` · `#f7f8f8` · `#121212`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Variable
- **Body:** Inter Variable
- **Loaded families:** Inter Variable
- **Scale (largest breakpoint):** h2 30px · h3 20px
- **Weights in use:** semibold, bold

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-8`, `gap-3`

**Primary button**

```html
<a class="px-4 py-1.5 text-sm bg-[#5e6ad2] hover:bg-[#4a55c7] rounded-md transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Feature grid (`features`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #121212;
  --color-surface: #2e2e2e;
  --color-text: #f7f8f8;
  --color-border: #2e2e2e;
  --color-accent: #5e6ad2;
  --font-display: "Inter Variable", sans-serif;
  --font-body: "Inter Variable", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121212',
    surface: '#2e2e2e',
    ink: '#f7f8f8',
    line: '#2e2e2e',
    accent: '#5e6ad2',
  },
  fontFamily: { display: ['Inter Variable'], sans: ['Inter Variable'] },
} }
```

## Do and don't

- **Do:** Use the indigo (#5e6ad2) for the primary button and the Learn more links only
- **Do:** Keep feature cards flat, with hairline dark-grey borders
- **Do:** Set headings bold and white, with short body text under them
- **Don't:** Don't add shadows or glow to the cards
- **Don't:** Don't use indigo for the card icons; they stay grey
- **Don't:** Don't place the call-to-action strip inside a card

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
