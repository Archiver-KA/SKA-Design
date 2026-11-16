# Design system — Aesthetic Medicine Landing Page Template

`SN-W01764` · portfolio · light mode · Sinera Atlas theme `workshop` · language `cs`

## Direction

An off-white page ([#fafaf9]) with a dark stone headline in Inter, where the second line drops to muted grey ([#a8a29e]) for a two-tone hero. A large tinted photograph on the right is the only colour block, while the navigation and buttons stay neutral and black. Restraint and generous spacing give it a calm, considered stance.

**Mood:** calm, spare, neutral, considered

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#fafaf9` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#57534e` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#57534e` · `#e7e5e4` · `#78716c` · `#a8a29e` · `#bba88e` · `#fafaf9` · `#d6d3d1` · `#292524` · `#f5f5f4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-none` (0)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-12`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-stone-50 text-xs font-medium uppercase tracking-widest hover:bg-stone-800 transition-colors rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #fafaf9;
  --color-text: #1c1917;
  --color-muted: #57534e;
  --color-border: #e7e5e4;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#fafaf9',
    ink: '#1c1917',
    muted: '#57534e',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in dark stone (#1c1917) with the second line in muted grey (#a8a29e).
- **Do:** Keep the navigation and buttons neutral, with one black pill button as the call to action.
- **Do:** Use the photograph as the only colour block on the first screen.
- **Don't:** Don't add a second accent colour; the page uses stone tones.
- **Don't:** Don't round the photograph heavily; it sits as a hard-edged block.
- **Don't:** Don't set the Czech copy in a second typeface.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
