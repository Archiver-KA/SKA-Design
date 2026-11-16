# Design system — AI Audio SaaS Landing Page Template

`SN-W00041` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, minimal audio stance: a near-black ground (#050505) with a solid white primary button and an outline secondary, the same two-button pattern as its peers. The headline is large Inter at about 96px, with the second line in a grey gradient, and the only colour sits in the waveform visual below, in soft purple (#c084fc). Colour is kept for the product, so the page reads as serious rather than playful.

**Mood:** minimal, dark, sonic, precise, serious

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c084fc` | Primary action and highlights |
| Second accent | `#ec4899` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#9ca3af` · `#6b7280` · `#c084fc` · `#94a3b8` · `#050505` · `#818cf8` · `#a855f7` · `#ec4899`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-white bg-white/5 hover:bg-white/10 focus:ring-4 focus:outline-none focus:ring-white/20 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center transition-all border border-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Testimonials (`testimonials`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #f5f5f5;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #c084fc;
  --color-accent-2: #ec4899;
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
    surface: '#050505',
    ink: '#f5f5f5',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#c084fc',
    accent2: '#ec4899',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the purple (#c084fc) for waveforms and audio visuals only
- **Do:** Set the headline in Inter at about 96px, with the second line in grey
- **Do:** Pair a solid white primary button with an outline secondary button
- **Don't:** Don't use purple for buttons or body text; it is reserved for audio visuals
- **Don't:** Don't switch to a light background; the page is near black
- **Don't:** Don't drop the glow and gradient from the headline; they are part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
