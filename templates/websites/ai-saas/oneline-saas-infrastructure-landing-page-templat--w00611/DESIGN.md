# Design system — OneLine SaaS Infrastructure Landing Page Template

`SN-W00611` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black developer landing page where the headline is a large white sans, with the second line in a grey gradient. A white solid pill sits beside a dark outlined button, and a dark code block with a syntax-coloured line of code is the hero illustration. Violet keywords in the code are the only colour, so the page reads as a technical product that lets its own code speak.

**Mood:** technical, minimal, dark, code-led, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#111111` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#000000` · `#525252` · `#c084fc` · `#111111` · `#d4d4d4` · `#0a0a0a` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_10px_rgba(34,197,94,0.4)]`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="text-sm font-medium bg-white text-black px-3.5 py-1.5 rounded-md hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #111111;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #4ade80;
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
    surface: '#111111',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the page ground to black (#000000) with white headlines (#ffffff) and a grey second line.
- **Do:** Put a solid white pill first in every hero, with a dark outlined button beside it.
- **Do:** Show real code in a dark block with a thin border and line numbers as the main illustration.
- **Don't:** Don't use the green (#4ade80) on the first screen beyond the code's string colour; it is not a UI accent.
- **Don't:** Don't add colour to the hero copy; the first screen is monochrome except for the code.
- **Don't:** Don't drop the line numbers from the code block; they are part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
