# Design system — VIP Comfort Rides 

`SN-W00808` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark luxury-transport page with a large white sans headline, where the closing phrase 'MADE SIMPLE' is set in yellow (#facc15). A yellow button leads the call to action, and a circular price dial with a thin ring sits to the right of the hero. Yellow is used sparingly against clean dark cards and a spacious layout.

**Mood:** luxurious, dark, bold, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |

Palette by frequency of use: `#facc15` · `#ffffff` · `#a1a1aa` · `#09090b` · `#18181b` · `#71717a` · `#d4d4d8` · `#000000` · `#eab308` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 18px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-[0_0_50px_rgba(250,204,21,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="bg-yellow-400 hover:bg-yellow-500 text-zinc-950 px-5 py-2.5 rounded font-medium text-lg transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Bento grid (`bento-grid`)
5. Pricing (`pricing`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #facc15;
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
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#facc15',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the closing phrase of the headline in yellow (#facc15)
- **Do:** Use yellow for the primary button and the price figure
- **Do:** Frame the price in a thin circular ring
- **Don't:** Don't use yellow for large backgrounds
- **Don't:** Don't add serif type; the style is bold sans
- **Don't:** Don't put white text on the yellow button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
