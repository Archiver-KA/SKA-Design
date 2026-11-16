# Design system — Yoga Studio Landing Page Template

`SN-W02697` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Restrained yoga studio page on a warm off-white ground (#fafaf9) with a classical serif headline in near-black, and one italic word set in grey. The layout is spacious, with a small tracked uppercase kicker above the headline and a dark charcoal pill button as the only solid block. The look relies on type scale, whitespace and hairline borders rather than colour.

**Mood:** restrained, classical, spacious, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#78716c` · `#fafaf9` · `#e7e5e4` · `#a8a29e` · `#57534e` · `#d6d3d1` · `#292524` · `#44403c` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 24px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="bg-stone-900 text-stone-50 px-8 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-stone-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Feature grid (`features`)
6. Schedule (`schedule-agenda`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #f5f5f4;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#f5f5f4',
    ink: '#292524',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a classical serif in near-black (#292524), with one italic grey word.
- **Do:** Use small, widely tracked uppercase for kickers above section headings.
- **Do:** Make the primary button dark charcoal (#1c1917) and keep it the only solid dark block.
- **Don't:** Don't add a bright accent; the page is stone and charcoal only.
- **Don't:** Don't drop the hairline borders (#e7e5e4) in favour of shadows.
- **Don't:** Don't set the headline in a sans; the serif is the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
