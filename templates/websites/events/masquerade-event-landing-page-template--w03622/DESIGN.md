# Design system — Masquerade Event Landing Page Template

`SN-W03622` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, theatrical event page on a near-black ground with a faint maroon warmth. Large uppercase display type mixes upright and italic lines, with the key words picked out in gold, and the cream text sits beneath in small spaced capitals. Gold is the one colour used with intent: it marks the primary button, the highlighted headline words and the countdown digits.

**Mood:** dramatic, mysterious, luxurious, theatrical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0608` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f5e6c8` | Headings and primary copy |
| Muted text | `#c4a4a4` | Secondary copy, captions |
| Accent | `#c9a84c` | Primary action and highlights |
| Second accent | `#8b0000` | Supporting highlights |

Palette by frequency of use: `#c9a84c` · `#c4a4a4` · `#f5e6c8` · `#0a0608` · `#000000` · `#8b0000` · `#1a0a0f` · `#ffffff` · `#1a1114` · `#2a1b20`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Josefin Sans
- **Body:** Josefin Sans
- **Loaded families:** Cormorant Garamond, Josefin Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_15px_30px_rgba(201,168,76,0.08)]`, `shadow-[0_0_15px_rgba(201,168,76,0.5)]`, `shadow-[0_0_20px_rgba(201,168,76,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full py-4 bg-[#C9A84C] text-[#0a0608] uppercase tracking-[0.15em] text-[10px] hover:bg-[#F5E6C8] transition-colors duration-300 rounded-sm font-medium">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Product grid (`product-grid`)
7. Map / location (`map-location`)
8. FAQ (`faq`)
9. Newsletter signup (`newsletter`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0608;
  --color-surface: #000000;
  --color-text: #f5e6c8;
  --color-muted: #c4a4a4;
  --color-accent: #c9a84c;
  --color-accent-2: #8b0000;
  --font-display: "Josefin Sans", sans-serif;
  --font-body: "Josefin Sans", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0608',
    surface: '#000000',
    ink: '#f5e6c8',
    muted: '#c4a4a4',
    accent: '#c9a84c',
    accent2: '#8b0000',
  },
  fontFamily: { display: ['Josefin Sans'], sans: ['Josefin Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase with one italic line and the key words in gold (#c9a84c)
- **Do:** Use the solid gold button for the primary action only
- **Do:** Keep the ground near-black (#0a0608) with cream text (#f5e6c8)
- **Don't:** Don't add bright colours beyond gold and cream
- **Don't:** Don't set long paragraphs in capitals
- **Don't:** Don't use light backgrounds for content sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
