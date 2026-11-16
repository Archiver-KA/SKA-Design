# Design system — Stone Barn Restaurant Landing Page Template

`SN-W03001` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet, refined hero on an off-white ground (#fafaf9), with a large Playfair Display headline in near-black and body copy in warm grey. Buttons are dark pills: Reserve a Table is filled near-black (#1c1917), and View Menu is an outlined pill beside it. The landscape photograph sits in a framed panel with a small italic caption inside the image, which gives the page a calm, country-inn tone.

**Mood:** refined, calm, serif-led, rural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#e7e5e4` · `#ffffff` · `#a8a29e` · `#fafaf9` · `#57534e` · `#292524` · `#d6d3d1` · `#16a34a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-stone-200/50`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-stone-900 rounded hover:bg-stone-800 transition-colors shadow-sm ring-1 ring-stone-900/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display at a large size, in near-black.
- **Do:** Use a near-black filled pill for Reserve a Table, and an outline pill beside it.
- **Do:** Keep the green status dot small and used only for the opening note.
- **Don't:** Don't use the green as a button colour; the button is near-black.
- **Don't:** Don't set headlines in sans-serif.
- **Don't:** Don't move the photo caption out of the image into a box.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
