# Design system — Agrotourism Restaurant & Apartments Website Template

`SN-W02829` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `hr`

## Direction

A heritage estate hero in which a grey-toned photograph sits under a broad overlay, and the headline is set in white serif with a second line in italic. The navigation is a light grey strip with small, spaced sans labels and a dark rectangular reservation button. The look is quiet and stone-like, relying on grey and white value contrast rather than colour, with a white button as the one call to action.

**Mood:** quiet, heritage, stone-like, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#e7e5e4` · `#a8a29e` · `#ffffff` · `#78716c` · `#fafaf9` · `#57534e` · `#f5f5f4` · `#292524` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1400px]`, `max-w-[1200px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="min-w-[160px] bg-white text-stone-900 px-8 py-4 hover:bg-stone-100 transition duration-300 text-xs tracking-widest uppercase font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 2px;
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
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set hero headlines in white serif with the second line in italic
- **Do:** Use a solid white rectangular button for the hero action on grey imagery
- **Do:** Keep the dark reservation button for the navigation only
- **Don't:** Don't add colour; the hero works on grey and white value alone
- **Don't:** Don't set navigation labels in dark text over the grey photograph
- **Don't:** Don't use rounded pills for the primary button; this design uses rectangles

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
