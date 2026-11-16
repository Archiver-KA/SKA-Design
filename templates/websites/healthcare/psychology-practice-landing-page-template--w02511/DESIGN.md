# Design system — Psychology Practice Landing Page Template

`SN-W02511` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark navy page where the headline is white and its second line is set in a warm pale tone, with a light grey pill (#e2e8f0) as the primary button rather than a saturated colour. Orange (#f97316) appears only as a small status dot in the badge above the headline. Secondary links are outlined ghost buttons, which keeps the page calm and steady.

**Mood:** calm, dark, trustworthy, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#cbd5e1` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e2e8f0` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#e2e8f0` · `#f1f5f9` · `#0f172a` · `#f97316` · `#64748b` · `#cbd5e1` · `#fb923c` · `#334155`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,0,0,0.5)]`, `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-[0_0_20px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden sm:flex items-center gap-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #cbd5e1;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #e2e8f0;
  --color-accent-2: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#cbd5e1',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#e2e8f0',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Make the primary button a pale grey pill (#e2e8f0) with dark text
- **Do:** Keep orange (#f97316) to the small status dot in the badge
- **Do:** Set the headline in Inter with the second line in a warm pale tone
- **Don't:** Don't fill the primary button with a saturated colour
- **Don't:** Don't use orange for text or larger shapes
- **Don't:** Don't put light section backgrounds under the dark navy hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
