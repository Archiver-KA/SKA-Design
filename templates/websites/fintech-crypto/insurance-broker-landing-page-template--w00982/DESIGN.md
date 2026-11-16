# Design system — Insurance Broker Landing Page Template

`SN-W00982` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `de`

## Direction

A near-black page has a large white serif headline, 'Zukunft', over an italic grey 'Sichern.', which sets an editorial and calm tone. Small uppercase tracked labels and a muted paragraph sit below. Colour is nearly absent, and the page is dark.

**Mood:** editorial, calm, dark, quiet, serif

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#e5e5e5` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1a1a1a` · `#000000` · `#737373` · `#a3a3a3` · `#161616` · `#d4d4d4` · `#34d399` · `#525252` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-none`
- **Content width:** `max-w-[340px]`, `max-w-[90rem]`
- **Common gaps:** `gap-5`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="mt-4 w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group-hover:gap-3 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Team (`team`)
5. Gallery / portfolio (`gallery-portfolio`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #e5e5e5;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#e5e5e5',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the second word in grey italic.
- **Do:** Use small uppercase tracked labels above headlines.
- **Do:** Keep the page ground black with a thin frame around the hero.
- **Don't:** Don't use the lime or violet accents for text.
- **Don't:** Don't set the headline in a geometric sans.
- **Don't:** Don't style this as a light page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
