# Design system — Hair Salon Landing Page Template

`SN-W02758` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `it`

## Direction

Pure black page with a large white sans headline, where the first line is white and the grey second line carries the business name. Small uppercase tracked captions sit above the headline, and thin outlined circles hold the arrow controls at right. A white card on the lower half holds the promotion details, so the page stays monochrome with an editorial sense of scale.

**Mood:** monochrome, editorial, bold, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#737373` · `#a3a3a3` · `#f5f5f5` · `#d4d4d4` · `#171717` · `#525252` · `#e5e5e5` · `#22c55e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-black/20`
- **Content width:** `max-w-7xl`, `max-w-[140px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-green-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Team (`team`)
5. Articles (`blog-articles`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #22c55e;
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
    muted: '#737373',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large sans, white on the first line and grey on the second
- **Do:** Use small tracked uppercase captions above the headline
- **Do:** Keep arrow controls as thin outlined circles at the right
- **Don't:** Don't add green (#22c55e); the page is white and grey
- **Don't:** Don't set the headline in a serif; the headline is a sans
- **Don't:** Don't use filled coloured buttons; the page uses white and grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
