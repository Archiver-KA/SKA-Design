# Design system — Social Media Agency Landing Page Template

`SN-W01700` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with a large white sans headline and the word 'actually' in grey italic serif. Two buttons sit under the copy, a white primary and a dark outlined secondary, and a faint phone photo fades in from the bottom edge. Colour is almost absent; the grey serif word is the only emphasis.

**Mood:** dark, quiet, editorial, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#7f1d1d` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#0a0a0a` · `#c084fc` · `#121212` · `#7f1d1d` · `#030303` · `#4ade80` · `#581c87` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/5 px-4 py-2 rounded-full text-xs font-medium text-white transition-all group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Marquee (`marquee`)
6. Bento grid (`bento-grid`)
7. Logo cloud (`logo-cloud`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #7f1d1d;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#e5e7eb',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#7f1d1d',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word in grey italic serif, and keep the rest of the headline white.
- **Do:** Use a solid white primary button beside a dark outlined secondary.
- **Do:** Let a photo fade in from the bottom of the hero rather than sit in a frame.
- **Don't:** Don't use a white background.
- **Don't:** Don't add the lilac accent (#c084fc) to the hero.
- **Don't:** Don't set the emphasised word in bold.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
