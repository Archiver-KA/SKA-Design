# Design system — Planet Food | Elbeuf 

`SN-W02960` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A dark, urban fast-food page on near-black (#050505) with a heavy white sans wordmark over an orange (#f97316) second line. Orange filled and dark outline buttons sit below a short line of body copy, and a small orange-outlined badge marks opening hours. The orange is used for the headline, the primary button and one inline link, so the page reads as bold and direct.

**Mood:** urban, bold, direct, punchy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#151515` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#9ca3af` · `#d1d5db` · `#151515` · `#000000` · `#ea580c` · `#050505` · `#4b5563` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 24px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded font-heading font-bold tracking-wider transition-all hover-glow-orange flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Menu list (`menu-list`)
4. Comparison (`comparison`)
5. Map / location (`map-location`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #151515;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#151515',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in heavy white sans with the second line in orange (#f97316)
- **Do:** Use the orange (#f97316) for the primary button and one inline link per section
- **Do:** Keep the badge small and outlined in orange
- **Don't:** Don't use a light page ground; the design is dark.
- **Don't:** Don't set body copy in orange
- **Don't:** Don't add blue (#2563eb); the accents are orange only.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
