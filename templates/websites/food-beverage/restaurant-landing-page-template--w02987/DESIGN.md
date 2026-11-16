# Design system — Restaurant Landing Page Template

`SN-W02987` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark restaurant hero with a warm amber glow behind a near-black ground, a large white Inter headline, and the place name set in amber (#f59e0b) as the highlight line. Amber fills the primary Book a Table button, while Visit Us is a dark grey pill. The amber works as an accent on a dark page.

**Mood:** warm, dark, glowing, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f59e0b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#f59e0b` · `#a1a1aa` · `#ffffff` · `#27272a` · `#d4d4d8` · `#71717a` · `#3f3f46` · `#e4e4e7` · `#18181b` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Feature grid (`features`)
6. Booking form (`booking`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f59e0b;
  --color-surface: #e4e4e7;
  --color-text: #18181b;
  --color-muted: #27272a;
  --color-border: #27272a;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f59e0b',
    surface: '#e4e4e7',
    ink: '#18181b',
    muted: '#27272a',
    line: '#27272a',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the place name in amber (#f59e0b) as the highlight line of the headline.
- **Do:** Use the amber fill for the primary button and the small eyebrow pill outline.
- **Do:** Keep a soft amber glow behind the hero, not a solid colour fill.
- **Don't:** Don't use amber as the page ground; it is an accent.
- **Don't:** Don't set the headline in a dark colour.
- **Don't:** Don't turn the secondary button amber; it stays dark grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
