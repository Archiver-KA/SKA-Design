# Design system — AI Digital Systems Studio Landing Page Template

`SN-W00088` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Psycho Maker is a dark, plain studio page on a deep navy-black ground, with a large light Inter headline on the left and a short paragraph on the right. The layout is a two-column grid with thin, low-contrast rules and pill-shaped buttons. The light blue accent (#93c5fd) is used only for small details, and the hero is set mainly in type.

**Mood:** dark, plain, editorial, understated, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#93c5fd` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#cbd5e1` · `#a1a1aa` · `#93c5fd` · `#e2e8f0` · `#000000` · `#64748b` · `#020617` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, normal, bold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-[70%]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium font-geist hover:bg-neutral-100 transition">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Logo cloud (`logo-cloud`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Articles (`blog-articles`)
8. Feature grid (`features`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #111111;
  --color-text: #f1f5f9;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #93c5fd;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#111111',
    ink: '#f1f5f9',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#93c5fd',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter at a large size on the deep navy ground (#020617)
- **Do:** Use the light blue (#93c5fd) only for small details and labels
- **Do:** Keep the two-column hero grid, with the copy on the right in muted grey
- **Don't:** Don't add gradient fills to the hero; it uses flat colour
- **Don't:** Don't use heavy weights in headlines; they stay light
- **Don't:** Don't place buttons on a coloured background; they sit on the dark ground

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
