# Design system — Crypto DeFi Swap Landing Page Template

`SN-W00899` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A neo-brutalist page on an off-white ground (#fafafa) with heavy black outlines and hard black offset shadows around the hero card. The headline is a heavy monospaced face, the body grey monospace, and the primary button is solid orange (#ea580c) with a black border. Thin grid lines sit behind the page, and the steps below use orange blocks. The style is blunt and deliberately raw, and the outline and offset carry the look.

**Mood:** light, brutalist, blunt, technical, orange-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#ea580c` · `#f97316` · `#52525b` · `#18181b` · `#f4f4f5` · `#fafafa` · `#09090b` · `#fff7ed`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** JetBrains Mono
- **Body:** JetBrains Mono
- **Loaded families:** JetBrains Mono
- **Scale (largest breakpoint):** h1 128px · h2 48px · h3 24px · body 16px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`, `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`, `shadow-none`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="flex items-center gap-2 px-5 py-2 border-2 border-black bg-orange-600 text-white text-sm font-semibold hover:bg-orange-500 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-muted: #000000;
  --color-border: #000000;
  --color-accent: #ea580c;
  --font-display: "JetBrains Mono", sans-serif;
  --font-body: "JetBrains Mono", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#111111',
    muted: '#000000',
    line: '#000000',
    accent: '#ea580c',
  },
  fontFamily: { display: ['JetBrains Mono'], sans: ['JetBrains Mono'] },
} }
```

## Do and don't

- **Do:** Draw every card with a heavy black border and a hard black offset shadow
- **Do:** Set headings and body in the monospaced face (JetBrains Mono)
- **Do:** Use solid orange (#ea580c) with a black border for the primary button and step blocks
- **Don't:** Don't use soft shadows or blurred glows; the offset shadow is hard and black
- **Don't:** Don't round the corners of cards or buttons
- **Don't:** Don't use the lighter orange (#f97316) beside the darker orange (#ea580c) in one block

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
