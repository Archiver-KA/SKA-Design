# Design system — Digital Trust Journal Template

`SN-W03762` · news-blog · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm cream page [#fafaf8] with a large, centred serif headline in near-black, set over a grey serif intro. The primary action is a solid near-black pill with a small uppercase text link beneath it. Gold [#c5a059] appears only in the subscribe button in the navigation, so the page feels calm, refined and classic.

**Mood:** warm, calm, refined, classic, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#c5a059` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#e7e5e4` · `#a8a29e` · `#c5a059` · `#57534e` · `#fafaf8` · `#d6d3d1` · `#292524`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-sans)
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[100%]` (100%), `rounded-sm` (2px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="bg-[#C5A059] hover:bg-[#B38F48] text-white text-xs font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Newsletter signup (`newsletter`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf8;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #c5a059;
  --color-accent-2: #1e293b;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf8',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#c5a059',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif in near-black
- **Do:** Use the gold (#c5a059) only for the subscribe button and rare highlights
- **Do:** Keep the primary action as a solid near-black pill with a small text link below
- **Don't:** Don't use gold for body text
- **Don't:** Don't add a second filled button beside the primary one
- **Don't:** Don't set the intro copy in a bold weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
