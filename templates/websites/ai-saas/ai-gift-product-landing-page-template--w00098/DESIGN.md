# Design system — AI Gift Product Landing Page Template

`SN-W00098` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Lumina Gift is a light, warm product page on a pale rose-to-white ground. The headline is bold dark navy (#0f172a) sans, and its second phrase is set in a red-pink gradient (#f43f5e). Three tilted photo cards and a framed device image sit below the hero, so the photographs carry most of the visual interest.

**Mood:** warm, light, gift-like, personal, gentle

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffe4e6` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0f172a` · `#f1f5f9` · `#475569` · `#000000` · `#e2e8f0` · `#64748b` · `#cbd5e1` · `#f8fafc` · `#94a3b8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[1400px]`
- **Common gaps:** `gap-2`, `gap-4`, `gap-1.5`

**Primary button**

```html
<a class="bg-slate-900 text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffe4e6;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffe4e6',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#ffffff',
    accent: '#f43f5e',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold navy (#0f172a) with the key phrase in the red-pink gradient (#f43f5e)
- **Do:** Use the dark navy pill button for the primary action
- **Do:** Show photographs as tilted, bordered cards under the hero
- **Don't:** Don't use the deep wine (#881337) for body text; headlines are navy
- **Don't:** Don't use the red for the primary button; it is for the highlight phrase
- **Don't:** Don't use heavy shadows on the photo cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
