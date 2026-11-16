# Design system — 8Zamania - Sitios Web con AI

`SN-W00007` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `es`

## Direction

A near-black hero has one large centred headline in a silver-to-white gradient, which carries most of the visual weight. Red (#ef4444) stays small, appearing in the eyebrow tag above the headline, while the body text is a muted slate grey. The page is restrained, with faint dark textures at the bottom edge rather than bright imagery.

**Mood:** bold, dark, restrained, authoritative

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ef4444` · `#94a3b8` · `#64748b` · `#050505` · `#e2e8f0` · `#080808` · `#0a0a0a` · `#475569` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_30px_rgba(255,255,255,0.15)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="reveal delay-100 px-8 py-4 bg-white text-black text-sm font-semibold rounded hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] inline-flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Modal / overlay (`modal-overlay`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Centre the hero headline and set it in a metallic white-to-grey gradient
- **Do:** Use the red (#ef4444) only for the eyebrow tag and key calls to action
- **Do:** Keep body text in slate grey (#94a3b8) below the headline
- **Don't:** Don't place bright imagery behind the headline
- **Don't:** Don't use red for large section backgrounds
- **Don't:** Don't add light cards to the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
