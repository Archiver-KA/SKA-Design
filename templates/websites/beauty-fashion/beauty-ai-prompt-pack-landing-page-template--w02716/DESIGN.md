# Design system — Beauty AI Prompt Pack Landing Page Template

`SN-W02716` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Digital product page on a warm off-white ground (#fafaf9) with a centred white card that carries the hero. The headline is a classical serif in near-black, with the second line in italic grey, and a short muted paragraph sits beneath. The primary action is a dark charcoal pill, so the page is quiet and editorial, with the card and the type doing the work rather than colour.

**Mood:** editorial, quiet, classical, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#881337` · `#fafaf9` · `#ffffff` · `#e7e5e4` · `#f5f5f4` · `#a8a29e` · `#57534e` · `#fff1f2` · `#78716c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_2px_40px_-12px_rgba(0,0,0,0.06)]`
- **Content width:** `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full bg-white border border-stone-200 text-stone-600 px-4 py-2 rounded-lg text-xs font-medium hover:bg-stone-50 transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #1c1917;
  --font-display: "Playfair Display", serif;
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
    line: '#f5f5f4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a classical serif in near-black (#1c1917) with an italic grey second line.
- **Do:** Keep the hero in one white card on the warm off-white ground (#fafaf9).
- **Do:** Make the primary button a dark charcoal pill with white text and an arrow.
- **Don't:** Don't use the maroon (#881337) on buttons; they are charcoal.
- **Don't:** Don't add bright colour; the page is neutral.
- **Don't:** Don't put the hero text straight on the ground without the card.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
