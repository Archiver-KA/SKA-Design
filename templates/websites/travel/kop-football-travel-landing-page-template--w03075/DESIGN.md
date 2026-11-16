# Design system — KOP Football Travel Landing Page Template

`SN-W03075` · travel · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A minimal monochrome travel page on white (#ffffff) with a bold tight sans headline in near-black, its second line in pale grey. Colour is absent apart from the solid black search button, so the structure comes from type weight and soft grey borders. A pill search field sits centred under the headline, and the list of weekend cards below uses thin grey borders.

**Mood:** minimal, monochrome, crisp, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |

Palette by frequency of use: `#71717a` · `#ffffff` · `#e4e4e7` · `#a1a1aa` · `#000000` · `#f4f4f5` · `#fafafa` · `#d4d4d8` · `#3f3f46` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 16px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-black text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Comparison (`comparison`)
5. Video / media (`video-media`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #000000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#000000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the palette black, white and grey only
- **Do:** Set the headline in tight bold sans with the second line in pale grey
- **Do:** Use a solid black pill for the single action in the search bar
- **Don't:** Don't introduce a brand colour; the page depends on monochrome
- **Don't:** Don't use heavy shadows on the cards
- **Don't:** Don't use the light grey (#e4e4e7) for text; it is a border tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
