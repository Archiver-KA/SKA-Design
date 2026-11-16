# Design system — Architecture Case Study Landing Page Template

`SN-W03189` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A minimal case-study page with a charcoal hero under a light grey top bar. Small spaced uppercase meta labels sit above a large bold sans-serif title, with a short paragraph to the right. The page is monochrome, and the project photography is expected to carry all the colour.

**Mood:** minimal, monochrome, editorial, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#d2b48c` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#a1a1aa` · `#e4e4e7` · `#71717a` · `#ffffff` · `#fafafa` · `#d4d4d8` · `#52525b` · `#f4f4f5` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 12px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs text-zinc-900 shadow-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all font-geist">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Listings (`listings`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #d2b48c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#d2b48c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the title in a heavy sans-serif in white, with small spaced caps above it
- **Do:** Keep the hero on charcoal (#18181b) with white type
- **Do:** Keep the nav as a light grey bar with small uppercase links
- **Don't:** Don't add accent colours; the page is monochrome
- **Don't:** Don't put long paragraphs in the hero
- **Don't:** Don't use the grey tones for the title; keep it white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
