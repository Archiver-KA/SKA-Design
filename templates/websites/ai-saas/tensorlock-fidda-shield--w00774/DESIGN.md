# Design system — TensorLock | FIDDA Shield

`SN-W00774` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark navy page (#0b1120) with a large, tight bold Inter headline in white over three lines, where the phrase Silent Rejection fades to grey. A grey italic line sits between headline and buttons, and the primary button is a solid blue (#3b82f6) pill beside a dark outline. Blue is reserved for the calls to action, which gives the page a sober, formal tone.

**Mood:** sober, formal, dark, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1120` | Page ground |
| Surface | `#0b1120` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#94a3b8` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#f87171` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#60a5fa` · `#64748b` · `#94a3b8` · `#1e293b` · `#0b1120` · `#475569` · `#f87171` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_15px_rgba(59,130,246,0.3)]`, `shadow-[0_0_20px_rgba(59,130,246,0.1)]`, `shadow-[0_0_20px_rgba(59,130,246,0.15)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="w-full md:w-auto px-8 py-3 bg-[#3B82F6] text-white text-sm font-semibold tracking-wide hover:bg-[#2563EB] transition-all rounded-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-[#3B82F6]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Bento grid (`bento-grid`)
5. Feature grid (`features`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. About (`about`)
9. Contact form (`contact-form`)
10. Footer (`footer`)
11. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b1120;
  --color-surface: #0b1120;
  --color-text: #ffffff;
  --color-muted: #94a3b8;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #f87171;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b1120',
    surface: '#0b1120',
    ink: '#ffffff',
    muted: '#94a3b8',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#f87171',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter bold, white and tight, with one phrase faded to grey
- **Do:** Use the solid blue (#3b82f6) only for the primary call to action
- **Do:** Set the supporting line in grey italic beneath the headline
- **Don't:** Don't use a light background for this hero
- **Don't:** Don't add a second filled colour button in the hero
- **Don't:** Don't use the red accent (#f87171) on body text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
