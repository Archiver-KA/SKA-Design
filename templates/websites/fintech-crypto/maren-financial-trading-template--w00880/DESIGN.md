# Design system — Maren Financial Trading Template

`SN-W00880` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A monochrome dark page on near-black (#030303) with a centred serif headline in white over a grey subline, a dark outlined pill button, and a row of grey partner names along the base. The hero uses no colour accent. The layout is restrained and centred, and the logo strip carries the trust signal.

**Mood:** monochrome, centred, restrained, trust-led, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030303` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#d4d4d4` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#030303` · `#000000` · `#34d399` · `#2dd4bf` · `#d4d4d4` · `#cbd5e1` · `#10b981`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, Instrument Serif
- **Scale (largest breakpoint):** h2 72px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]`
- **Content width:** `max-w-7xl`, `max-w-[90vw]`
- **Common gaps:** `gap-6`, `gap-2`, `gap-x-2`

**Primary button**

```html
<a class="flex-1 group relative p-7 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between h-36 lg:h-40 overflow-hidden border-white/10 hover:border-white/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Call to action (`cta`)
4. Marquee (`marquee`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030303;
  --color-text: #ffffff;
  --color-muted: #d4d4d4;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030303',
    ink: '#ffffff',
    muted: '#d4d4d4',
    line: '#ffffff',
    accent: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero to white and grey type on near-black (#030303)
- **Do:** Centre the serif headline with a short grey subline beneath
- **Do:** Place a grey logo strip below the CTA as the trust signal
- **Don't:** Don't add a colour accent to the hero
- **Don't:** Don't show the logo strip in full colour; keep the logos grey
- **Don't:** Don't place a second CTA beside the pill button

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
