# Design system — Photography & Videography Studio Landing Page Template

`SN-W03736` · entertainment · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Off-white ground with a faint warm light at the top left. The headline is a large serif in charcoal, with the second line in grey italic, and two sharp-cornered outlined buttons sit below as the only interactive elements. A small tracked label above the headline names the studio, so the page reads as an editorial portfolio with almost no ornament.

**Mood:** editorial, quiet, refined, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#e7e5e4` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#ffedd5` | Primary action and highlights |

Palette by frequency of use: `#d6d3d1` · `#78716c` · `#a8a29e` · `#292524` · `#1c1917` · `#e7e5e4` · `#57534e` · `#f5f5f4` · `#fafaf9` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Manrope
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-8 py-4 bg-stone-100 text-stone-900 rounded-sm font-sans text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors duration-300 min-w-[200px]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Video / media (`video-media`)
5. About (`about`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #e7e5e4;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #ffedd5;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#e7e5e4',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#ffedd5',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif in charcoal, with the second line in grey italic
- **Do:** Use thin outlined buttons with sharp corners in small spaced caps
- **Do:** Keep the studio name as a small tracked label above the headline
- **Don't:** Don't add a filled button beside the outlined pair
- **Don't:** Don't use bright colours on the page
- **Don't:** Don't round the corners of the buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
