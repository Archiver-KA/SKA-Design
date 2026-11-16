# Design system — Creative Studio Landing Page Template

`SN-W01499` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-white page (#ffffff) with a very heavy, tightly set sans headline in near-black, where the phrase 'vibe-coded' is filled with a pink gradient that spills out of a large blurred glow at the top right. The glow is the page's only colour and sits behind the copy, not on it. A small monospace eyebrow sits above the headline, and a black pill button closes the nav.

**Mood:** bold, modern, airy, playful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
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

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
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
    background: '#ffffff',
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

- **Do:** Set the headline very heavy and tightly leaded in near-black, and fill one phrase with the pink gradient.
- **Do:** Keep the glow in the top-right corner behind the copy, never over body text.
- **Do:** Use a black solid pill for the nav button and small monospace eyebrows above headlines.
- **Don't:** Don't use the blue (#3a86ff); the accent is pink.
- **Don't:** Don't put the pink on body copy.
- **Don't:** Don't set the page on a black background; it is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
