# Design system — Fine Dining Restaurant Landing Page Template

`SN-W02896` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, photo-led hero where a dimmed portrait sits behind a centred, plain serif headline in white. Gold (#d4af37) appears only on the header booking button, and the rest is near-black with grey supporting copy. Buttons are sharp outlined rectangles, and the tracked small-caps eyebrow sets a restrained, hospitality tone.

**Mood:** restrained, dark, classic, hospitable, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#d4af37` | Primary action and highlights |

Palette by frequency of use: `#d4af37` · `#ffffff` · `#a3a3a3` · `#0a0a0a` · `#262626` · `#171717` · `#737373` · `#f5f5f5` · `#d4d4d4` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cinzel, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 12px
- **Weights in use:** medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-2`

**Primary button**

```html
<a class="bg-[#D4AF37] text-neutral-950 px-6 py-2.5 text-sm font-medium tracking-wide hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Booking form (`booking`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #262626;
  --color-accent: #d4af37;
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
    line: '#262626',
    accent: '#d4af37',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a centred serif in white, over a darkened photo.
- **Do:** Use the gold (#d4af37) only for the header booking button.
- **Do:** Use small tracked uppercase for eyebrows and secondary buttons.
- **Don't:** Don't brighten the hero photo; the overlay keeps white type readable.
- **Don't:** Don't round the outlined buttons; they have square corners.
- **Don't:** Don't set the headline in Inter; it is a serif display face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
