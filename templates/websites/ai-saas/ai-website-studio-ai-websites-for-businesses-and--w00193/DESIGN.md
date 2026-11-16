# Design system — AI Website Studio – AI Websites for Businesses & Creators

`SN-W00193` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Dark navy hero on near-black (#030712) with a bold white sans-serif headline whose second line fades into a pale lavender-grey (#818cf8 range). Two buttons sit under the copy: a solid white primary and a dark outlined secondary. A dark browser mock on the right carries indigo-tinted panels and a small code tag, and a faint purple haze fills the top of the page.

**Mood:** dark, polished, clean, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#6366f1` · `#818cf8` · `#0f172a` · `#cbd5e1` · `#030712` · `#64748b` · `#e2e8f0` · `#020617`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-2`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-semibold text-white hover:bg-white/[0.12] transition-all hover:border-white/20 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. Case studies (`case-studies`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #0f172a;
  --color-text: #f5f5f5;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#0f172a',
    ink: '#f5f5f5',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans-serif, with the second line in lavender-grey
- **Do:** Use the solid white button as the primary action with a dark outlined secondary
- **Do:** Frame the product mock with dark indigo-tinted panels and thin borders
- **Don't:** Don't use indigo for buttons or text blocks; it tints panels and the haze only
- **Don't:** Don't switch to a light background; the hero is near-black
- **Don't:** Don't add gradients to body copy; it stays muted grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
