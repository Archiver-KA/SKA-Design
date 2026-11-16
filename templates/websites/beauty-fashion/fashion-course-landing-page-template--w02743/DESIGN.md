# Design system — Fashion Course Landing Page Template

`SN-W02743` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `pt-BR`

## Direction

Stark black page with a heavy uppercase white sans headline stacked in two lines, followed by a lighter sentence-case subline. The actions are outlined rather than filled: a white-bordered button in the header and a white-outlined call to action under the copy. The result is severe and high-contrast, and the course name carries the page.

**Mood:** stark, high-contrast, bold, severe

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#ebe8d8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#1c3f3a` · `#262626` · `#a3a3a3` · `#525252` · `#f5f5f5` · `#333333` · `#555555` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 20px · body 14px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-medium border border-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #ebe8d8;
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
    surface: '#262626',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#ebe8d8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy uppercase sans in white, stacked in two lines
- **Do:** Use white outlined buttons for both the header and hero actions
- **Do:** Keep the page on black (#000000) with white and light grey type only
- **Don't:** Don't use filled coloured buttons; the page uses outlines only
- **Don't:** Don't add dark green; the page is black, white and light grey
- **Don't:** Don't use a light page ground; the page is solid black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
