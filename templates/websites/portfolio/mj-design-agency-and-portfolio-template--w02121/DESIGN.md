# Design system — MJ Design Agency & Portfolio Template

`SN-W02121` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A high-end agency layout on an off-white ground (#fafafa) with black type and a single large pink (#ff1f8f) blurred glow in the top-right corner. The chrome is minimal: a small wordmark, grey nav links and one black pill button. The glow is a background device, so the rest of the page stays quiet and black on white.

**Mood:** editorial, bold, airy, modern, agency

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff1f8f` | Primary action and highlights |
| Second accent | `#ff1f8f` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#1a1a1a` · `#6b7280` · `#fafafa` · `#9ca3af` · `#4b5563` · `#3a86ff` · `#ff6b35` · `#ff1f8f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** JetBrains Mono, Manrope
- **Scale (largest breakpoint):** h2 24px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-none`, `shadow-sm`, `shadow-lg`
- **Content width:** `max-w-[82.5rem]`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#1A1A1A] text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-black transition-colors flex items-center gap-2 interactive magnetic z-10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Bento grid (`bento-grid`)
6. Process / steps (`how-it-works`)
7. Dashboard preview (`dashboard-preview`)
8. Stats band (`stats`)
9. Case studies (`case-studies`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #000000;
  --color-text: #111111;
  --color-muted: #000000;
  --color-border: #000000;
  --color-accent: #ff1f8f;
  --color-accent-2: #ff1f8f;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#000000',
    ink: '#111111',
    muted: '#000000',
    line: '#000000',
    accent: '#ff1f8f',
    accent2: '#ff1f8f',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the page ground at #fafafa and use the pink glow only as a hero background.
- **Do:** Use black pill buttons for the primary action in the navbar and in sections.
- **Do:** Set headings and body in Manrope, black on the light ground.
- **Don't:** Don't place the pink glow behind body text or small nav links.
- **Don't:** Don't use the blue (#3a86ff) as a visible accent; it does not appear on the first screen.
- **Don't:** Don't turn the hero dark; the template is built black on white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
