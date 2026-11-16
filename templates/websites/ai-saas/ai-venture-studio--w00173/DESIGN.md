# Design system — AI Venture Studio 

`SN-W00173` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Stark monochrome page on white with a heavy grotesque headline in black, and its second line set in mid-grey for a two-tone statement. The primary button is solid black beside an outlined secondary, and a small monospace status tag sits above the headline. The stats strip below the hero uses bold numerals with small caps labels, and colour appears only in the logo mark.

**Mood:** bold, monochrome, confident, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#52525b` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#000000` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#000000` · `#e4e4e7` · `#ffffff` · `#2563eb` · `#fafafa` · `#52525b` · `#a1a1aa` · `#f4f4f5` · `#71717a` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-wider`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-zinc-200/50`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="text-xs font-mono border px-4 py-2 rounded transition-all uppercase tracking-wide border-brand-border text-brand-text hover:bg-black hover:text-white hover:border-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Process / steps (`how-it-works`)
6. Team (`team`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #27272a;
  --color-text: #000000;
  --color-muted: #52525b;
  --color-border: #e4e4e7;
  --color-accent: #000000;
  --color-accent-2: #f59e0b;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#27272a',
    ink: '#000000',
    muted: '#52525b',
    line: '#e4e4e7',
    accent: '#000000',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans-serif, black, with the second line in mid-grey
- **Do:** Use the solid black button as the primary action and an outlined button as the secondary
- **Do:** Keep the page on white with black and grey type and no gradients or glows
- **Don't:** Don't set the page on a dark background; the ground is white
- **Don't:** Don't add gradients or glows; the look is flat and typographic
- **Don't:** Don't use a serif for headlines; the display is a heavy sans-serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
