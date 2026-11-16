# Design system — AlgeriaRise Community Landing Page Template

`SN-W03567` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

AlgeriaRise is a near-black, warm-brown page where large italic serif headlines do most of the work. The first line fades from cream to grey, and the closing word America is set in gold (#c9a84c). Gold also fills the Apply Now button, while the secondary button is a dark outline. A soft amber glow sits behind the hero copy.

**Mood:** cinematic, warm, dark, elegant, gold-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0906` | Page ground |
| Surface | `#11100b` | Cards, panels, raised areas |
| Text | `#f5f0e8` | Headings and primary copy |
| Border | `#0a0906` | Hairlines, dividers, outlines |
| Accent | `#c9a84c` | Primary action and highlights |

Palette by frequency of use: `#c9a84c` · `#0a0906` · `#f5f0e8` · `#c44b2b` · `#0c0a07` · `#11100b` · `#0e0c08` · `#e8a893`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Syne, Inter
- **Scale (largest breakpoint):** h3 16px · body 14px
- **Weights in use:** semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-[0.3em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0906;
  --color-surface: #11100b;
  --color-text: #f5f0e8;
  --color-border: #0a0906;
  --color-accent: #c9a84c;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0906',
    surface: '#11100b',
    ink: '#f5f0e8',
    line: '#0a0906',
    accent: '#c9a84c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key word of the headline in gold (#c9a84c) italic serif
- **Do:** Use gold for the primary button and the single emphasis word
- **Do:** Keep the hero on near-black with a soft warm glow behind the copy
- **Don't:** Don't use sans-serif for headlines
- **Don't:** Don't add a second accent colour
- **Don't:** Don't use light backgrounds for the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
