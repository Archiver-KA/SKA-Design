# Design system — Home Renovation and Architecture Template

`SN-W03249` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A monochrome hero laid over a grey vertical gradient, with a very large white sans headline stacked on several lines and the phrase Dream Homes set in italic light grey. Small uppercase service links sit at the lower right, and the header is a thin wordmark with contact details in small text. The page is quiet and architectural, relying on scale and tonal contrast rather than colour.

**Mood:** quiet, monochrome, architectural, tonal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#52525b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#a1a1aa` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#71717a` · `#ffffff` · `#e4e4e7` · `#d4d4d8` · `#52525b` · `#f4f4f5` · `#a1a1aa` · `#09090b` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 112px · h2 72px · h3 24px · body 18px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="border border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Case studies (`case-studies`)
3. About (`about`)
4. Bento grid (`bento-grid`)
5. FAQ (`faq`)
6. Marquee (`marquee`)
7. Testimonials (`testimonials`)
8. Articles (`blog-articles`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #52525b;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #a1a1aa;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#52525b',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#a1a1aa',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large white sans, stacked on several lines, with the key phrase in italic light grey (#a1a1aa).
- **Do:** Keep the hero on a grey vertical gradient rather than a flat fill.
- **Do:** Place small uppercase service links at the lower right, away from the headline.
- **Don't:** Don't use a light page ground for the hero; the first screen is mid-to-dark grey.
- **Don't:** Don't add colour; the palette is white and greys only.
- **Don't:** Don't set the italic phrase in a heavy weight; it stays light.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
