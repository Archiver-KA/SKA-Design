# Design system — Anna gao portfolio

`SN-W01790` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a bold near-black sans headline set in capitals across three lines, with the middle phrase in pale grey. A small orange square and an orange GPA tile carry the accent, and a faint grid texture sits behind the hero. The layout is structured and designerly, with orange kept to small, deliberate marks.

**Mood:** structured, designerly, white, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f5f5f5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ea580c` · `#e5e5e5` · `#171717` · `#737373` · `#a3a3a3` · `#525252` · `#d4d4d4` · `#f5f5f5` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_20px_40px_-10px_rgba(234,88,12,0.3)]`, `shadow-lg`
- **Content width:** `max-w-screen-2xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="bg-neutral-900 text-white text-[10px] uppercase tracking-widest font-medium px-6 py-3 hover:bg-orange-600 transition-colors duration-300 hidden sm:block">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #e5e5e5;
  --color-accent: #ea580c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    ink: '#171717',
    muted: '#737373',
    line: '#e5e5e5',
    accent: '#ea580c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy capitals in near-black, with a grey middle phrase.
- **Do:** Use orange (#ea580c) for small marks and the GPA tile only.
- **Do:** Keep the faint grid texture behind the hero.
- **Don't:** Don't use orange for large fills; it marks small details.
- **Don't:** Don't set the headline in a light weight.
- **Don't:** Don't add a second accent colour; the page is black, white and orange.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
