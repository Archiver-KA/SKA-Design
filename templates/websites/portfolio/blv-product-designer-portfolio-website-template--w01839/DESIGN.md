# Design system — BLV Product Designer Portfolio Website Template

`SN-W01839` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A quiet, minimal portfolio on a warm off-white ground (#f0f0ee) with near-black type. The headline is set large in PP Telegraf, with the surname in mid grey (#737373) to split the name into two tones. No accent colour appears on the first screen; the one emphasis is a solid near-black pill button, and a faint outlined circle is the only decoration.

**Mood:** minimal, warm, editorial, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f0f0ee` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#d4d4d4` | Hairlines, dividers, outlines |
| Accent | `#171717` | Primary action and highlights |

Palette by frequency of use: `#d4d4d4` · `#171717` · `#ffffff` · `#737373` · `#e5e5e5` · `#525252` · `#a3a3a3` · `#262626` · `#f5f5f5` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** PP Telegraf
- **Body:** PP Telegraf
- **Loaded families:** PP Telegraf
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-[1800px]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-4 bg-white text-neutral-900 px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f0f0ee;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #737373;
  --color-border: #d4d4d4;
  --color-accent: #171717;
  --font-display: "PP Telegraf", sans-serif;
  --font-body: "PP Telegraf", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f0f0ee',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#737373',
    line: '#d4d4d4',
    accent: '#171717',
  },
  fontFamily: { display: ['PP Telegraf'], sans: ['PP Telegraf'] },
} }
```

## Do and don't

- **Do:** Set the name in PP Telegraf at large size, with the second line in #737373
- **Do:** Use the solid #171717 pill as the primary button
- **Do:** Keep the ground at #f0f0ee and use white only for content panels
- **Don't:** Don't treat the green (#22c55e) as the brand accent; it does not appear on the first screen
- **Don't:** Don't add shadows to panels
- **Don't:** Don't mix in a second display typeface

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
