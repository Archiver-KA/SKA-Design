# Design system — AI Strategy Consulting Landing Page Template

`SN-W01425` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero where the headline sets a bold white sans on the first line and a large grey sans on the second, so the second line recedes into the background. Buttons are both white-ish: a solid pale primary and a text-only secondary, with no colour anywhere on the first screen. The large type and the empty space give the page a severe, serious tone.

**Mood:** severe, monochrome, serious, spacious, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#a1a1aa` · `#18181b` · `#09090b` · `#52525b` · `#27272a` · `#e4e4e7` · `#ef4444` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`, `shadow-gold-900/5`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-white text-zinc-950 px-5 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Awards / press (`awards-press`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Product grid (`product-grid`)
7. Logo cloud (`logo-cloud`)
8. Bento grid (`bento-grid`)
9. Process / steps (`how-it-works`)
10. Footer (`footer`)
11. About (`about`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN), Alpine.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the first headline line in white and the second in grey, in the same sans at display size.
- **Do:** Use a solid pale primary button beside a text-only secondary.
- **Do:** Keep the first screen colourless on the near-black ground.
- **Don't:** Don't add a red accent; none is visible on the first screen.
- **Don't:** Don't fill the secondary button; it stays text-only.
- **Don't:** Don't use a light background; the template is near-black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
