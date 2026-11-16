# Design system — Financial Services Executive Search Landing Page Template

`SN-W00938` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy hero sitting under a light grey top bar, with a serif headline in white at large size and a small spaced uppercase eyebrow in grey-blue. The primary button is a solid mid-blue [#234a84] beside a thin outlined secondary. The left column carries the layout and the serif carries the identity.

**Mood:** formal, banking, navy, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1423` | Page ground |
| Surface | `#c7ced8` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#5e6b7d` | Secondary copy, captions |
| Border | `#c7ced8` | Hairlines, dividers, outlines |
| Accent | `#234a84` | Primary action and highlights |

Palette by frequency of use: `#234a84` · `#5e6b7d` · `#1e2430` · `#c7ced8` · `#ffffff` · `#f7f8fa` · `#0b1423`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-3.5 bg-[#234A84] text-[#F7F8FA] text-sm font-medium hover:bg-[#F7F8FA] hover:text-[#0B1423] transition-colors duration-300 border border-[#234A84] hover:border-[#F7F8FA]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Articles (`blog-articles`)
7. Integrations (`integrations`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b1423;
  --color-surface: #c7ced8;
  --color-text: #ffffff;
  --color-muted: #5e6b7d;
  --color-border: #c7ced8;
  --color-accent: #234a84;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b1423',
    surface: '#c7ced8',
    ink: '#ffffff',
    muted: '#5e6b7d',
    line: '#c7ced8',
    accent: '#234a84',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif in white at large size
- **Do:** Use the mid-blue (#234a84) for the primary button only
- **Do:** Keep the eyebrow small, spaced uppercase and grey-blue
- **Don't:** Don't use the light grey top bar as the hero ground
- **Don't:** Don't use bold weights on the serif headline
- **Don't:** Don't fill the right column with decoration that competes with the text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
