# Design system — AI QA Detective SaaS Landing Page Template

`SN-W00134` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Near-black investigation UI on #020408 with a heavy lime headline (#ccff00) for the product name and a white display line with a lime underline beneath its key word. Red appears only on status tags such as REGRESSION, and the product mockup is a dark card stack of pull-request investigations. The result is a detective-noir take on developer tooling, with the lime doing all the signalling.

**Mood:** sharp, noir, technical, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020408` | Page ground |
| Surface | `#050a14` | Cards, panels, raised areas |
| Text | `#94a3b8` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ccff00` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#64748b` · `#020408` · `#94a3b8` · `#ef4444` · `#000000` · `#ccff00` · `#1e293b` · `#cbd5e1` · `#050a14`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 20px · body 12px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(204,255,0,0.2)]`, `shadow-2xl`, `shadow-[0_0_8px_rgba(16,185,129,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="h-12 px-8 rounded bg-lime-electric text-black hover:bg-[#b3e600] transition-all duration-300 text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Pricing (`pricing`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020408;
  --color-surface: #050a14;
  --color-text: #94a3b8;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #ccff00;
  --color-accent-2: #ef4444;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020408',
    surface: '#050a14',
    ink: '#94a3b8',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#ccff00',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the lime (#ccff00) for the product name and one underline per headline
- **Do:** Reserve red (#ef4444) for regression and alert tags
- **Do:** Set the mockup as a dark stacked card list with small status pills
- **Don't:** Don't use lime for body text or long links
- **Don't:** Don't fill the main buttons with lime; keep the CTAs neutral
- **Don't:** Don't add light sections to the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
