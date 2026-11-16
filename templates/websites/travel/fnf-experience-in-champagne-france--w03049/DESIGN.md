# Design system — FNF Experience in Champagne, France

`SN-W03049` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A quiet luxury travel page on warm off-white (#fbfbf9) with near-black text (#1d1d1f). The headline pairs a regular-weight Cormorant Garamond line with an italic line in warm tan (#c2b29a), and that contrast carries the page. Inter handles body copy and labels, and the hero fades into a light gradient, so the page feels airy and unhurried.

**Mood:** refined, quiet, editorial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbfbf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1d1d1f` | Headings and primary copy |
| Muted text | `#86868b` | Secondary copy, captions |
| Border | `#e0d6c8` | Hairlines, dividers, outlines |
| Accent | `#c2b29a` | Primary action and highlights |

Palette by frequency of use: `#86868b` · `#1d1d1f` · `#c2b29a` · `#ffffff` · `#e0d6c8` · `#f1efe7` · `#fbfbf9` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 48px · body 12px
- **Weights in use:** light, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-[3rem]` (3rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.04)]`
- **Content width:** `max-w-2xl`, `max-w-screen-xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-xs font-light uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors duration-500 backdrop-blur-md bg-white/10 px-6 py-3 rounded-full border border-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Timeline (`timeline`)
4. Booking form (`booking`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fbfbf9;
  --color-surface: #ffffff;
  --color-text: #1d1d1f;
  --color-muted: #86868b;
  --color-border: #e0d6c8;
  --color-accent: #c2b29a;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbfbf9',
    surface: '#ffffff',
    ink: '#1d1d1f',
    muted: '#86868b',
    line: '#e0d6c8',
    accent: '#c2b29a',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in italic Cormorant Garamond in tan (#c2b29a)
- **Do:** Keep backgrounds off-white (#fbfbf9) and borders warm (#e0d6c8)
- **Do:** Use Inter for labels and body copy under the serif headlines
- **Don't:** Don't set headlines in bold; the serif stays light and regular
- **Don't:** Don't introduce saturated accent colours
- **Don't:** Don't add dark sections; the page reads light from top to bottom

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
