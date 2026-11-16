# Design system — sora revision 3 

`SN-W04292` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A light, airy hero on a near-white ground with a faint grid behind the headline. The headline is a heavy sans in dark slate, with the word Sell in blue (#2563eb), and the subline switches to an italic serif in grey for contrast. A dark slate button leads, with a pale outlined button beside it, so the page reads confident and technical.

**Mood:** confident, technical, light, contrasting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#151518` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#94a3b8` · `#0f172a` · `#cbd5e1` · `#e2e8f0` · `#475569` · `#2563eb` · `#334155` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Newsreader
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Newsreader
- **Scale (largest breakpoint):** h2 30px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1`

**Primary button**

```html
<a class="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Dashboard preview (`dashboard-preview`)
5. Process / steps (`how-it-works`)
6. Bento grid (`bento-grid`)
7. Contact form (`contact-form`)
8. Pricing (`pricing`)
9. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #151518;
  --color-text: #0f172a;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #10b981;
  --font-display: "Newsreader", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#151518',
    ink: '#0f172a',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Newsreader'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy sans in dark slate, with one blue (#2563eb) word for emphasis
- **Do:** Pair the sans headline with an italic serif subline in grey for contrast
- **Do:** Place a faint grid behind the hero text and keep it lighter than the ground
- **Don't:** Don't use blue for more than one word in the headline
- **Don't:** Don't make the grid darker than the ground
- **Don't:** Don't set the primary button in blue

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
