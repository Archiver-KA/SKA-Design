# Design system — Digital Agency Landing Page Template

`SN-W01532` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a large uppercase serif headline in white, and the last word carrying an indigo-to-pink gradient. The layout is asymmetric: the headline sits left, with a small paragraph and a circular arrow link at the right over a faint wireframe sphere.

**Mood:** editorial, dark, gradient, asymmetric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#f472b6` | Supporting highlights |

Palette by frequency of use: `#818cf8` · `#f472b6` · `#262626` · `#a3a3a3` · `#d4d4d4` · `#525252` · `#737373` · `#6366f1` · `#60a5fa` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-7xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-8`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="px-8 py-4 border border-neutral-800 rounded-full text-sm font-medium hover:border-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Case studies (`case-studies`)
4. Team (`team`)
5. Services (`services`)
6. Marquee (`marquee`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #fafafa;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #818cf8;
  --color-accent-2: #f472b6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#fafafa',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#818cf8',
    accent2: '#f472b6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in uppercase serif in white, with one word in the indigo-to-pink gradient (#818cf8 to #f472b6)
- **Do:** Place the paragraph and link in a narrow right column
- **Do:** Keep the background black (#0a0a0a) with the wireframe graphic at low contrast
- **Don't:** Don't use the gradient on body text
- **Don't:** Don't add colours beyond the indigo and pink pair
- **Don't:** Don't switch the headline to sans-serif without changing the type system

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
