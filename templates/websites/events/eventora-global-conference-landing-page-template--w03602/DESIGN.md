# Design system — Eventora Global Conference Landing Page Template

`SN-W03602` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The music event page is loud and nightlife-focused, on a near-black ground (#0b0b15). The hero headline is a very heavy, tall white sans in uppercase, and a neon green (#00ff9d) marquee strip runs along the top. Green is the main action colour, and hot pink (#ff006e) marks the VIP call to action. A soft blue glow sits behind the right side of the hero, and the nav sits in a dark pill.

**Mood:** loud, nightlife, neon, bold, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b15` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00ff9d` | Primary action and highlights |
| Second accent | `#ff006e` | Supporting highlights |

Palette by frequency of use: `#000000` · `#00ff9d` · `#ffffff` · `#ff006e` · `#9ca3af` · `#0b0b15` · `#6b7280` · `#4b5563` · `#f5f5f5` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h2 72px · h3 18px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-xl`, `shadow-[0_0_40px_rgba(255,0,110,0.5)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="bg-[#00ff9d] text-black px-8 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Marquee (`marquee`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Schedule (`schedule-agenda`)
5. Services (`services`)
6. Listings (`listings`)
7. Team (`team`)
8. Feature grid (`features`)
9. Articles (`blog-articles`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b0b15;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #00ff9d;
  --color-accent-2: #ff006e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b15',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#00ff9d',
    accent2: '#ff006e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the neon green (#00ff9d) for the primary action and the top marquee strip
- **Do:** Set the hero headline in a very heavy, tall white sans, uppercase
- **Do:** Reserve hot pink (#ff006e) for the VIP call to action only
- **Don't:** Don't use green for body text on dark surfaces
- **Don't:** Don't add more than two bright accent colours
- **Don't:** Don't set headlines in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
