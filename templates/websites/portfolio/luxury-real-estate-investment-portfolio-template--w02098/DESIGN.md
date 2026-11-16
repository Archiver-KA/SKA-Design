# Design system — Luxury Real Estate Investment Portfolio Template

`SN-W02098` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark real-estate page: a near-black ground [#050505] with a very large white serif headline over three lines, where the middle word is dimmed to dark grey and the last word is set in italic. A small orange dot [#f97316] and short uppercase captions mark the top of the hero, and the nav stays small and light. Colour is limited to that dot and the white-to-grey type scale.

**Mood:** dark, measured, architectural, elegant, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#d6d3d1` · `#050505` · `#1c1917` · `#44403c` · `#57534e` · `#a8a29e` · `#000000` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 128px · h2 36px · h3 30px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Content width:** `max-w-screen-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Dim the middle word of the headline to dark grey and set the last word in italic.
- **Do:** Use the orange (#f97316) only for the small marker dot and one link per section.
- **Do:** Keep the nav small and light, with the menu as a text label on the right.
- **Don't:** Don't fill the hero with imagery; the first screen is type on black.
- **Don't:** Don't use orange for headline text.
- **Don't:** Don't brighten the ground above #050505.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
