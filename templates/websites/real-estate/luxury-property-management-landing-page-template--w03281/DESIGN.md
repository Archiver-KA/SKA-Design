# Design system — Luxury Property Management Landing Page Template

`SN-W03281` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Sober and high-end: a near-black ground (#050505) carries a large white sans headline in two lines, with the second phrase set in italic gold. Gold is kept to that phrase and the outlined header pill, while the buttons are a white filled rectangle and a dark outline. Spacing is wide, copy is short, and the square corners keep the whole page exact.

**Mood:** sober, premium, minimal, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#000000` · `#050505` · `#d4d4d4` · `#a3a3a3` · `#080808` · `#171717` · `#333333` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 36px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-black transition-all duration-300 text-xs font-medium uppercase tracking-widest">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. About (`about`)
5. Booking form (`booking`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Logo cloud (`logo-cloud`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #080808;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#080808',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one phrase per headline in italic gold, and the rest in white.
- **Do:** Keep the primary button a white filled rectangle with dark text.
- **Do:** Use the outlined gold pill only for the header inquiry action.
- **Don't:** Don't use gold for body copy or large fills.
- **Don't:** Don't round the button corners; they are square.
- **Don't:** Don't add a second accent colour beside the gold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
