# Design system — Atelier CFO Advisory Landing Page Template

`SN-W00219` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

An editorial, quiet light page on warm off-white (#fdfcf8). The headline is a large condensed serif, black on the first line and grey italic on the second, with a short paragraph set in its own narrow column to the right. Secondary actions are underlined text links, and the primary button is a black rectangle, so the page is carried by type and space rather than colour.

**Mood:** editorial, quiet, premium, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#059669` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#57534e` · `#a8a29e` · `#ffffff` · `#78716c` · `#d6d3d1` · `#e7e5e4` · `#292524` · `#f5f5f4` · `#fdfcf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full bg-stone-900 text-white mt-8 py-4 rounded-md font-medium tracking-wide hover:bg-stone-800 transition-colors flex justify-center items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Articles (`blog-articles`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #059669;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#059669',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a condensed serif, black on the first line and grey italic on the second
- **Do:** Keep the ground warm off-white (#fdfcf8) and the text near-black
- **Do:** Use underlined text links for secondary actions instead of coloured buttons
- **Don't:** Don't introduce a bright accent; the page is black, grey and cream
- **Don't:** Don't set the headline in a sans-serif
- **Don't:** Don't crowd the hero; keep the paragraph in its own column

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
