# Design system — Product Designer Portfolio Template

`SN-W02192` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Editorial black page: a pure black ground (#000000) with large off-white serif headlines, and a subhead set in a regular sans. A slim left nav column and a right-hand vertical icon rail frame the hero and keep the reading line clear. Colour is absent beyond white and grey, so the typography carries the design.

**Mood:** editorial, monochrome, serif, minimal, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#d4d4d4` · `#171717` · `#a3a3a3` · `#34d399` · `#404040` · `#000000` · `#737373` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Playfair Display, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 110px · h2 64px · h3 24px · body 30px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)]`, `shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-xs font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-700 hover:scale-105 transition-all duration-200 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Navigation bar (`navbar`)
3. Case studies (`case-studies`)
4. Process / steps (`how-it-works`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero name in a large serif in white, roman weight
- **Do:** Keep the left nav as a small vertical sans list in grey
- **Do:** Place the vertical icon rail on the right edge only
- **Don't:** Don't use the grey page ground (#404040); the ground is black.
- **Don't:** Don't set headlines in bold sans
- **Don't:** Don't add colour; the page is black and white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
