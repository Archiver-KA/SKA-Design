# Design system — AI Sales Platform Landing Page Template

`SN-W00150` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Split hero with a near-black text column on the left and a saturated lime panel (#c6f91f) on the right holding a dark dashboard card. The left column carries a large white sans headline with its middle word in grey, and the lime is the only colour on the page.

**Mood:** bold, high-contrast, sharp, techy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05080a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c6f91f` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c6f91f` · `#94a3b8` · `#64748b` · `#05080a` · `#000000` · `#cbd5e1` · `#475569` · `#334155` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 18px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_5.7px_8.6px_rgba(0,_0,_0,_0.07),_0_13.7px_10.9px_rgba(0,_0,_0,_0.099),_0_25.7px_20.5px_rgba(0,_0,_0,_0.123),_0_45.8px_36.6px_rgba(0,_0,_0,_0.147),_0_85.8px_68.5px_rgba(0,_0,_0,_0.176),_0_205px_163.4px_rgba(0,_0,_0,_0.246)]`, `shadow-[0_0_10px_#c6f91f]`, `shadow-[0_0_15px_rgba(198,249,31,0.1)]`
- **Content width:** `max-w-2xl`, `max-w-6xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="w-full py-3 px-4 text-sm font-medium font-geist text-white/80 border border-white/5 rounded-lg bg-white/[0.02] hover:bg-[#c6f91f] hover:border-[#c6f91f] hover:text-black transition-all duration-200 reveal-on-scroll">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Footer (`footer`)
4. Dashboard preview (`dashboard-preview`)
5. Logo cloud (`logo-cloud`)
6. Testimonials (`testimonials`)
7. Video / media (`video-media`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #05080a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #c6f91f;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05080a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#c6f91f',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Split the hero into a dark text column and a solid lime (#c6f91f) panel
- **Do:** Set the headline in white sans, with the middle word in grey
- **Do:** Place the product dashboard card on the lime panel as a dark card
- **Don't:** Don't use lime for text on white; the contrast is poor
- **Don't:** Don't add a third colour to the split hero
- **Don't:** Don't soften the split with gradients

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
