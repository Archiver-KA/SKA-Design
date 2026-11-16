# Design system — Music Academy Landing Page Template

`SN-W03512` · education · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A dark, theatrical landing page with a near-black ground (#140408) and a deep burgundy glow (#4a1020) at its centre. The headline is set in Inter at very large size, with the second line in italic and a lighter tone, and the primary button is a light cream pill. The effect is moody and stage-like, with the glow doing the work that imagery would do elsewhere.

**Mood:** moody, theatrical, warm-dark, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#140408` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#faf7f2` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4a1020` | Primary action and highlights |

Palette by frequency of use: `#faf7f2` · `#ffffff` · `#140408` · `#1a1a1a` · `#4a1020` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_15px_40px_-15px_rgba(74,16,32,0.4)]`, `shadow-[0_0_20px_rgba(250,247,242,0.15)]`, `shadow-[0_0_40px_rgba(250,247,242,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-3 bg-[#FAF7F2] text-[#140408] px-8 py-4 rounded-full text-sm font-medium transition-all duration-500 hover:scale-105 shadow-[0_0_20px_rgba(250,247,242,0.15)] hover:shadow-[0_0_40px_rgba(250,247,242,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Timeline (`timeline`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #140408;
  --color-surface: #1a1a1a;
  --color-text: #faf7f2;
  --color-border: #ffffff;
  --color-accent: #4a1020;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#140408',
    surface: '#1a1a1a',
    ink: '#faf7f2',
    line: '#ffffff',
    accent: '#4a1020',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the burgundy glow (#4a1020) centred behind the hero text
- **Do:** Set the second headline line in italic and a lighter tone for contrast
- **Do:** Use the cream (#faf7f2) pill button as the only solid fill in the hero
- **Don't:** Don't brighten the glow beyond the deep burgundy range
- **Don't:** Don't add bright accent colours to the dark ground
- **Don't:** Don't place the headline on a light background

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
