# Design system — Digital Specialist Portfolio Template

`SN-W01987` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Warm dark profile: a near-black ground (#0d0d0d) with one burnt orange (#f26419) that carries the eyebrow line, the surname, the primary button and the stat numbers. The headline is set in a serif. Stats are small outlined rectangles, and the copy sits in a clear left column.

**Mood:** warm, focused, direct, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0d0d0d` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#f5f0ea` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#2e2e2e` | Hairlines, dividers, outlines |
| Accent | `#f26419` | Primary action and highlights |

Palette by frequency of use: `#f26419` · `#ffffff` · `#f5f0ea` · `#0d0d0d` · `#888888` · `#1a1a1a` · `#2e2e2e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, DM Sans, DM Mono
- **Scale (largest breakpoint):** h1 72px · h2 60px · body 18px
- **Weights in use:** light, extralight
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_8px_30px_rgba(242,100,25,0.35)]`
- **Content width:** `max-w-[80px]`, `max-w-7xl`
- **Section padding:** `py-28`
- **Common gaps:** `gap-3`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-[#F26419] text-[#0D0D0D] text-base font-light tracking-wider uppercase px-8 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(242,100,25,0.35)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Timeline (`timeline`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0d0d0d;
  --color-surface: #1a1a1a;
  --color-text: #f5f0ea;
  --color-muted: #888888;
  --color-border: #2e2e2e;
  --color-accent: #f26419;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0d0d0d',
    surface: '#1a1a1a',
    ink: '#f5f0ea',
    muted: '#888888',
    line: '#2e2e2e',
    accent: '#f26419',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Use the orange (#f26419) for the eyebrow line, the surname, the primary button and stat numbers
- **Do:** Make the primary button solid orange and the secondary button a plain outline
- **Do:** Set stats as small outlined rectangles with the number in orange
- **Don't:** Don't use the orange for body copy
- **Don't:** Don't set the headline in Bebas Neue; keep it in the serif.
- **Don't:** Don't add a second accent colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
