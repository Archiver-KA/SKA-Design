# Design system — Creative Portfolio Website Template

`SN-W01906` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

An off-white page with a large black grotesk headline set flush right on two lines, with the year in pale grey underneath. Small grey copy and a single uppercase label sit at the left, and the navigation is tiny and lowercase in the corners. The type alone carries the page, with no imagery on the first screen.

**Mood:** blunt, typographic, minimal, raw

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fcfbf9` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#404040` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#171717` · `#fcfbf9` · `#a3a3a3` · `#f5f5f5` · `#ffffff` · `#404040` · `#e5e5e5` · `#737373` · `#d4d4d4` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Neue
- **Body:** Helvetica Neue
- **Scale (largest breakpoint):** h1 128px · h3 24px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Content width:** `max-w-7xl`, `max-w-[1920px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-16`, `gap-8`

**Primary button**

```html
<a class="p-3 rounded-full border border-neutral-700 text-neutral-400 hover:bg-[#fcfbf9] hover:text-neutral-900 hover:border-[#fcfbf9] transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fcfbf9;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #404040;
  --font-display: "Helvetica Neue", sans-serif;
  --font-body: "Helvetica Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fcfbf9',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#404040',
  },
  fontFamily: { display: ['Helvetica Neue'], sans: ['Helvetica Neue'] },
} }
```

## Do and don't

- **Do:** Set the headline large, tight, black grotesk, flush right.
- **Do:** Keep the year in pale grey as a second level under the headline.
- **Do:** Keep navigation small and lowercase in the corners.
- **Don't:** Don't add imagery to the first screen; the type is the image.
- **Don't:** Don't centre the headline; it runs flush right.
- **Don't:** Don't set the navigation in capitals; it stays lowercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
