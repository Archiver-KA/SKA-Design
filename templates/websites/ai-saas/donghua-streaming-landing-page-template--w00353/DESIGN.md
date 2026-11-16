# Design system — Donghua Streaming Landing Page Template

`SN-W00353` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic streaming hero on black, where the title is set in Cinzel, a classical serif in all caps with a silver gradient fading from white to grey. A saturated red (#ff334b) marks the primary Play button and the quality badge, and the rest of the screen is black with grey copy, so the artwork supplies the colour. Buttons have small corner radii.

**Mood:** cinematic, dramatic, dark, classical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff334b` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ff334b` · `#000000` · `#050505` · `#e60023` · `#121212` · `#333333` · `#27272a` · `#0a0a0a` · `#151515`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Inter
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 18px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-[0_0_30px_rgba(255,51,75,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-neon text-white font-semibold text-sm tracking-wide rounded overflow-hidden shadow-[0_0_30px_rgba(255,51,75,0.3)] hover:shadow-[0_0_50px_rgba(255,51,75,0.5)] transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ff334b;
  --font-display: "Cinzel", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#000000',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ff334b',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set titles in Cinzel caps with a silver gradient
- **Do:** Use red (#ff334b) for the play button and quality badges only
- **Do:** Keep hero text left-aligned on black, with the artwork as the colour source
- **Don't:** Don't use red over large areas
- **Don't:** Don't put body copy in all caps
- **Don't:** Don't add light backgrounds to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
