# Design system — Ethiopian Adventure Travel Landing Page Template

`SN-W03045` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black brown stage with a faint checkered texture, centred over a bold white sans headline on two lines. The word 'Highland' is set in italic burnt orange (#d97706) and carries the page's warmth, while the nav is a dark rounded pill with a small orange logo mark. Muted grey subtext and a small orange label keep the palette restrained.

**Mood:** warm, cinematic, bold, earthy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080504` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d97706` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#f59e0b` · `#71717a` · `#a1a1aa` · `#f4f4f5` · `#d97706` · `#080504` · `#0c0a09` · `#78350f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Noto Sans Ethiopic, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 24px · body 12px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-black/80`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Product grid (`product-grid`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #080504;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #d97706;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080504',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans, with the key word in italic burnt orange (#d97706)
- **Do:** Keep the ground near-black brown (#080504) with the faint texture
- **Do:** Use orange for one headline word and the small eyebrow label only
- **Don't:** Don't use camel brown (#78350f) as a flat background; the ground is near-black.
- **Don't:** Don't set the headline in pale yellow; the text is white
- **Don't:** Don't colour more than one headline word orange

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
