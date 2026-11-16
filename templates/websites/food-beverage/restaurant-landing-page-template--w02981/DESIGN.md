# Design system — Restaurant Landing Page Template

`SN-W02981` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, tight hero with a very large Inter Tight headline in near-black on a white ground, with a faint pink glow behind the top right corner. Rose red (#e11d48) fills the primary order button, and the secondary is a white outlined pill. The image slots sit as a grid of rounded cards beside the copy.

**Mood:** tight, clean, modern, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#e11d48` · `#e4e4e7` · `#71717a` · `#ffffff` · `#18181b` · `#be123c` · `#fecdd3` · `#f4f4f5` · `#3f3f46` · `#fff1f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter Tight
- **Body:** Inter Tight
- **Loaded families:** Inter Tight
- **Scale (largest breakpoint):** h1 72px · h2 36px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-12`

**Primary button**

```html
<a class="bg-rose-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-rose-700 transition-all shadow-md shadow-rose-600/20 tracking-tight">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Call to action (`cta`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #e11d48;
  --color-accent-2: #f97316;
  --font-display: "Inter Tight", sans-serif;
  --font-body: "Inter Tight", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#e11d48',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter Tight'], sans: ['Inter Tight'] },
} }
```

## Do and don't

- **Do:** Use rose red (#e11d48) for the primary order button only.
- **Do:** Set headlines in Inter Tight at a large size and tight line spacing.
- **Do:** Keep the image grid as rounded cards on the right of the hero.
- **Don't:** Don't use red for headings or body text.
- **Don't:** Don't loosen the letter-spacing of the headline; it is set tight.
- **Don't:** Don't replace the pink glow with a plain white ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
