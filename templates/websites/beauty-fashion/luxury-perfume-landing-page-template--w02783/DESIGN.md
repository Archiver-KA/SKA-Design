# Design system — Luxury Perfume Landing Page Template

`SN-W02783` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A dark, minimal perfume page on a near-black ground (#0a0a0a). A large centred serif headline in white sits in two lines, with a tiny tracked caption above and a muted grey paragraph below. The only call to action is a ghost outlined button with grey text. Gold (#c6a87c) appears only in small details such as the nav icon, so the page is mostly white, black and grey.

**Mood:** dark, minimal, ceremonial, quiet, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6a87c` | Primary action and highlights |

Palette by frequency of use: `#c6a87c` · `#0a0a0a` · `#ffffff` · `#d4d4d4` · `#737373` · `#a3a3a3` · `#525252` · `#f5f5f5` · `#fdfbf7` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 20px · body 14px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-40`
- **Common gaps:** `gap-16`, `gap-24`, `gap-x-8`

**Primary button**

```html
<a class="group relative px-10 py-5 bg-transparent border border-white/20 text-white text-[11px] tracking-[0.2em] uppercase overflow-hidden hover:border-[#C6A87C] transition-colors duration-500 inline-block">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #c6a87c;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#c6a87c',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large white serif, centred, with tight leading.
- **Do:** Keep the call to action as a ghost outline with muted text, not a solid fill.
- **Do:** Use gold (#c6a87c) only for small details such as the nav icon.
- **Don't:** Don't use a solid gold button; it breaks the quiet tone.
- **Don't:** Don't set body copy in pure white; the paragraph is muted grey.
- **Don't:** Don't add imagery to the hero; the type carries the page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
