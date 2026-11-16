# Design system — Agrotourism Restaurant Landing Page Template

`SN-W02830` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `hr`

## Direction

A dark, quiet agrotourism hero on near-black brown (#1c1917), with a white serif headline whose second word is set in italic. The navigation uses small, spaced grey sans labels, and a solid white rectangular button leads the single call to action. A small pill tag sits above the title, and the palette is held to dark neutrals and white, so the page feels restrained and estate-like.

**Mood:** restrained, estate-like, dark, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#a8a29e` · `#78716c` · `#fafaf9` · `#e7e5e4` · `#ffffff` · `#d6d3d1` · `#292524` · `#f5f5f4` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** DM Sans
- **Loaded families:** DM Sans, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)]`
- **Content width:** `max-w-[1400px]`, `max-w-[1200px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="min-w-[180px] bg-stone-100 text-stone-900 px-8 py-4 hover:bg-olive-100 transition duration-300 text-xs tracking-widest uppercase font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --font-display: "Playfair Display", serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the near-black brown (#1c1917) as the hero ground with white headlines
- **Do:** Set the headline in white serif with the second word in italic
- **Do:** Make the single call to action a solid white button
- **Don't:** Don't use light tones as the hero ground; the hero is dark
- **Don't:** Don't add colour to the hero; the palette is neutral
- **Don't:** Don't set navigation labels in bright white; they sit in grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
