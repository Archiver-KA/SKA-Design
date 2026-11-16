# Design system — AI Portfolio Landing Page Template

`SN-W01779` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a large heavy white Inter name headline and a lavender line below that reads as the subtitle. Faint grey network lines sit behind the hero, and the buttons are a white primary with a dark outlined secondary. Lavender (#c084fc) is the only colour, so the page reads as a quiet, network-themed introduction.

**Mood:** quiet, dark, networked, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a855f7` · `#c084fc` · `#9ca3af` · `#6b7280` · `#000000` · `#d1d5db` · `#6366f1` · `#581c87` · `#d946ef`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-x-2`, `gap-y-2`

**Primary button**

```html
<a class="group relative px-8 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full overflow-hidden backdrop-blur-md transition-all hover:bg-white/10 hover:border-purple-500/30 btn-magnetic btn-glow">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Product grid (`product-grid`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #818cf8;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name in heavy white Inter at display size, centred on black.
- **Do:** Use lavender (#c084fc) for the highlight line only.
- **Do:** Keep the background network lines faint and behind the copy.
- **Don't:** Don't brighten the network lines; they should stay subtle.
- **Don't:** Don't add a second accent colour beside the lavender.
- **Don't:** Don't use a light background; the design depends on the black ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
