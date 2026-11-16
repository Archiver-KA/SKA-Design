# Design system — Yoga Instructor Landing Page Template

`SN-W02694` · sports-fitness · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Quiet yoga studio page on a warm off-white ground (#fafaf9). The hero headline is a large near-black sans with one italic grey word, and the supporting copy is a small muted grey. The only accent is a dark charcoal button (#1c1917), so the page reads as restrained and monochrome, with contrast carried by the type and the empty space.

**Mood:** serene, minimal, warm neutral, spacious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#292524` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#e7e5e4` · `#ffffff` · `#78716c` · `#f5f5f4` · `#a8a29e` · `#fafaf9` · `#57534e` · `#292524` · `#d6d3d1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="h-12 px-8 rounded bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 transition-all flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. About (`about`)
6. Schedule (`schedule-agenda`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #292524;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
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
    line: '#e7e5e4',
    accent: '#1c1917',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in large Inter on the warm off-white ground (#fafaf9).
- **Do:** Use one italic grey word in the headline for emphasis, in muted stone (#78716c).
- **Do:** Make the primary button charcoal (#1c1917) with white text and keep it the only dark block.
- **Don't:** Don't add a bright accent colour; the page is neutral stone and charcoal only.
- **Don't:** Don't fill the hero with imagery that competes with the headline.
- **Don't:** Don't set body copy below the muted grey tone; contrast on this ground is already soft.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
