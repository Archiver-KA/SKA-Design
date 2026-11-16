# Design system — SynqorAI Enterprise AI Workflow Template

`SN-W00759` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black hero (#000000) with a light grey sans headline that switches on its second line to warm beige (#d6bfa3) for the phrase 'for Your AI Workflow'. Below it a single outlined button in uppercase, letter-spaced type carries a soft glow, and a small pill tag above has a cyan dot. The restraint of black, pale grey and beige makes the highlighted line the only point of colour.

**Mood:** restrained, technical, premium, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d6bfa3` | Primary action and highlights |
| Second accent | `#7fdbff` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#7fdbff` · `#d6bfa3` · `#94a3b8` · `#64748b` · `#cbd5e1` · `#121212` · `#e2e8f0` · `#1e1e1e` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope, Instrument Serif
- **Scale (largest breakpoint):** h1 100px · h2 60px · h3 18px · body 12px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]`, `shadow-inner`, `shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1.5`

**Primary button**

```html
<a class="px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium tracking-normal">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Process / steps (`how-it-works`)
5. Bento grid (`bento-grid`)
6. Integrations (`integrations`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #121212;
  --color-text: #cbd5e1;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #d6bfa3;
  --color-accent-2: #7fdbff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#121212',
    ink: '#cbd5e1',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#d6bfa3',
    accent2: '#7fdbff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter in two tones, with the second line in warm beige (#d6bfa3)
- **Do:** Use uppercase, letter-spaced labels for the tag and the outline button
- **Do:** Keep the primary button an outline with a soft glow rather than a filled shape
- **Don't:** Don't fill the hero button with colour
- **Don't:** Don't use the cyan (#7fdbff) over large areas; it is a dot-scale accent
- **Don't:** Don't put more than one line of beige text in the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
