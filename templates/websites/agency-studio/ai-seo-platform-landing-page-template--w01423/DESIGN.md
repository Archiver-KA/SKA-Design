# Design system — AI SEO Platform Landing Page Template

`SN-W01423` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pale off-white page on [#f5f5f5] with a large sans headline in near-black, where the second line is set in mid-grey, so the contrast comes from tone rather than colour. Product cards float to the right as flat white panels with small icons and status pills, and the primary button is a near-black solid beside a white input. The page is calm and editorial.

**Mood:** calm, editorial, pale, monochrome, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f5f5f5` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#a8a29e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#1c1917` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#c1ff72` · `#a8a29e` · `#292524` · `#57534e` · `#e7e5e4` · `#78716c` · `#44403c` · `#f5f5f5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Geist
- **Loaded families:** Geist, Montserrat, Space Mono
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-[1600px]`, `max-w-2xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-16`

**Primary button**

```html
<a class="group flex items-center gap-3 bg-[#c1ff72] hover:bg-[#b0f060] transition-all text-sm font-semibold rounded-full px-8 py-4 w-fit shadow-lg shadow-[#c1ff72]/20 text-stone-900">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f5f5f5;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #a8a29e;
  --color-border: #e7e5e4;
  --color-accent: #1c1917;
  --color-accent-2: #3b82f6;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f5f5f5',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#a8a29e',
    line: '#e7e5e4',
    accent: '#1c1917',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the headline in one sans, near-black on the first line and mid-grey on the second.
- **Do:** Make the primary button near-black (#1c1917) and solid, beside a white input.
- **Do:** Keep product cards flat white with small icons and status pills.
- **Don't:** Don't add a lime accent (#c1ff72); no lime is visible on the first screen.
- **Don't:** Don't use a dark hero; the page is pale.
- **Don't:** Don't add shadows to the cards; they sit flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
