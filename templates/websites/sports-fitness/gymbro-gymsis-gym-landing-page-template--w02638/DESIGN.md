# Design system — GymBro Gymsis Gym Landing Page Template

`SN-W02638` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A black, forceful gym hero set in italic display type. Heavy italic uppercase headlines stack on two lines, BUILT FOR in white and SAVAGERY in a grey metallic gradient, above a short paragraph with a thin grey rule. A lime header button and status tag are the only colour, beside a grey media panel on the right. Skewed type on pure black keeps it aggressive.

**Mood:** aggressive, industrial, italic, black, forceful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#e879f9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3e635` · `#000000` · `#737373` · `#171717` · `#d4d4d4` · `#262626` · `#a3a3a3` · `#84cc16` · `#22d3ee`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 10px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px), `rounded-none` (0)
- **Shadows:** `shadow-[0_0_10px_#a3e635]`, `shadow-2xl`, `shadow-black/80`
- **Content width:** `max-w-[1400px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="bg-lime-400 text-black px-6 py-3 rounded-none skew-x-[-10deg] hover:bg-lime-300 transition-all duration-300 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Testimonials (`testimonials`)
6. Feature grid (`features`)
7. Pricing (`pricing`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --color-accent-2: #e879f9;
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
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a3e635',
    accent2: '#e879f9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy italic uppercase, with the second word in a grey metallic gradient.
- **Do:** Use lime (#a3e635) for the header button and the status tag only.
- **Do:** Keep the paragraph left-aligned beside a thin grey rule.
- **Don't:** Don't set body copy in italic.
- **Don't:** Don't use the magenta accent in the hero.
- **Don't:** Don't use a light background.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
