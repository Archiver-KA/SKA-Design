# Design system — Crypto Research SaaS Landing Page Template

`SN-W00904` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black, atmospheric SaaS hero with no saturated colour in the first screen. The large centred headline fades from white to grey on its second line, which sets a quiet, editorial tone. A single white pill button is the only strong contrast, and faint blurred shapes sit behind the content instead of borders.

**Mood:** minimal, atmospheric, monochrome, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#ef4444` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#a5b4fc` · `#22c55e` · `#e5e7eb` · `#ef4444` · `#050505` · `#6366f1` · `#d8b4fe` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tighter`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_40px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-4xl`, `max-w-2xl`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="px-4 py-2 text-xs font-semibold tracking-wide bg-white text-black rounded-full hover:bg-gray-200 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Timeline (`timeline`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #ef4444;
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
    surface: '#e5e7eb',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#ef4444',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the headline white, with the second line fading to grey
- **Do:** Use the white pill button as the only high-contrast action in the hero
- **Do:** Keep decorative blurred shapes low in opacity behind the content
- **Don't:** Don't add saturated accent colours to the hero; the first screen is monochrome
- **Don't:** Don't use bordered cards where blurred glass panels would do
- **Don't:** Don't set body copy in pure white; it sits in muted grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
