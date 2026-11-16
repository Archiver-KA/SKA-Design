# Design system — Mechanical Keyboard Product Landing Page Template

`SN-W01252` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, tactile product page on a near-black ground, with a large white sans headline whose second word fades into grey. A small bordered pill sits above it, and a row of pale, bordered keyboard keys runs across the lower half as the illustration. The keys are the visual, and the only colour is subtle grey.

**Mood:** tactile, dark, technical, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#f4f4f5` | Secondary copy, captions |
| Border | `#3f3f46` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |

Palette by frequency of use: `#d4d4d8` · `#3f3f46` · `#18181b` · `#71717a` · `#f4f4f5` · `#ffffff` · `#a1a1aa` · `#09090b` · `#818cf8` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 24px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-indigo-900/10`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-1`, `gap-3`

**Primary button**

```html
<a class="text-xs font-medium bg-zinc-100 text-zinc-950 px-3 py-1.5 rounded hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Pricing (`pricing`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #f4f4f5;
  --color-border: #3f3f46;
  --color-accent: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#f4f4f5',
    line: '#3f3f46',
    accent: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Build the hero illustration from bordered grey keys rather than photographs
- **Do:** Set the headline in white sans with the second phrase fading to grey
- **Do:** Keep the pill badge small with a thin border above the headline
- **Don't:** Don't use an indigo page background; the page is near-black
- **Don't:** Don't add saturated colours to the keyboard
- **Don't:** Don't use a light background for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
