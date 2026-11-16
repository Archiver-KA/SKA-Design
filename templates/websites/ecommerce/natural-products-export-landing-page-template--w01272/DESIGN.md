# Design system — Natural Products Export Landing Page Template

`SN-W01272` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A calm, natural-toned landing page on off-white (#fafaf9) with near-black text (#1c1917) and one olive accent (#a3b14b). The headline is large and tightly set in Inter, and its second line is coloured olive to carry the idea of nature meeting markets. Soft radial glows and pill-shaped buttons keep the page airy rather than rustic.

**Mood:** natural, airy, premium, calm, earthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#a3b14b` | Primary action and highlights |

Palette by frequency of use: `#a3b14b` · `#ffffff` · `#1c1917` · `#e5e5e5` · `#78716c` · `#a3a3a3` · `#fafafa` · `#e7e5e4` · `#737373` · `#0a140c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[#A3B14B]/20`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full md:w-auto bg-[#A3B14B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#8f9c40] transition-all shadow-xl shadow-[#A3B14B]/20 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Process / steps (`how-it-works`)
5. Feature grid (`features`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #78716c;
  --color-border: #e5e5e5;
  --color-accent: #a3b14b;
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
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#78716c',
    line: '#e5e5e5',
    accent: '#a3b14b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use olive (#a3b14b) for the key headline phrase and the primary button only
- **Do:** Keep the page background at #fafaf9 with white cards on top
- **Do:** Set headlines in Inter with tight tracking and the second line in olive
- **Don't:** Don't add more greens; the palette is olive plus neutrals
- **Don't:** Don't use square buttons; the CTAs are pills
- **Don't:** Don't turn section backgrounds dark; the page stays light

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
