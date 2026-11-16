# Design system — Musician Official Archive Website Template

`SN-W03730` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Near-black page with a wide sidebar in a slightly lighter charcoal, holding a red serif logo and a plain list of grey navigation items. The hero centres a large white serif name over a short red rule, followed by a grey subtitle and two pill buttons, one solid and one outlined. Red is used sparingly for the logo and the rule, which keeps the page archival and serious.

**Mood:** archival, serious, dark, literary

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020202` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ededed` | Headings and primary copy |
| Muted text | `#888888` | Secondary copy, captions |
| Border | `#1f1f1f` | Hairlines, dividers, outlines |
| Accent | `#dc2626` | Primary action and highlights |
| Second accent | `#3b82f6` | Supporting highlights |

Palette by frequency of use: `#888888` · `#ffffff` · `#ededed` · `#dc2626` · `#1f1f1f` · `#020202` · `#121212` · `#0a0a0a` · `#000000` · `#333333`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Mr Dafoe
- **Scale (largest breakpoint):** h1 36px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-16`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group h-11 px-8 rounded-full bg-primary text-background font-medium text-sm hover:bg-white transition-all hover:scale-105 active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020202;
  --color-surface: #121212;
  --color-text: #ededed;
  --color-muted: #888888;
  --color-border: #1f1f1f;
  --color-accent: #dc2626;
  --color-accent-2: #3b82f6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020202',
    surface: '#121212',
    ink: '#ededed',
    muted: '#888888',
    line: '#1f1f1f',
    accent: '#dc2626',
    accent2: '#3b82f6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the artist name in a large white serif, centred in the hero
- **Do:** Use the red (#dc2626) only for the logo and the short rule under the name
- **Do:** Keep the sidebar in charcoal (#121212) with grey list navigation
- **Don't:** Don't use red for button fills
- **Don't:** Don't set the navigation in a bright colour
- **Don't:** Don't use a sans-serif for the artist name

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
