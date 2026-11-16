# Design system — Bakery Landing Page Template

`SN-W02844` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A clean artisan bakery hero on off-white (#fafaf9), with a heavy near-black sans headline over three lines and a single italic word in amber (#f59e0b). Near-black pills carry both the navigation and the primary Explore Menu action, and a small pale yellow tag sits above the title. The photograph is a tall grey-toned frame on the right, so the page is text-led and neutral, with amber as its only warm note.

**Mood:** clean, neutral, text-led, warm-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#f5f5f4` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |

Palette by frequency of use: `#1c1917` · `#e7e5e4` · `#f5f5f4` · `#78716c` · `#f59e0b` · `#fafaf9` · `#292524` · `#57534e` · `#a8a29e` · `#44403c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 16px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-stone-900/10`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-stone-900 text-stone-50 px-5 py-2 rounded-full text-xs font-medium hover:bg-stone-800 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Menu list (`menu-list`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #f5f5f4;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #f59e0b;
  --font-display: "Inter", sans-serif;
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
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a heavy near-black sans with one italic amber word
- **Do:** Use near-black pills for the navigation and the primary action
- **Do:** Keep amber (#f59e0b) to the single emphasised word and small tags
- **Don't:** Don't set the headline in a light weight; it is heavy
- **Don't:** Don't use amber for buttons; the buttons are near-black
- **Don't:** Don't put body copy on the grey photograph frame

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
