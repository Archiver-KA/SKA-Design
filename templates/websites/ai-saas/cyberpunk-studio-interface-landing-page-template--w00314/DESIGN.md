# Design system — Cyberpunk Studio Interface Landing Page Template

`SN-W00314` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, industrial service page on black [#000000], with a bold white heading whose second word is set in red. Five service sections sit as slanted, dimmed photo panels, each with a large numeral in the corner and a short description. Red appears only in the heading accent and a thin vertical rule at the left edge, which gives the page a hard, technical tone.

**Mood:** industrial, hard-edged, technical, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#262626` · `#ffffff` · `#000000` · `#a3a3a3` · `#737373` · `#525252` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Orbitron
- **Body:** Rajdhani
- **Loaded families:** Orbitron, Rajdhani
- **Scale (largest breakpoint):** h2 60px · h3 24px · body 14px
- **Weights in use:** bold, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(220,38,38,0.1)]`, `shadow-[0_0_20px_rgba(220,38,38,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="mt-4 md:mt-0 bg-transparent -skew-x-12 border border-crimson-600 text-crimson-600 hover:bg-crimson-600 hover:text-white transition-all duration-300 px-8 py-3 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Services (`services`)
3. Process / steps (`how-it-works`)
4. Case studies (`case-studies`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #262626;
  --font-display: "Orbitron", sans-serif;
  --font-body: "Rajdhani", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#737373',
    line: '#262626',
  },
  fontFamily: { display: ['Orbitron'], sans: ['Rajdhani'] },
} }
```

## Do and don't

- **Do:** Set section headings in heavy uppercase, with one word in red
- **Do:** Use slanted, dimmed image panels for service cards with large numerals in the corner
- **Do:** Keep the red to the heading accent and a single vertical rule
- **Don't:** Don't use red for card backgrounds
- **Don't:** Don't brighten the photo panels above their dimmed treatment
- **Don't:** Don't set this page on white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
