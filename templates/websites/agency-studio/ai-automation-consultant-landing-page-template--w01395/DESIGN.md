# Design system — AI Automation Consultant Landing Page Template

`SN-W01395` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A dark, flat page on [#1a1a1a] with a single yellow accent (#ffd700) used for the eyebrow label, the rule under the headline and the text links. The headline is a heavy, uppercase sans set across two lines in white, and the split layout places an image panel on the left. The first screen is blunt and text-led: one accent, no gradients, and no decorative shapes.

**Mood:** blunt, flat, bold, text-led, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1a1a` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#333333` | Hairlines, dividers, outlines |
| Accent | `#ffd700` | Primary action and highlights |

Palette by frequency of use: `#1a1a1a` · `#ffd700` · `#ffffff` · `#333333` · `#262626` · `#f8fafc` · `#d4d4d4` · `#f4f4f4` · `#555555` · `#a3a3a3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 20px
- **Weights in use:** semibold, light, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** none used — square corners
- **Shadows:** `shadow-[10px_10px_0px_0px_rgba(26,26,26,1)]`, `shadow-[0_10px_20px_rgba(0,0,0,0.2)]`
- **Content width:** `max-w-4xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-x-3`, `gap-y-3`, `gap-12`

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Benefits (`benefits`)
3. Services (`services`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN), Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1a1a;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #333333;
  --color-accent: #ffd700;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1a1a',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#333333',
    accent: '#ffd700',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#ffd700) only for the eyebrow label, the rule under the headline, and the text links.
- **Do:** Set headlines uppercase in a heavy sans in white.
- **Do:** Keep the ground flat at #1a1a1a with the split layout.
- **Don't:** Don't add gradients or glow shapes; the page is flat.
- **Don't:** Don't let the left image panel carry the look; the type and yellow rule do.
- **Don't:** Don't use the yellow for large fills; it is a line-and-text accent.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
