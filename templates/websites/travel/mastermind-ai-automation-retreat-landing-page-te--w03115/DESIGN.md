# Design system — Mastermind AI Automation Retreat Landing Page Template

`SN-W03115` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark product hero on near-black (#020408) with a bold sans-serif headline: The Simplest Way To in white, and Automate Everything. in indigo (#6366f1). Indigo is the primary button colour and the chart bar colour, a green dot (#10b981) marks status, and the dashboard mockup uses thin dark panels with hairline rules. Indigo is the one brand colour, and the page reads as a dark, technical interface.

**Mood:** technical, dark, modern, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020408` | Page ground |
| Surface | `#020408` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#6366f1` | Primary action and highlights |
| Second accent | `#10b981` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#6366f1` · `#818cf8` · `#020408` · `#d4d4d4` · `#000000` · `#ef4444` · `#eab308`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tighter`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-indigo-900/20`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="px-8 py-3.5 text-base font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Pricing (`pricing`)
5. Timeline (`timeline`)
6. Contact form (`contact-form`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020408;
  --color-surface: #020408;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #6366f1;
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
    background: '#020408',
    surface: '#020408',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#6366f1',
    accent2: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold sans-serif, with the key phrase in indigo (#6366f1)
- **Do:** Use indigo for the primary button and the chart bars only
- **Do:** Keep dashboard panels as dark cards with hairline rules and small status dots
- **Don't:** Don't use the indigo as a full background; the ground is near-black
- **Don't:** Don't use the green (#10b981) for anything other than status
- **Don't:** Don't add decorative gradients behind the headline beyond the indigo text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
