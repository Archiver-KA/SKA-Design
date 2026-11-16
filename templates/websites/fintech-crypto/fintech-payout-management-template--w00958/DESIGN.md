# Design system — FinTech Payout Management Template

`SN-W00958` · fintech-crypto · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A functional payouts dashboard with a deep navy header band (#13395f) holding white type, and a light grey body (#fafafa) with white panels. Tabs and a list of payouts sit on the panels in plain Inter, with a green status tone (#10b981) for ready items. The look is administrative and quiet, with no decorative imagery.

**Mood:** functional, administrative, quiet, structured, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#cbd5e1` | Hairlines, dividers, outlines |
| Accent | `#13395f` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#13395f` · `#ffffff` · `#475569` · `#64748b` · `#e2e8f0` · `#94a3b8` · `#0f172a` · `#f8fafc` · `#f1f5f9` · `#3182ce`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 30px · h3 12px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-[0_0_0_1px_rgba(96,165,250,0.3)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-1.5`

**Primary button**

```html
<a class="w-full h-full min-h-[2.5rem] md:aspect-square py-2.5 px-4 flex flex-col items-center justify-center gap-1.5 bg-[#13395F] hover:bg-[#0f2d4a] text-white text-sm font-normal rounded-md transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)
6. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-muted: #64748b;
  --color-border: #cbd5e1;
  --color-accent: #13395f;
  --color-accent-2: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#1e293b',
    muted: '#64748b',
    line: '#cbd5e1',
    accent: '#13395f',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the navy band (#13395f) for page headers and nothing else large.
- **Do:** Mark ready or positive states with the green (#10b981) only.
- **Do:** Place data in white panels on the light grey ground.
- **Don't:** Don't add decorative imagery to the dashboard.
- **Don't:** Don't use navy for body text on the light panels.
- **Don't:** Don't round panels more than the medium radius used here.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
