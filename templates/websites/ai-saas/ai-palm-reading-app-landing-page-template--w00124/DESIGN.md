# Design system — AI Palm Reading App Landing Page Template

`SN-W00124` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `pl`

## Direction

Mystic dark app page on near-black (#08090d) with a Playfair Display headline in white and an italic gold phrase (#f59e0b) for emphasis. Gold is the only warm colour and appears on the highlighted words and the store button, so the page feels ceremonial rather than techy. A translucent purple glow sits behind the hero, and Inter handles the small text.

**Mood:** mystical, dark, ceremonial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#08090d` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#f59e0b` · `#8b5cf6` · `#08090d` · `#fde68a` · `#000000` · `#cbd5e1` · `#fbbf24` · `#c4b5fd`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-violet-900/20`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2 text-xs font-medium text-amber-200 transition hover:bg-amber-500/20 hover:border-amber-500/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #08090d;
  --color-surface: #000000;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #f59e0b;
  --color-accent-2: #8b5cf6;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#08090d',
    surface: '#000000',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#f59e0b',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display and italicise the emphasised phrase in gold (#f59e0b)
- **Do:** Keep gold to the highlighted words and the store button, one per section
- **Do:** Set body and button text in Inter on the dark ground
- **Don't:** Don't set headlines in Inter; the serif is the page's main character
- **Don't:** Don't fill large areas with gold
- **Don't:** Don't introduce light section backgrounds between the dark sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
