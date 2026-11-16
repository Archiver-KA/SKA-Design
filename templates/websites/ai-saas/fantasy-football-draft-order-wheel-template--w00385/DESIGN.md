# Design system — Fantasy Football Draft Order Wheel Template

`SN-W00385` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A sports-themed dark navy page with a bold uppercase headline in orange (#fb4f14) and a spinning wheel as the hero visual. The wheel alternates navy and gold (#d4af37) segments, and the orange carries the main button and the pick-count tag. The composition is a two-column hero, with the wheel on the left and a dark draft panel on the right, set on a deep navy ground.

**Mood:** sporty, bold, energetic, dark, game-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#002244` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#0b162c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb4f14` | Primary action and highlights |
| Second accent | `#d4af37` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fb4f14` · `#c8cdd4` · `#d4af37` · `#050a15` · `#002244` · `#ff6a2c` · `#0a1120` · `#0b162c` · `#c93b0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Bebas Neue, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-inner`, `shadow-[0_0_15px_rgba(251,79,20,0.8)]`, `shadow-[0_0_40px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(0,0,0,0.6)]`
- **Content width:** `max-w-[400px]`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full py-3 rounded-xl bg-transparent hover:bg-white/10 text-[15px] font-bold tracking-widest uppercase text-[#C8CDD4] transition-colors shadow-sm flex items-center justify-center gap-2 border border-[#C8CDD4]/40 font-montserrat">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #002244;
  --color-text: #ffffff;
  --color-muted: #0b162c;
  --color-border: #ffffff;
  --color-accent: #fb4f14;
  --color-accent-2: #d4af37;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#002244',
    ink: '#ffffff',
    muted: '#0b162c',
    line: '#ffffff',
    accent: '#fb4f14',
    accent2: '#d4af37',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Use the orange (#fb4f14) for the headline, the primary button and the pick-count tag.
- **Do:** Keep the wheel's navy and gold (#d4af37) segments alternating, with uppercase labels.
- **Do:** Set the page on a deep navy (#002244) ground, with the draft order panel as a dark card.
- **Don't:** Don't use a white background; the page is navy with orange and gold accents.
- **Don't:** Don't add a third colour to the wheel segments.
- **Don't:** Don't set the headline in lowercase; it stays uppercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
