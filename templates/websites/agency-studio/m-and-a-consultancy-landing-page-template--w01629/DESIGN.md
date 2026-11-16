# Design system — M&A Consultancy Landing Page Template

`SN-W01629` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A restrained M&A advisory page on dark charcoal (#27272a). The large light sans headline is white, and its second line fades into grey, so the emphasis is a shift of tone rather than colour. The palette is almost entirely neutral, with white pill buttons and a thin grey rule under the navigation. The palette has no accent, so the page reads as formal and quiet.

**Mood:** formal, quiet, premium, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#27272a` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#52525b` · `#a1a1aa` · `#27272a` · `#18181b` · `#d4d4d8` · `#3f3f46` · `#000000` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors duration-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Team (`team`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. FAQ (`faq`)
9. Booking form (`booking`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #27272a;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#27272a',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a light sans, white, with the second line in a grey gradient
- **Do:** Use white pill buttons for the primary action and outline for the secondary
- **Do:** Keep the palette neutral: grey and white only
- **Don't:** Don't introduce the lavender accent (#c084fc) into the hero
- **Don't:** Don't set small body copy in pure white
- **Don't:** Don't use shadows; depth comes from tonal surfaces

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
