# Design system — Sigmal Landing Page

`SN-W00711` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, precise intelligence-tool page: a near-black ground with a white headline whose second line turns periwinkle (#818cf8). Indigo carries the logo, the nav button and that headline accent, and a red (#f43f5e) tag flags a change alert inside the product panel. The product panel sits on a faint grid behind a dark card, so the page reads as monitoring software rather than decorative marketing art.

**Mood:** precise, dark, analytical, focused, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#f43f5e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#a3a3a3` · `#737373` · `#0a0a0a` · `#818cf8` · `#050505` · `#000000` · `#f43f5e` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Oswald, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 14px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-inner`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-4 py-2 text-xs font-normal rounded-xl transition-all text-white bg-white/10 hover:bg-white/15">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Feature grid (`features`)
5. Articles (`blog-articles`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #f5f5f5;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #f43f5e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#f5f5f5',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#f43f5e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in periwinkle (#818cf8) and keep the first line white.
- **Do:** Show the product as a dark card with a faint grid behind it and a single status tag.
- **Do:** Use the red (#f43f5e) only for alert and change tags.
- **Don't:** Don't fill the primary button with indigo on the page; keep it white or outlined.
- **Don't:** Don't use the red as a decorative accent.
- **Don't:** Don't add gradient fills to the headline; the colour change is a solid line break.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
