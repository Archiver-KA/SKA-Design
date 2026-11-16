# Design system — MicAyla Impact Services Landing Page Template

`SN-W04024` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, warm-accented hero: a near-black ground with a glass navigation pill at the top and a centred white sans-serif headline. One phrase in each headline is set in gold italic serif, and that gold is the only warm colour on the page. Small pill labels with a dot sit above the headlines, which keeps the layout calm and direct.

**Mood:** dark, warm, dignified, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fcd34d` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fcd34d` · `#94a3b8` · `#e2e8f0` · `#fbbf24` · `#d4d4d4` · `#171717` · `#f59e0b` · `#f5f5f5` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]`, `shadow-[0_0_30px_rgba(16,185,129,0.15)]`, `shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="hidden sm:inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition border-white/10 bg-neutral-900/60 text-neutral-100 hover:bg-neutral-800/60">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Services (`services`)
6. About (`about`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-surface: #262626;
  --color-text: #171717;
  --color-border: #ffffff;
  --color-accent: #fcd34d;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    surface: '#262626',
    ink: '#171717',
    line: '#ffffff',
    accent: '#fcd34d',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one phrase per headline in gold (#fcd34d) italic serif
- **Do:** Keep the page on the near-black ground (#171717)
- **Do:** Place a small pill label with a dot above each headline
- **Don't:** Don't use gold for body text
- **Don't:** Don't set the whole headline in the serif
- **Don't:** Don't add light bands between dark sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
