# Design system — Pet Sitter Matching Platform Template

`SN-W02500` · healthcare · light mode · Sinera Atlas theme `calm` · language `ja`

## Direction

A calm, centred Japanese-language page on warm off-white (#fafaf9) with stone-toned text (#292524) and one dark (#1c1917) pill button. Noto Sans JP sets everything in one family, with the hero headline broken over two balanced lines and small outlined tags above it. Colour is almost absent, so spacing and the tonal panels carry the hierarchy.

**Mood:** calm, restrained, airy, polite

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#fafaf9` · `#e7e5e4` · `#a8a29e` · `#f5f5f4` · `#ffffff` · `#57534e` · `#292524` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Noto Sans JP
- **Body:** Noto Sans JP
- **Loaded families:** Noto Sans JP, Noto Serif JP
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-1.5`, `gap-5`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center bg-stone-900 text-stone-50 text-sm font-medium px-6 py-3 rounded-full transition-colors hover:bg-stone-800">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Services (`services`)
6. Case studies (`case-studies`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #1c1917;
  --font-display: "Noto Sans JP", sans-serif;
  --font-body: "Noto Sans JP", sans-serif;
  --radius: 9999px;
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
    line: '#f5f5f4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Noto Sans JP'], sans: ['Noto Sans JP'] },
} }
```

## Do and don't

- **Do:** Set all text in Noto Sans JP, with the headline on two balanced lines
- **Do:** Use the dark stone button (#1c1917) as the single primary action
- **Do:** Use outlined pill tags above headlines to label the service
- **Don't:** Don't add a second display face; Noto Sans JP covers headings and body
- **Don't:** Don't introduce accent colours; the palette is stone and white
- **Don't:** Don't break a Japanese headline mid-phrase; keep the set line breaks

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
