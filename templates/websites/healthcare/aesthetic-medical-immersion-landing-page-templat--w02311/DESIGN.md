# Design system — Aesthetic Medical Immersion Landing Page Template

`SN-W02311` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A near-black page with a blurred, warm-lit photograph behind a large serif headline in white, where the middle phrase switches to a light italic in warm beige. A thin date pill sits above the headline, and a short benefit list in two columns sits under the copy. The beige button is the only solid colour, so the page reads as a premium live sales page.

**Mood:** premium, intimate, dark, editorial, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#7f1d1d` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#d4d4d8` · `#7f1d1d` · `#71717a` · `#050505` · `#2a2a2a` · `#3f3f3f` · `#e4e4e7` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tighter`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium tracking-widest uppercase bg-transparent border border-brand-accent/30 text-brand-accent hover:bg-brand-accent hover:text-brand-black transition-colors duration-300 rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #7f1d1d;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#7f1d1d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in serif, with the key phrase in light italic beige
- **Do:** Use the beige button as the only solid colour in the hero
- **Do:** Keep the benefit list in two short columns under the copy
- **Don't:** Don't use the oxblood (#7f1d1d) as a background.
- **Don't:** Don't put bright photography behind the white headline
- **Don't:** Don't add a second solid button to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
