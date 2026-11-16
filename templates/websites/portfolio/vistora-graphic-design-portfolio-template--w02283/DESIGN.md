# Design system — Vistora Graphic Design Portfolio Template

`SN-W02283` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A light page with a high-contrast pairing: a light grey italic serif sits above a heavy sans headline. Rose (#f43f5e) is used as a hand-drawn underline under one key word, not as a fill. The gradient artwork panel is the only large colour block, so the rest of the page stays restrained and editorial.

**Mood:** editorial, restrained, bold, light, contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9fafb` | Page ground |
| Surface | `#111827` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#111827` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#ffedd5` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#f3f4f6` · `#d1d5db` · `#9ca3af` · `#f9fafb` · `#f43f5e` · `#6b7280` · `#4b5563` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 30px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_2px_20px_rgba(0,0,0,0.02)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="group bg-gray-900 text-white text-xs tracking-wide uppercase px-5 py-3 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center gap-2 font-montserrat font-bold">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Process / steps (`how-it-works`)
6. Team (`team`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9fafb;
  --color-surface: #111827;
  --color-text: #111111;
  --color-muted: #111827;
  --color-border: #f3f4f6;
  --color-accent: #e11d48;
  --color-accent-2: #ffedd5;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9fafb',
    surface: '#111827',
    ink: '#111111',
    muted: '#111827',
    line: '#f3f4f6',
    accent: '#e11d48',
    accent2: '#ffedd5',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline word in light italic serif and the second in heavy sans
- **Do:** Use the rose underline under one key word per hero
- **Do:** Let the artwork panel carry the saturated colour
- **Don't:** Don't fill the page background with rose or a gradient
- **Don't:** Don't underline more than one phrase per section
- **Don't:** Don't set the headline in a single weight; the weight contrast is the point

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
