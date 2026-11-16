# Design system — Dark Hacker Landing Page Template

`SN-W00329` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A cinematic hacker page on a deep green-to-indigo gradient ground. The headline mixes a light Playfair Display serif line with heavy uppercase sans lines, and the last phrase carries a cyan (#06b6d4) gradient. Small monospace status text and a terminal log in the corner add the tone, and the centred copy sits on the open gradient without cards.

**Mood:** cinematic, edgy, dark, theatrical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#262626` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#06b6d4` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#737373` · `#000000` · `#a3a3a3` · `#06b6d4` · `#f43f5e` · `#262626` · `#525252` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Geist Mono, Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 48px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_30px_rgba(255,255,255,0.2)]`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-5`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-4 bg-white text-black font-sans text-xs font-semibold tracking-widest uppercase rounded hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Timeline (`timeline`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #262626;
  --color-border: #ffffff;
  --color-accent: #06b6d4;
  --color-accent-2: #f43f5e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#262626',
    line: '#ffffff',
    accent: '#06b6d4',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the final headline phrase with the cyan gradient (#06b6d4)
- **Do:** Pair one serif headline line with heavy uppercase sans lines
- **Do:** Use small monospace status text for labels and the terminal corner
- **Don't:** Don't use light backgrounds; the ground is always dark
- **Don't:** Don't add more than one gradient phrase per headline
- **Don't:** Don't set body copy in all caps; only headlines use uppercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
