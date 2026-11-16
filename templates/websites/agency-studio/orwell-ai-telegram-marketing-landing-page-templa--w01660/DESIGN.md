# Design system — Orwell AI Telegram Marketing Landing Page Template

`SN-W01660` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `ru`

## Direction

A near-black page with a centred, Russian-language white headline whose second clause fades to grey gradient text, and a wide green (#10b981) pill button below it. Small grey trust lines sit under the button. The design uses a dark, glowing system with green as the single accent.

**Mood:** dark, focused, gradient-led, direct, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#27272a` · `#18181b` · `#71717a` · `#10b981` · `#3f3f46` · `#34d399` · `#d4d4d8` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-[0_0_20px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-[90%]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center px-4 py-2 text-xs font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Comparison (`comparison`)
7. FAQ (`faq`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#ffffff',
    accent: '#10b981',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white, with the second clause in grey gradient text
- **Do:** Use the green (#10b981) for the primary button only
- **Do:** Keep small supporting lines in grey under the button
- **Don't:** Don't use a light background; the ground is near-black
- **Don't:** Don't use the red (#f87171) accent for buttons
- **Don't:** Don't set body copy in the dark grey (#27272a); it will not read on black

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
