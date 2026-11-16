# Design system — Travel Landing Page Template

`SN-W03148` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark navy fintech hero on a deep ground (#020617), with a white bold headline whose second line fades to grey and a soft indigo glow at the bottom right. The primary button is solid white with a dark outlined button beside it, and muted coin tickers run along the bottom. Indigo (#6366f1) stays in the glow and small accents, which keeps the page calm and precise.

**Mood:** precise, dark, calm, technical, sharp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#0f172a` | Cards, panels, raised areas |
| Text | `#94a3b8` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#94a3b8` · `#6366f1` · `#64748b` · `#818cf8` · `#020617` · `#34d399` · `#0f172a` · `#cbd5e1` · `#1e293b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(99,102,241,0.2)]`, `shadow-[0_0_30px_rgba(255,255,255,0.1)]`, `shadow-[0_0_40px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="bg-white/10 hover:bg-white/20 text-white border border-white/10 text-sm font-medium px-5 py-2 rounded-full transition-colors text-center backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Product grid (`product-grid`)
4. Feature grid (`features`)
5. Comparison (`comparison`)
6. Pricing (`pricing`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #0f172a;
  --color-text: #94a3b8;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #6366f1;
  --color-accent-2: #34d399;
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
    ink: '#94a3b8',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in white, with the second line fading to grey
- **Do:** Use a solid white button for the main action and a dark outlined button beside it
- **Do:** Keep the indigo (#6366f1) to glows and small accents
- **Don't:** Don't use the indigo as a large button fill
- **Don't:** Don't use a light page ground; the page is dark navy
- **Don't:** Don't add more than one glow shape per hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
