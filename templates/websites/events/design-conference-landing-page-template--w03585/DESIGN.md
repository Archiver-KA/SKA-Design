# Design system — Design Conference Landing Page Template

`SN-W03585` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The design summit page is dark and editorial, set on black (#000000). Its headline runs in three steps, from grey to white to a lavender (#bfa0e0) final line that carries the title. Diagonal hatch lines cross one side of the hero, and small uppercase labels with hairline dashes organise the details. Lavender is the single accent and appears only on the key headline line.

**Mood:** moody, editorial, dark, graphic, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#bfa0e0` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#bfa0e0` · `#000000` · `#a1a1aa` · `#71717a` · `#52525b` · `#27272a` · `#09090b` · `#f4f4f5` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Space Grotesk
- **Loaded families:** Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 16px
- **Weights in use:** normal, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_10px_#bfa0e0]`, `shadow-[0_0_15px_#bfa0e0]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-12`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-[#bfa0e0] text-zinc-950 text-sm font-medium tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Team (`team`)
6. Schedule (`schedule-agenda`)
7. Map / location (`map-location`)
8. Sign-in form (`auth-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #27272a;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #bfa0e0;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Space Grotesk", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#27272a',
    ink: '#ffffff',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#bfa0e0',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Space Grotesk'] },
} }
```

## Do and don't

- **Do:** Set the final headline line in lavender (#bfa0e0) and keep the rest white or grey
- **Do:** Use diagonal hatch lines as the only graphic texture, on one side of the hero
- **Do:** Keep labels in small uppercase with wide tracking beside the body copy
- **Don't:** Don't use lavender for buttons or body copy
- **Don't:** Don't add a second accent hue
- **Don't:** Don't place the hatch texture behind running text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
