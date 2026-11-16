# Design system — Cinema Network Landing Page Template

`SN-W03678` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A dark, centred directory landing page where the headline is white and its key phrase is picked out in red. A search field with a red action button sits below the headline, and a row of large white figures marks the platform's scale. Red is the only colour, used for emphasis and the primary action.

**Mood:** professional, dark, confident, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#7f1d1d` | Primary action and highlights |
| Second accent | `#14532d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#18181b` · `#71717a` · `#27272a` · `#a1a1aa` · `#e4e4e7` · `#000000` · `#09090b` · `#f4f4f5` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 24px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-black`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="flex items-center gap-2 dark:bg-white dark:text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity bg-zinc-900 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f4f4f5;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #7f1d1d;
  --color-accent-2: #14532d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f4f4f5',
    muted: '#71717a',
    line: '#27272a',
    accent: '#7f1d1d',
    accent2: '#14532d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use red for the key phrase in the headline and the search action only
- **Do:** Set statistics as large white numerals with small uppercase labels
- **Do:** Keep the search field in a dark panel with a thin border
- **Don't:** Don't use red for the whole headline
- **Don't:** Don't add a second accent colour
- **Don't:** Don't use light backgrounds for the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
