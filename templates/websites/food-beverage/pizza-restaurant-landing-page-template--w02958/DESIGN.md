# Design system — Pizza Restaurant Landing Page Template

`SN-W02958` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A bold dark pizzeria hero on near-black (#111111) with a heavy white sans headline in all caps, the name's second word set in red (#d62828). Red filled buttons and a grey outline button sit under a short quotation, and the whole page is flat with no imagery in the first screen. The red is the only colour, so it reads as a clear signal for the primary action.

**Mood:** bold, dark, direct, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111111` | Page ground |
| Surface | `#161616` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d62828` | Primary action and highlights |

Palette by frequency of use: `#161616` · `#ffffff` · `#f5f5f5` · `#d4d4d4` · `#d62828` · `#a3a3a3` · `#111111` · `#737373` · `#ff4d4d` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_20px_rgba(214,40,40,0.4)]`, `shadow-[inset_0_0_100px_rgba(17,17,17,1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-sm font-semibold tracking-wide bg-[#d62828]/10 text-[#d62828] px-5 py-2.5 rounded-full border border-[#d62828]/20 hover:bg-[#d62828] hover:text-white hover:border-[#d62828] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Menu list (`menu-list`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111111;
  --color-surface: #161616;
  --color-text: #f5f5f5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #d62828;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111111',
    surface: '#161616',
    ink: '#f5f5f5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#d62828',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy uppercase white sans with one red (#d62828) word
- **Do:** Use red filled buttons for the primary action and a dark grey outline for the secondary
- **Do:** Keep the hero quotation short and centred under the headline
- **Don't:** Don't use red for body text or large areas
- **Don't:** Don't add gradients; the page is flat
- **Don't:** Don't set the headline in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
