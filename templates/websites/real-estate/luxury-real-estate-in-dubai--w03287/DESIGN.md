# Design system — Luxury Real Estate in Dubai

`SN-W03287` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Quiet and search-led: a deep navy-black ground (#0f131a) holds a large white serif headline over two lines, with a muted slate subhead beneath. A translucent search bar sits below the copy, and its white search button is the only bright element. The restraint makes the first screen functional, so the search does the job that decoration would do elsewhere.

**Mood:** quiet, functional, composed, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0f131a` | Page ground |
| Surface | `#1a1f2b` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#cbd5e1` · `#1a1f2b` · `#0f131a` · `#64748b` · `#f1f5f9` · `#e2e8f0` · `#0b0e14`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 16px
- **Weights in use:** normal, extralight, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-20`, `gap-x-8`, `gap-y-16`

**Primary button**

```html
<a class="w-full sm:w-auto mt-2 sm:mt-0 ml-0 sm:ml-2 px-8 py-3.5 bg-white text-[#0f131a] text-base font-normal rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Product grid (`product-grid`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0f131a;
  --color-surface: #1a1f2b;
  --color-text: #f1f5f9;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0f131a',
    surface: '#1a1f2b',
    ink: '#f1f5f9',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground deep navy-black (#0f131a) with white headings.
- **Do:** Make the search bar the main element of the first screen, with a white search button.
- **Do:** Set the subhead in muted slate (#94a3b8).
- **Don't:** Don't add a saturated accent; the page stays monochrome.
- **Don't:** Don't colour the search button; it stays white.
- **Don't:** Don't set the headline in a sans face; the serif carries the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
