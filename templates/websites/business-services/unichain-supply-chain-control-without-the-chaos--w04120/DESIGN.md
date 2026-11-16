# Design system — UniChain | Supply chain control without the chaos

`SN-W04120` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black page with a large serif headline in white, where the second line is set in italic slate blue-grey (#94a3b8). The primary button is solid white beside an outline button, and a faint row of uppercase partner names sits below the hero. The composition is restrained and editorial, with contrast carried by the type.

**Mood:** editorial, restrained, dark, serif-led, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#334155` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#94a3b8` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#94a3b8` · `#34d399` · `#64748b` · `#cbd5e1` · `#000000` · `#fbbf24` · `#334155` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-white text-black text-xs font-medium px-4 py-2 rounded hover:bg-slate-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #334155;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #94a3b8;
  --color-accent-2: #34d399;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#334155',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#94a3b8',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif face, with the second line in italic slate (#94a3b8)
- **Do:** Use a solid white primary button beside an outline secondary button
- **Do:** Keep partner names as a faint uppercase row beneath the hero
- **Don't:** Don't use green or other bright hues in the hero
- **Don't:** Don't set the italic line in full white
- **Don't:** Don't add a light background to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
