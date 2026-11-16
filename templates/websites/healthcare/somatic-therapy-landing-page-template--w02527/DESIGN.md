# Design system — Somatic Therapy Landing Page Template

`SN-W02527` · healthcare · light mode · Sinera Atlas theme `calm` · language `pl`

## Direction

A bright, high-contrast workshop landing page: a white ground, a near-black sans headline, and one lime (#94e130) button that is the only saturated element above the fold. The stance is direct and energetic, with a collage of workshop photographs filling the right column instead of illustration. The lime works like a highlighter, so the page reads as a booking funnel first and a brand second.

**Mood:** direct, energetic, high-contrast, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9f6f2` | Cards, panels, raised areas |
| Text | `#141414` | Headings and primary copy |
| Muted text | `#4e4d4c` | Secondary copy, captions |
| Border | `#e7e7e7` | Hairlines, dividers, outlines |
| Accent | `#94e130` | Primary action and highlights |

Palette by frequency of use: `#141414` · `#e7e7e7` · `#4e4d4c` · `#ffffff` · `#f9f6f2` · `#262626` · `#737373` · `#f4eee5` · `#94e130` · `#d1d1d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Figtree
- **Body:** Figtree
- **Loaded families:** Figtree, Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-[10px]` (10px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1320px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center justify-center bg-[#94e130] text-[#ffffff] font-medium text-base rounded-[5px] py-4 px-10 transition-transform hover:scale-[1.02] active:scale-[0.98]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9f6f2;
  --color-text: #141414;
  --color-muted: #4e4d4c;
  --color-border: #e7e7e7;
  --color-accent: #94e130;
  --font-display: "Figtree", sans-serif;
  --font-body: "Figtree", sans-serif;
  --radius: 10px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9f6f2',
    ink: '#141414',
    muted: '#4e4d4c',
    line: '#e7e7e7',
    accent: '#94e130',
  },
  fontFamily: { display: ['Figtree'], sans: ['Figtree'] },
} }
```

## Do and don't

- **Do:** Use lime (#94e130) only for the primary booking button
- **Do:** Keep headlines near-black (#141414) in a tightly tracked sans
- **Do:** Fill the right column of the hero with a photo collage of the workshops
- **Don't:** Don't use lime for text on white; it is for fills
- **Don't:** Don't use illustrations in place of workshop photographs
- **Don't:** Don't add a second saturated colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
