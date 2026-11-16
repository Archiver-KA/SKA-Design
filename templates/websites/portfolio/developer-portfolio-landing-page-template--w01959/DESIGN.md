# Design system — Developer Portfolio Landing Page Template

`SN-W01959` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark developer-tool look: a near-black navy ground (#020617) with slightly lifted slate panels and a soft blue-violet gradient on key headline words. The green dot (#34d399) marks status and availability. A mock code terminal in the hero does the explaining, so the page reads as a technical product rather than a poster. Headline sizing is moderate and the type is the system sans-serif.

**Mood:** technical, calm, glassy, nocturnal, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#f8fafc` | Headings and primary copy |
| Muted text | `#cbd5e1` | Secondary copy, captions |
| Border | `#475569` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#020617` · `#0f172a` · `#1e293b` · `#cbd5e1` · `#94a3b8` · `#f8fafc` · `#000000` · `#34d399` · `#f1f5f9` · `#64748b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 18px · body 11px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.22em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-black/40`, `shadow-slate-900/60`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-16`
- **Common gaps:** `gap-2`, `gap-1.5`, `gap-1`

**Primary button**

```html
<a class="rounded-full px-3 py-1.5 font-medium tracking-tight text-slate-300 hover:bg-slate-800/80 hover:text-slate-50">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Case studies (`case-studies`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #f8fafc;
  --color-muted: #cbd5e1;
  --color-border: #475569;
  --color-accent: #34d399;
  --color-accent-2: #34d399;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#0f172a',
    ink: '#f8fafc',
    muted: '#cbd5e1',
    line: '#475569',
    accent: '#34d399',
    accent2: '#34d399',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Separate sections with slate panels (#0f172a) and hairline borders
- **Do:** Reserve the green (#34d399) for status dots and the one positive call to action
- **Do:** Show code as a live example in the hero instead of a stock illustration
- **Don't:** Don't add heavy drop shadows; the glow comes from blurred background shapes
- **Don't:** Don't use pure black (#000000) for panels; keep the navy ground
- **Don't:** Don't show the code panel without its window dots and filename bar

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
