# Design system — Corvin Vision AI Landing Page Template

`SN-W00228` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black hero with a faint warm orange haze in the lower half and a large white sans headline in two lines, set centred over a grid. Thin vertical guide lines with small coordinate labels (X-001, X-002) mark the structure behind the text. The two buttons are a white filled primary and a dark translucent secondary, which keeps the orange as atmosphere rather than as a colour in the UI.

**Mood:** cinematic, architectural, minimal, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fdba74` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#fdba74` · `#050505` · `#f5f5f5` · `#fb923c` · `#f97316` · `#111111` · `#27272a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** Inter
- **Loaded families:** DM Sans, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 36px · body 12px
- **Weights in use:** extralight, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-sm` (2px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-2`, `gap-3`, `gap-10`

**Primary button**

```html
<a class="px-6 py-2 text-xs font-extralight bg-black/60 backdrop-blur-sm rounded-full hover:bg-white/5 transition-all duration-300 font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, React
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fdba74;
  --font-display: "DM Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
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
    accent: '#fdba74',
  },
  fontFamily: { display: ['DM Sans'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white, centred, over a faint grid
- **Do:** Keep the warm haze in the lower part of the hero, behind the buttons
- **Do:** Use a white filled primary button and a dark translucent secondary
- **Don't:** Don't use orange for buttons or text; it is atmosphere only
- **Don't:** Don't put the headline on a busy background
- **Don't:** Don't add more guide lines than the hero shows

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
