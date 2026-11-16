# Design system — Nature Retreat Landing Page Template

`SN-W03122` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark forest-green hero (#0a1a0a) with a centred serif headline in cream, Into the Woods, and a light italic tagline beneath it. Small amber dots drift over layered dark-green hills drawn as flat shapes. The peach (#d4854a) primary button is the only warm solid, so the palette is quiet and nocturnal.

**Mood:** nocturnal, quiet, forest, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a1a0a` | Page ground |
| Surface | `#111a11` | Cards, panels, raised areas |
| Text | `#f0ebe0` | Headings and primary copy |
| Border | `#2a4a2a` | Hairlines, dividers, outlines |
| Accent | `#d4854a` | Primary action and highlights |
| Second accent | `#4a8a7a` | Supporting highlights |

Palette by frequency of use: `#e8f0ec` · `#4a8a7a` · `#d4854a` · `#f0ebe0` · `#2a4a2a` · `#0a1a0a` · `#112211` · `#ffffff` · `#111a11` · `#1a3a2a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cinzel
- **Body:** Cinzel
- **Loaded families:** Cinzel, Libre Baskerville, Nunito
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-[50%]` (50%)
- **Shadows:** `shadow-[0_0_30px_rgba(74,138,122,0.1)]`, `shadow-[0_0_15px_rgba(212,133,74,0.4)]`, `shadow-[0_0_15px_rgba(74,138,122,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-[#d4854a] text-[#0a1a0a] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#e69b62] transition-colors shadow-[0_0_20px_rgba(212,133,74,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a1a0a;
  --color-surface: #111a11;
  --color-text: #f0ebe0;
  --color-border: #2a4a2a;
  --color-accent: #d4854a;
  --color-accent-2: #4a8a7a;
  --font-display: "Cinzel", serif;
  --font-body: "Cinzel", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a1a0a',
    surface: '#111a11',
    ink: '#f0ebe0',
    line: '#2a4a2a',
    accent: '#d4854a',
    accent2: '#4a8a7a',
  },
  fontFamily: { display: ['Cinzel'], sans: ['Cinzel'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif in cream (#f0ebe0), with a light italic tagline below
- **Do:** Use the peach (#d4854a) for the primary button only
- **Do:** Keep the background as layered dark-green hills with small warm dots
- **Don't:** Don't use bright greens for text or buttons; the greens are dark
- **Don't:** Don't add a second warm solid beside the peach
- **Don't:** Don't put a light background behind the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
