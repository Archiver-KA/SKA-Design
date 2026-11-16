# Design system — AI Interview & Training Landing Page Template

`SN-W03406` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Monochrome dark page on near-black with a centred white sans headline, its second line fading from white to grey. Supporting copy is a lighter grey in a narrow column, and a single white pill carries the action. The first screen has no coloured accents, so white on black does all the work.

**Mood:** monochrome, sharp, minimal, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#10b981` · `#6366f1` · `#64748b` · `#94a3b8` · `#000000` · `#0a0a0a` · `#cbd5e1` · `#050505` · `#34d399`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 16px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.15)]`, `shadow-[0_0_30px_rgba(255,255,255,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="hidden md:block px-3 py-1.5 text-xs font-medium text-white border border-white/10 rounded-md hover:bg-white/5 hover:border-white/20 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Team (`team`)
6. Modal / overlay (`modal-overlay`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline white (#ffffff) on near-black (#050505), with the second line fading to grey.
- **Do:** Use one white pill as the primary action in the hero.
- **Do:** Keep the copy narrow and centred, in grey (#94a3b8).
- **Don't:** Don't introduce a coloured accent into the hero.
- **Don't:** Don't apply the fade to the first line.
- **Don't:** Don't add a second filled button to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
