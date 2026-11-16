# Design system — Luxury Real Estate Landing Page Template

`SN-W03305` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A muted taupe-grey photographic hero carries a large white serif headline, 'Curating the exceptional.', with the second word set in italic. The interface is near-black and white: a dark pill tag, a white floating search card with a near-black circular button, and serif figures in small cards. The result is quiet and gallery-like, with no bright colour anywhere on the first screen.

**Mood:** quiet, gallery-like, neutral, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#78716c` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#1c1917` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#a18058` · `#78716c` · `#e7e5e4` · `#fafaf9` · `#f5f5f4` · `#a8a29e` · `#292524` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-28`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="group bg-[#1C1917] hover:bg-[#292524] text-[#FAFAF9] text-xs font-medium py-3 px-6 rounded-full transition-all shadow-xl shadow-stone-900/10 flex items-center gap-3">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #78716c;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #1c1917;
  --color-border: #e7e5e4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#78716c',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#1c1917',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a large serif in white, with one italic word.
- **Do:** Keep UI chrome to near-black (#1c1917) and white, with no accent colour.
- **Do:** Float the search card over the lower edge of the hero on a white surface.
- **Don't:** Don't add a bright accent colour; the photograph and neutrals carry the page.
- **Don't:** Don't set the headline in dark text over the taupe field; it needs white.
- **Don't:** Don't use a heavy sans for the headline; the serif is the identity.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
