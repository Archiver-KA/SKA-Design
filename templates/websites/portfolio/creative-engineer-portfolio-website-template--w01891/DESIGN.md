# Design system — Creative Engineer Portfolio Website Template

`SN-W01891` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark page with a faint violet glow and thin network lines across the hero, which add a technical texture without competing with the type. The name is set large in bold white sans, and the subtitle picks out its key phrase in lavender (#c084fc). Buttons are one solid white pill and one dark pill, so the layout is centred and calm.

**Mood:** technical, calm, glowing, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#818cf8` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a855f7` · `#9ca3af` · `#6b7280` · `#c084fc` · `#000000` · `#d1d5db` · `#6366f1` · `#581c87` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 14px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-3`

**Primary button**

```html
<a class="px-4 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Feature grid (`features`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

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
  --color-muted: #ffffff;
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
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#818cf8',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lavender (#c084fc) only for the highlighted phrase in the subtitle.
- **Do:** Keep the buttons as one solid white pill and one dark pill.
- **Do:** Keep the network-line graphic at low contrast behind the hero.
- **Don't:** Don't put purple across the whole background; the glow stays faint.
- **Don't:** Don't set the name in a light weight; it is bold.
- **Don't:** Don't add more than one highlighted phrase per section.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
