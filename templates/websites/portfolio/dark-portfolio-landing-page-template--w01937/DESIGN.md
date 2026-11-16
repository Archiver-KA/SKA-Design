# Design system — Dark Portfolio Landing Page Template

`SN-W01937` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a large white sans headline set on two lines with tight spacing, a grey intro paragraph, and two actions: a solid white pill and a plain outlined pill. The only colour is a small orange status pill above the headline, so the layout relies on type scale and empty space.

**Mood:** minimal, spare, dark, confident, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#78716c` · `#000000` · `#1c1917` · `#a8a29e` · `#e7e5e4` · `#0a0a0a` · `#050505` · `#3f3f46` · `#f97316`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 18px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-5xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 bg-white text-black hover:bg-stone-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Case studies (`case-studies`)
5. Dashboard preview (`dashboard-preview`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #1c1917;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#1c1917',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at about 96px, white, with tight line spacing
- **Do:** Use orange (#f97316) only for the availability pill
- **Do:** Keep the first screen to one headline, one intro and two actions
- **Don't:** Don't add orange to buttons or headings; the accent is for status
- **Don't:** Don't add a background image; the page is solid black
- **Don't:** Don't add more than two actions to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
