# Design system — Trading Platform Landing Page

`SN-W01057` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, navy-black landing page where the hero headline is a bold sans with a cyan gradient across its words, giving the title a glowing, technical sheen. The primary button is a solid cyan pill, with a dark outlined pill beside it. A soft band of blurred light sits behind the hero, and the cyan is the single accent, used only for the headline and the primary action.

**Mood:** technical, glowing, dark, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111827` | Page ground |
| Surface | `#374151` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#9ca3af` · `#111827` · `#374151` · `#1f2937` · `#000000` · `#ffffff` · `#d1d5db` · `#4b5563` · `#6b7280` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-px`

**Primary button**

```html
<a class="bg-brand-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-brand-400 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #111827;
  --color-surface: #374151;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #374151;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111827',
    surface: '#374151',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#374151',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in bold sans with a cyan gradient across the key words
- **Do:** Use a solid cyan pill for the primary action, with a dark outlined pill beside it
- **Do:** Keep the page ground dark and the cyan to the headline and the primary button
- **Don't:** Don't put the cyan on body text; it is for the headline and the primary action
- **Don't:** Don't add a second accent colour; the page is cyan on dark
- **Don't:** Don't drop the blurred light band behind the hero; it frames the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
