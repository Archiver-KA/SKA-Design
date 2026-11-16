# Design system — AI Engineer Portfolio Landing Page Template

`SN-W01776` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A black page with a large white Inter headline, where the phrase 'IA Generativa' carries a blue-to-lavender gradient fill. A glowing circular emblem with the name sits above the headline, and a solid blue-lit primary button sits below beside a dark outlined secondary. The gradient text and glow give the hero a technical, AI-themed tone.

**Mood:** luminous, technical, dark, gradient

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#38bdf8` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#0ea5e9` · `#000000` · `#737373` · `#38bdf8` · `#d4d4d4` · `#262626` · `#818cf8` · `#a855f7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Montserrat, Geist, Roboto, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_40px_8px_rgba(56,189,248,0.35)]`, `shadow-[0_8px_40px_rgba(56,189,248,0.25)]`, `shadow-[0_0_15px_rgba(56,189,248,0.5)]`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Modal / overlay (`modal-overlay`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Feature grid (`features`)
6. Schedule (`schedule-agenda`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #38bdf8;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#38bdf8',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlight phrase with a blue (#38bdf8) gradient fill, not a solid colour.
- **Do:** Keep the glowing emblem centred above the headline.
- **Do:** Use the solid blue primary button with a dark outlined secondary.
- **Don't:** Don't add gradient fills to body text; keep them to the highlight phrase.
- **Don't:** Don't use a light background; the glow depends on black.
- **Don't:** Don't add a second highlight colour beside the blue.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
