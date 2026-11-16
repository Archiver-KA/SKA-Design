# Design system — PrestamistaPro Ebook Landing Page Template

`SN-W01016` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `es`

## Direction

A dark, calm ebook-sales landing page on near-black (#09090b), with a white bold sans headline whose second line is set in emerald (#10b981). Emerald is the solid primary button and the badge text, and a dark grey button sits beside it as the secondary. A row of three small icons with short labels closes the hero, so the page reads as credible and direct.

**Mood:** credible, dark, direct, calm, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#10b981` · `#ffffff` · `#18181b` · `#a1a1aa` · `#34d399` · `#09090b` · `#71717a` · `#ef4444` · `#064e3b` · `#059669`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)]`, `shadow-xl`, `shadow-[0_0_50px_-15px_rgba(16,185,129,0.1)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-zinc-950 bg-white rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Comparison (`comparison`)
4. Feature grid (`features`)
5. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in emerald (#10b981) and keep the first in white.
- **Do:** Use the emerald solid button for the main call to action and a dark grey button for the secondary.
- **Do:** Keep the three benefit icons in a single row beneath the buttons.
- **Don't:** Don't use emerald for body text.
- **Don't:** Don't add a second bright colour to the hero.
- **Don't:** Don't give the buttons light outlines.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
