# Design system — Study Abroad Education Landing Page Template

`SN-W03543` · education · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

Education Bridge uses a white ground with a single blue accent (#2563eb), carried through the headline, the primary button and the product cards. Heavy sans-serif headlines are set in near-black, and the key words switch to blue for emphasis. The hero is supported by soft blue light washes and floating mini-cards that show application steps. It reads as a clear, structured process tool.

**Mood:** clear, structured, trustworthy, airy, blue

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#cffafe` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#f1f5f9` · `#2563eb` · `#64748b` · `#f8fafc` · `#1d4ed8` · `#94a3b8` · `#e2e8f0` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-blue-900/5`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. About (`about`)
7. Timeline (`timeline`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --color-accent-2: #cffafe;
  --font-display: "Inter", sans-serif;
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
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#2563eb',
    accent2: '#cffafe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Colour the key words of each headline in blue (#2563eb)
- **Do:** Use blue for the primary button and progress indicators only
- **Do:** Float small status cards over the hero to show process steps
- **Don't:** Don't add a second strong colour to the headline
- **Don't:** Don't use dark backgrounds for hero sections
- **Don't:** Don't make the floating cards dense with text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
