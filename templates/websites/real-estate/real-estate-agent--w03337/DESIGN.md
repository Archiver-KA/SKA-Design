# Design system — Real Estate Agent

`SN-W03337` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A photographic hero where a very large white wordmark, 'Fellwock Group', sits over a bright interior photograph of a living room. The second word is set in a lighter, italic-style cut, and a small green status tag sits beneath the title. Navigation is a pill-shaped white bar floating above the image, and the hero is carried by the picture rather than by colour.

**Mood:** photographic, bold, contemporary, dramatic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#ffffff` · `#71717a` · `#a1a1aa` · `#e4e4e7` · `#f4f4f5` · `#fafafa` · `#27272a` · `#000000` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h2 48px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-lg`, `shadow-zinc-900/10`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Services (`services`)
5. Testimonials (`testimonials`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
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
    background: '#18181b',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in very large white type over the hero photograph
- **Do:** Keep the green (#22c55e) to small status dots and tags
- **Do:** Float the pill-shaped navigation bar above the hero content
- **Don't:** Don't place the wordmark on a flat light background; it depends on the photograph
- **Don't:** Don't use the green as a button or as a large fill
- **Don't:** Don't add a second display typeface to the wordmark

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
