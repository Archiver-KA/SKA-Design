# Design system — Harald Hubner Real Estate

`SN-W03244` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, sans-led property-audit hero on a near-black green ground, with a large white headline and a second line in italic mint green. The primary button is a solid mint, paired with a plain text link, and a faint blurred glow sits behind the headline. Colour is restricted to near-black, mint and warm off-white, so the page reads as clinical and direct.

**Mood:** clinical, direct, dark, fresh

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1b2320` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ecfdf5` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |
| Second accent | `#f4eadf` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#064e3b` · `#ecfdf5` · `#ffffff` · `#44403c` · `#e7e5e4` · `#78716c` · `#57534e` · `#d1fae5` · `#6ee7b7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 42px · h3 20px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_-8px_32px_rgba(0,0,0,0.15)]`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-4 py-2 text-xs sm:text-sm font-medium hover:bg-emerald-300 hover:shadow-sm transition-colors cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Listings (`listings`)
4. Process / steps (`how-it-works`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #1b2320;
  --color-surface: #1c1917;
  --color-text: #ecfdf5;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #064e3b;
  --color-accent-2: #f4eadf;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1b2320',
    surface: '#1c1917',
    ink: '#ecfdf5',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#064e3b',
    accent2: '#f4eadf',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white sans and the sub-line in italic mint green.
- **Do:** Use the solid mint green for the primary button and the one highlighted sub-line.
- **Do:** Keep the faint blurred glow behind the hero headline, not behind the body copy.
- **Don't:** Don't add a second accent hue; mint and warm off-white are the set.
- **Don't:** Don't use a light page ground; the hero is near-black green.
- **Don't:** Don't use the dark forest green (#064e3b) as a button fill; it is too low-contrast on this ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
