# Design system — Car Detailing Landing Page Template

`SN-W03853` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark hero over a darkened photograph of a car, with a bold white sans-serif headline whose second line is set in lime (#a3e635). A solid lime button leads the actions, paired with a dark outline button, and a short grey paragraph explains the service. The photograph stays in shadow so the type and the lime button carry the composition.

**Mood:** dark, energetic, automotive, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#27272a` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#a3e635` · `#ffffff` · `#27272a` · `#18181b` · `#09090b` · `#a1a1aa` · `#d4d4d8` · `#71717a` · `#3f3f46` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_15px_rgba(163,230,53,0.3)]`, `shadow-2xl`, `shadow-[0_0_20px_rgba(163,230,53,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-zinc-950 bg-lime-400 rounded-full hover:bg-lime-500 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Bento grid (`bento-grid`)
6. Process / steps (`how-it-works`)
7. Testimonials (`testimonials`)
8. Pricing (`pricing`)
9. Timeline (`timeline`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #27272a;
  --color-accent: #a3e635;
  --color-accent-2: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#27272a',
    accent: '#a3e635',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in lime (#a3e635).
- **Do:** Use the lime for the primary button and the small status line only.
- **Do:** Keep the car photograph darkened behind the hero copy.
- **Don't:** Don't set body copy in lime.
- **Don't:** Don't brighten the photograph behind the headline.
- **Don't:** Don't add a second bright accent colour beside the lime.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
