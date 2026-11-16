# Design system — Google Ads DTC Agency Landing Page Template

`SN-W01587` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground with a bold sans headline in white, where the middle phrase 'scaling ceiling.' runs in a blue gradient (#60a5fa) with a soft glow, and the closing line sits in dim grey. A faint grid texture lies behind the hero. The gradient type is the one colourful element, so the blue reads as a light source rather than a fill.

**Mood:** luminous, technical, focused, dark, gradient-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#60a5fa` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a3a3a3` · `#3b82f6` · `#737373` · `#262626` · `#000000` · `#171717` · `#60a5fa` · `#525252` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-inner`, `shadow-2xl`, `shadow-blue-900/10`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="flex items-center gap-2 text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all hover:shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Call to action (`cta`)
8. Bento grid (`bento-grid`)
9. Pricing (`pricing`)
10. Benefits (`benefits`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #60a5fa;
  --color-accent-2: #ef4444;
  --font-display: "a serif face", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#60a5fa',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['a serif face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a bold sans, with the highlight phrase in a blue gradient (#60a5fa)
- **Do:** Use the blue (#60a5fa) for the gradient highlight and the badge only
- **Do:** Keep the closing line in dim grey so the gradient phrase stays the focus
- **Don't:** Don't use blue as a background fill; it lights the type instead
- **Don't:** Don't set the headline in a serif; headlines are sans
- **Don't:** Don't add a second gradient or a red highlight to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
