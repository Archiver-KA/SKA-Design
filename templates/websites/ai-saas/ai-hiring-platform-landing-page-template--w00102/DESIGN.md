# Design system — AI Hiring Platform Landing Page Template

`SN-W00102` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Picsume is a dark, product-led hiring page on a near-black ground, with a large white sans headline where the second line is grey and the final word is lavender-to-indigo (#818cf8). Solid white and dark pill buttons sit under the sub-line, and a dark profile card with a green status pill shows the product below. Indigo is used as a single highlight word, not as a colour field.

**Mood:** dark, clean, product-led, modern, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#a1a1aa` · `#27272a` · `#3f3f46` · `#71717a` · `#000000` · `#818cf8` · `#18181b` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-indigo-500/10`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #22c55e;
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
    surface: '#27272a',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in white sans, with the key word in indigo (#818cf8)
- **Do:** Keep the layout centred, with a white primary and dark secondary pill button
- **Do:** Show the product as a dark card with a green status pill
- **Don't:** Don't use indigo (#6366f1) as a page background; the ground is near-black
- **Don't:** Don't add a gradient to the whole headline; the highlight is one word
- **Don't:** Don't use green for buttons; it is only for status

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
