# Design system — Solid Hard-Asset Infrastructure Landing Page Template

`SN-W00723` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A measured, institutional hero on a near-black ground (#18181b): a very large centred bold sans headline in three stacked lines, the last phrase fading from white into grey. The buttons are restrained, a white pill in the nav and a dark outlined pill in the hero, so the type carries the page.

**Mood:** institutional, measured, stark, precise, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#18181b` | Page ground |
| Surface | `#e4e4e7` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#27272a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ef4444` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f59e0b` · `#71717a` · `#18181b` · `#a1a1aa` · `#27272a` · `#3f3f46` · `#ef4444` · `#000000` · `#e4e4e7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 11px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Booking form (`booking`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #18181b;
  --color-surface: #e4e4e7;
  --color-text: #ffffff;
  --color-muted: #27272a;
  --color-border: #ffffff;
  --color-accent: #ef4444;
  --color-accent-2: #ef4444;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#18181b',
    surface: '#e4e4e7',
    ink: '#ffffff',
    muted: '#27272a',
    line: '#ffffff',
    accent: '#ef4444',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white sans, with the final phrase in a grey gradient.
- **Do:** Keep the nav button white and the hero button dark and outlined.
- **Do:** Centre the hero copy and keep the first screen free of imagery.
- **Don't:** Don't use orange; the hero has no warm colour.
- **Don't:** Don't switch to a light ground; the ground is dark.
- **Don't:** Don't add a bold red accent to buttons.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
