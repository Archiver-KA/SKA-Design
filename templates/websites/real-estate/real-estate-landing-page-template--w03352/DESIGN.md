# Design system — Real Estate Landing Page Template

`SN-W03352` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A plain, light page on white with a bold dark sans-serif headline set in three tight lines and a muted grey intro beneath. A thin-outlined contact button sits in the navigation, and a pair of photographs of white modern houses sits below the copy in a flat grid. The page is restrained, with near-black type and no decorative colour in the hero.

**Mood:** plain, restrained, modern, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8f9fa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#d4d4d4` | Hairlines, dividers, outlines |
| Accent | `#3b5b9d` | Primary action and highlights |

Palette by frequency of use: `#d4d4d4` · `#3b5b9d` · `#ffffff` · `#171717` · `#a3a3a3` · `#737373` · `#525252` · `#5c85d6` · `#404040` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-[90rem]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-1`, `gap-24`

**Primary button**

```html
<a class="border border-[#3B5B9D] text-[#3B5B9D] px-6 py-2.5 text-sm uppercase tracking-wider font-medium hover:bg-[#3B5B9D] hover:text-white transition-colors hidden sm:block font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f8f9fa;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-muted: #737373;
  --color-border: #d4d4d4;
  --color-accent: #3b5b9d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8f9fa',
    surface: '#ffffff',
    ink: '#1a1a1a',
    muted: '#737373',
    line: '#d4d4d4',
    accent: '#3b5b9d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a heavy sans-serif in near-black, on three short lines
- **Do:** Keep the navigation action as an outlined button rather than a filled one
- **Do:** Pair headline copy with architectural photography in flat, square-cornered frames
- **Don't:** Don't add colour to the hero; the design is black on white
- **Don't:** Don't use rounded photo frames
- **Don't:** Don't set the intro text in full black; it sits in mid grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
