# Design system — Personal Trainer Professional Template

`SN-W02666` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A dark navy trainer page on #050d1a with large, heavy, uppercase white headlines stacked on the left. The blue (#2979ff) sits in a pill button in the top right and in small eyebrow-line accents, and the type is tight and forceful. The whole hero reads as one continuous navy field.

**Mood:** dark, forceful, navy, direct, tight

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050d1a` | Page ground |
| Surface | `#050d1a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2979ff` | Primary action and highlights |

Palette by frequency of use: `#2979ff` · `#ffffff` · `#b0b0b0` · `#050d1a` · `#f2f2f2` · `#0b1628` · `#6b6b6b` · `#1565c0` · `#1a1a1a` · `#0b3d91`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Barlow Condensed, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 256px · h2 72px · h3 30px · body 14px
- **Weights in use:** extrabold, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_24px_rgba(41,121,255,0.1)]`, `shadow-[0_0_32px_rgba(41,121,255,0.2)]`, `shadow-[0_16px_48px_rgba(0,0,0,0.6)]`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Modal / overlay (`modal-overlay`)
6. Team (`team`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050d1a;
  --color-surface: #050d1a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #2979ff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050d1a',
    surface: '#050d1a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#2979ff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use #050d1a as the page ground and #2979ff for the main button.
- **Do:** Set headlines in heavy uppercase with tight line spacing.
- **Do:** Keep the nav button as the only solid blue above the fold.
- **Don't:** Don't set the page on the bright blue (#2979ff); it is an accent only.
- **Don't:** Don't use dark text on the navy ground.
- **Don't:** Don't use light grey (#b0b0b0) for headlines.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
