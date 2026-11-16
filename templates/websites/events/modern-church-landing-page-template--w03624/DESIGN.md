# Design system — Modern Church Landing Page Template

`SN-W03624` · events · dark mode · Sinera Atlas theme `workshop` · language `es`

## Direction

A dark, centred hero on a near-black navy ground, with a bold sans-serif headline in white and one key phrase picked out in a soft indigo gradient. A small pill label sits above the headline, and the two buttons pair a solid white primary with a dark outlined secondary. The look is clean and contemporary, and the indigo appears only in highlighted words and small accents.

**Mood:** contemporary, bold, clean, nocturnal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#020617` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#6366f1` · `#818cf8` · `#64748b` · `#a5b4fc` · `#020617` · `#e2e8f0` · `#4f46e5` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-lg font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Modal / overlay (`modal-overlay`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #020617;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #16a34a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#020617',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a heavy sans-serif, white and centred
- **Do:** Use the indigo (#818cf8) only for one highlighted phrase per headline
- **Do:** Keep the primary button solid white and the secondary a dark outline
- **Don't:** Don't use the indigo as a page background
- **Don't:** Don't add green to the hero
- **Don't:** Don't set body copy in pure white; use light slate (#94a3b8)

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
