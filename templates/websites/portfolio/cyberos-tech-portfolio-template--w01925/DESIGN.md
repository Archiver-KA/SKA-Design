# Design system — CyberOS Tech Portfolio Template

`SN-W01925` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with neon accents in cyan (#00f3ff) and violet (#bc13fe), used as gradient text inside a bold sans headline. The accent colours carry emphasis on single words rather than whole blocks, and the rest of the headline stays white. Outlined buttons, one cyan-ringed primary, and a row of large numeric stats complete a look built for a technical audience.

**Mood:** neon, technical, futuristic, dark, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#07070a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#8a8a9e` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00f3ff` | Primary action and highlights |
| Second accent | `#bc13fe` | Supporting highlights |

Palette by frequency of use: `#00f3ff` · `#ffffff` · `#bc13fe` · `#8a8a9e` · `#07070a` · `#000000` · `#00ff66` · `#ff003c` · `#fac775`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h2 48px · h3 24px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-neon`, `shadow-neon"`, `shadow-neon-strong`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden rounded-lg border border-[#00f3ff]/50 bg-[#00f3ff]/10 px-5 py-2 text-sm font-semibold text-[#00f3ff] transition-all hover:shadow-neon md:inline-block">…</a>
```

## Motion, effects and stack

- **Effects:** gradient fills, large blurred glow shapes
- **Libraries:** Three.js, Framer Motion, React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #07070a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #8a8a9e;
  --color-border: #ffffff;
  --color-accent: #00f3ff;
  --color-accent-2: #bc13fe;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#07070a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#8a8a9e',
    line: '#ffffff',
    accent: '#00f3ff',
    accent2: '#bc13fe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#00f3ff) and violet (#bc13fe) gradient text only on key words in the headline
- **Do:** Set the primary button as an outlined cyan control on dark glass
- **Do:** Show metrics as large white numerals with small labels underneath
- **Don't:** Don't colour whole paragraphs in neon; body text stays white or grey
- **Don't:** Don't use more than two neon hues in one view
- **Don't:** Don't add light backgrounds; the page is near-black throughout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
