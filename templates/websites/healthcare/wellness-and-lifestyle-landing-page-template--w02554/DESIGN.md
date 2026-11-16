# Design system — Wellness & Lifestyle Landing Page Template

`SN-W02554` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A restrained lifestyle-coaching page: a warm off-white ground with near-black headlines, where the middle word is a muted grey, and the primary action is a near-black pill. The page has no accent colour and relies on tone and a soft glow behind the content. The stance is quiet and editorial, closer to a personal brand than a clinic.

**Mood:** quiet, editorial, neutral, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#e7e5e4` · `#78716c` · `#f5f5f4` · `#a8a29e` · `#57534e` · `#d6d3d1` · `#fafaf9` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-stone-900 text-stone-50 px-4 py-2 rounded-full text-xs font-medium hover:bg-stone-700 transition-colors font-manrope">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. About (`about`)
5. Services (`services`)
6. Articles (`blog-articles`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#292524',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use near-black (#1c1917) for the primary pill buttons and the navigation call to action
- **Do:** Set the middle word of the hero headline in a light warm grey for tonal contrast
- **Do:** Keep the hero centred, with a short paragraph and two pill buttons
- **Don't:** Don't add the green (#10b981) to the hero.
- **Don't:** Don't set body copy in the light grey used for the headline's middle word
- **Don't:** Don't introduce a second colour; the page is neutral only

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
