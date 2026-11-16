# Design system — Developer Portfolio Website Template

`SN-W01971` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Achromatic and restrained: a near-black ground with the headline split into a white first line and a grey second line, above a short grey paragraph set at a comfortable width. Two rectangular buttons, one solid white and one outlined, carry the calls to action. No hue appears in the first screen, so polish comes from spacing and tone steps rather than colour.

**Mood:** achromatic, quiet, precise, spacious, sober

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#a3a3a3` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#737373` · `#171717` · `#0a0a0a` · `#e5e5e5` · `#404040` · `#525252` · `#262626` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 18px · h3 16px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-5xl`, `max-w-3xl`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="group inline-flex items-center justify-center gap-2 h-10 px-6 rounded bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #171717;
  --color-text: #a3a3a3;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#171717',
    ink: '#a3a3a3',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Step the headline from white (#ffffff) to grey (#737373) for a two-tone effect
- **Do:** Keep calls to action to one solid and one outlined button
- **Do:** Leave generous empty space around the hero text block
- **Don't:** Don't add a brand colour unless the page needs a clear accent
- **Don't:** Don't crowd the hero with extra badges; one status pill is enough
- **Don't:** Don't use indigo (#6366f1) for buttons; it does not appear on the first screen

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
