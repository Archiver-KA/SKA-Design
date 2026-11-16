# Design system — Adventure Mindset Landing Page Template

`SN-W01762` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark warm-black page ([#1c1917]) with a very large, high-contrast serif headline in pale stone ([#e7e5e4]), set in capitals. A thin hairline divider separates the headline from a short sans-serif intro, and the one filled pill button is light. Pairing an old-style serif with a clean sans body gives an editorial, slightly literary tone.

**Mood:** editorial, warm, literary, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#e7e5e4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#1c1917` · `#d6d3d1` · `#a8a29e` · `#e7e5e4` · `#292524` · `#78716c` · `#57534e` · `#fafaf9` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Fraunces
- **Body:** Inter
- **Loaded families:** Fraunces, Inter
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-white text-stone-900 px-8 py-4 rounded-full font-medium hover:bg-stone-200 transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Stats band (`stats`)
5. Articles (`blog-articles`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #f5f5f4;
  --color-text: #e7e5e4;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --font-display: "Fraunces", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#f5f5f4',
    ink: '#e7e5e4',
    muted: '#78716c',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Fraunces'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the display headline in Fraunces, in capitals, in pale stone (#e7e5e4).
- **Do:** Keep the body in Inter and the intro short against the dark ground.
- **Do:** Use the light pill button as the single primary action.
- **Don't:** Don't set the headline in a sans; the serif is the design's main signal.
- **Don't:** Don't add a second accent colour on the dark ground.
- **Don't:** Don't use a light page background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
