# Design system — Wealth Management Landing Page Template

`SN-W02292` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with a large Cormorant Garamond headline set in two tones: black for the first word and slate grey (#64748b) for the second. A small uppercase eyebrow with a short rule sits above it, and a warm photograph fills the right half. The only saturated element is an orange button, which keeps the page restrained and institutional.

**Mood:** institutional, restrained, elegant, precise, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e2e8f0` · `#0f172a` · `#64748b` · `#f1f5f9` · `#f8fafc` · `#94a3b8` · `#cbd5e1` · `#1e293b` · `#eff6ff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 24px · body 14px
- **Weights in use:** bold, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-slate-200/50`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group inline-flex items-center justify-between w-full sm:w-auto h-14 px-8 bg-vivid-500 text-white text-sm font-semibold tracking-wide hover:bg-vivid-600 transition-all duration-300 shadow-lg shadow-vivid-500/30">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0f172a;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #e2e8f0;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0f172a',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#e2e8f0',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Cormorant Garamond with the second line in slate grey (#64748b)
- **Do:** Keep the eyebrow small, uppercase, with a short rule before it
- **Do:** Use the orange button only for the primary action
- **Don't:** Don't place body copy over the bright sunlit part of the photograph without a scrim
- **Don't:** Don't colour the headline words; the type stays black and grey
- **Don't:** Don't add a second accent colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
