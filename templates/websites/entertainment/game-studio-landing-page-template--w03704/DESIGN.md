# Design system — Game Studio Landing Page Template

`SN-W03704` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black stage with a classic serif headline in white, and a second line in amber (#f59e0b) that shifts from orange to yellow. A small outlined pill sits above the title, and the body copy is a quiet light-grey sans. A solid white primary button and a dark outlined secondary keep the call to action clear without any ornament.

**Mood:** epic, warm, classic, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f59e0b` | Primary action and highlights |
| Second accent | `#1e3a8a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#0a0a0a` · `#171717` · `#f59e0b` · `#a3a3a3` · `#262626` · `#fbbf24` · `#404040` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group relative px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide rounded-sm overflow-hidden transition-all hover:bg-neutral-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Bento grid (`bento-grid`)
5. Timeline (`timeline`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
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
  --color-accent: #f59e0b;
  --color-accent-2: #1e3a8a;
  --font-display: "Playfair Display", serif;
  --font-body: "Geist", sans-serif;
  --radius: 2px;
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
    accent: '#f59e0b',
    accent2: '#1e3a8a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in a serif, in amber (#f59e0b)
- **Do:** Pair a solid white primary button with a dark outlined secondary
- **Do:** Put a small outlined pill label above each headline
- **Don't:** Don't use a bright or saturated page background
- **Don't:** Don't set body copy in a serif
- **Don't:** Don't add more than one amber highlight per headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
