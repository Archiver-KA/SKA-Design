# Design system — Kinezjolog Karol Janik

`SN-W02427` · healthcare · dark mode · Sinera Atlas theme `calm` · language `pl`

## Direction

The kinesiology page is navy with one restrained gold accent. The ground is deep navy (#001f3f), the headline is a large white sans, and one gold phrase (#d4af37) carries the main message. The same gold fills the primary button and the outlined kicker label, so the accents match. The page is calm and clinical, and type is its main device.

**Mood:** calm, clinical, restrained, nocturnal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#001f3f` | Page ground |
| Surface | `#011a36` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#001f3f` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#94a3b8` · `#001f3f` · `#64748b` · `#cbd5e1` · `#011a36` · `#000000` · `#fef3c7` · `#00152b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Manrope
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-[#000]/50`, `shadow-[#D4AF37]/20`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-8`, `gap-x-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. FAQ (`faq`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #001f3f;
  --color-surface: #011a36;
  --color-text: #cbd5e1;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #d4af37;
  --color-accent-2: #001f3f;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#001f3f',
    surface: '#011a36',
    ink: '#cbd5e1',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#d4af37',
    accent2: '#001f3f',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Keep the ground deep navy (#001f3f) and set headlines in white sans
- **Do:** Use gold (#d4af37) for one highlighted phrase per headline and for the primary button
- **Do:** Frame small kicker labels in an outlined gold pill
- **Don't:** Don't use gold for body copy; it is for the highlight and the button
- **Don't:** Don't lighten the ground to grey; the navy is the page
- **Don't:** Don't place photography behind the headline; the page relies on type

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
