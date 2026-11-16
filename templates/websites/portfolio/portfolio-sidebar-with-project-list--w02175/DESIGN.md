# Design system — Portfolio Sidebar with Project List

`SN-W02175` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dense, monochrome dashboard-style portfolio: a dark grey sidebar (#171717) holds the name, role and a stacked nav list, and a darker project grid fills the main panel with flat cards. Headings are small uppercase labels in white, with grey (#a3a3a3) supporting text and thin borders (#525252) separating blocks. There is no accent colour, so the structure relies on panel contrast and rule lines.

**Mood:** monochrome, dense, structured, technical, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#525252` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#525252` · `#a3a3a3` · `#d4d4d4` · `#171717` · `#404040` · `#737373` · `#262626` · `#f5f5f5` · `#fafafa` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="block py-2 lg:py-3 px-3 lg:px-4 text-neutral-100 bg-neutral-700 border border-neutral-500 text-xs lg:text-sm uppercase tracking-wide hover:bg-neutral-600 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Bento grid (`bento-grid`)
5. Timeline (`timeline`)
6. Contact form (`contact-form`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #525252;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#262626',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#525252',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use uppercase labels for section titles in white
- **Do:** Separate blocks with thin grey borders (#525252), not shadows
- **Do:** Keep the sidebar navigation as a vertical list of full-width items
- **Don't:** Don't introduce accent colour; the page is monochrome
- **Don't:** Don't use gradients; the panels are flat
- **Don't:** Don't move the navigation into a top bar; it lives in the sidebar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
