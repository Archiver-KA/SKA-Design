# Design system — AI Certification Learning Landing Page Template

`SN-W03402` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

Dark, space-like certification page on a near-black ground with a faint star field across the hero. The headline is white sans, and its second line runs through a blue-to-violet gradient, which is the only chromatic element. The primary button is a dark pill with a soft glow, and the secondary is outlined, so the page feels technical and focused.

**Mood:** futuristic, technical, focused, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#03030a` | Page ground |
| Surface | `#03030a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a855f7` · `#03030a` · `#94a3b8` · `#c084fc` · `#cbd5e1` · `#3b82f6` · `#6366f1` · `#60a5fa` · `#818cf8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_rgba(168,85,247,0.6)]`, `shadow-[0_0_10px_#60a5fa]`, `shadow-[0_0_10px_#c084fc]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Testimonials (`testimonials`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #03030a;
  --color-surface: #03030a;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#03030a',
    surface: '#03030a',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white (#ffffff) with the second line in the blue-violet gradient.
- **Do:** Keep the ground near-black (#03030a) with a faint star field rather than a flat colour.
- **Do:** Use a dark pill with a soft glow for the primary button and an outlined secondary.
- **Don't:** Don't apply the gradient to body copy.
- **Don't:** Don't use a light background; the page is dark throughout.
- **Don't:** Don't add extra glows around the secondary button.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
