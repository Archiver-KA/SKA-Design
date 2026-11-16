# Design system — Editorial Wedding Landing Page Template

`SN-W03766` · news-blog · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A deep brown-black page [#1c1917] with a single small, widely tracked uppercase label at the top. Beyond that label, the design is defined by its deep ground and its spaced capitals. Headings and body share one sans-serif family, and the look is spare and quiet.

**Mood:** dark, spare, quiet, editorial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#d6d3d1` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#a8a29e` · `#78716c` · `#ffffff` · `#e7e5e4` · `#d6d3d1` · `#f5f4f0` · `#292524` · `#ebe9e4` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Instrument Serif, Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 36px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-6`, `gap-12`, `gap-3`

**Primary button**

```html
<a class="w-full py-4 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors flex justify-center items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)
3. About (`about`)
4. Feature grid (`features`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #d6d3d1;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#d6d3d1',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Keep the ground in deep brown-black (#1c1917)
- **Do:** Set small labels in uppercase with wide letter spacing
- **Do:** Use one typeface family for headings and body text
- **Don't:** Don't add bright colour to the ground or labels
- **Don't:** Don't mix more than one typeface family
- **Don't:** Don't fill the top of the page with busy imagery

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
