# Design system — Digital Editing & Design Agency Landing Page Template

`SN-W01541` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black hero with a centred white headline and a second line in a lavender-to-violet gradient, which is the one accent on the first screen. Buttons are a white primary and a dark secondary, and a dark product panel sits below the copy showing an editing interface in grey. Pink is not used on the first screen.

**Mood:** dark, lavender, centred, product-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#6366f1` · `#737373` · `#171717` · `#0a0a0a` · `#262626` · `#ec4899` · `#e5e5e5` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-indigo-500/10`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-white text-neutral-950 px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors active:scale-95 transform duration-100">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Video / media (`video-media`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #ec4899;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in the violet gradient (#6366f1 to lavender)
- **Do:** Use white for the primary button and a dark secondary
- **Do:** Show product screens in a dark frame with a thin border
- **Don't:** Don't use pink (#ec4899) in the hero
- **Don't:** Don't use the gradient on body text
- **Don't:** Don't set the product frame lighter than #171717

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
