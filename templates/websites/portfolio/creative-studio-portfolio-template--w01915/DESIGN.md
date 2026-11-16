# Design system — Creative Studio Portfolio Template

`SN-W01915` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black hero with a large white sans headline stacked over three lines, and the last two lines set in grey italic serif that steps down in tone. A dark status panel labelled as initialising sits low on the right, and a pair of pill buttons sits in the navigation. The page is monochrome, and the italic serif against the sans is the one typographic contrast.

**Mood:** monochrome, editorial, precise, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000` · `#ffffff` · `#a3a3a3` · `#262626` · `#737373` · `#171717` · `#404040` · `#525252` · `#e5e5e5` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-normal`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black px-6 py-3.5 rounded-full w-fit text-sm font-medium flex items-center gap-2 hover:bg-neutral-200 transition-colors duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline white sans, with the final two lines in grey italic serif.
- **Do:** Use the dark panel (#171717) for tool or status widgets only.
- **Do:** Keep the navigation buttons as pills, one outline and one solid white.
- **Don't:** Don't add colour; the page is monochrome.
- **Don't:** Don't set the italic lines in sans; the serif contrast is the point.
- **Don't:** Don't place the status panel over the headline; it sits low on the right.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
