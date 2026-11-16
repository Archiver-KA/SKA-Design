# Design system — Italian Family Restaurant Landing Page Template

`SN-W02916` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet, light hero with a large serif headline in near-black, where the second line is an italic phrase in deep maroon. The copy sits left and a tall, rounded image panel sits right, fading into the page at its base. Buttons are a solid near-black and a plain outline, and the warm off-white ground keeps the tone unhurried and traditional.

**Mood:** quiet, traditional, unhurried, warm, serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#a8a29e` · `#ffffff` · `#78716c` · `#f5f5f4` · `#e7e5e4` · `#57534e` · `#fafaf9` · `#d6d3d1` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-screen-xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-wine-900 text-stone-50 text-xs font-medium tracking-wide px-5 py-2.5 rounded-md hover:bg-wine-800 transition-colors duration-300 shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Menu list (`menu-list`)
5. Newsletter signup (`newsletter`)
6. Articles (`blog-articles`)
7. Testimonials (`testimonials`)
8. Map / location (`map-location`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the second line in italic deep maroon.
- **Do:** Use near-black for the primary button; keep maroon for the italic phrase and the nav booking button.
- **Do:** Keep the image panel tall, with a fade into the page at its base.
- **Don't:** Don't use bright accent colours; the page is off-white, near-black and maroon.
- **Don't:** Don't set the headline in a sans; it is a serif.
- **Don't:** Don't fill the outline button; it stays a plain outline beside the solid one.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
