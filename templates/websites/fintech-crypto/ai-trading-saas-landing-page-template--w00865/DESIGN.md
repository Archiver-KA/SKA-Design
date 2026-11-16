# Design system — AI Trading SaaS Landing Page Template

`SN-W00865` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A monochrome dark landing page on a near-black ground (#030303) with white and grey type only. The headline is large, centred and set in a serif face, with a short grey subline and a dark glass pill button outlined in white. A scrolling row of grey brand names along the bottom edge is the only other detail, giving a restrained, editorial stance.

**Mood:** monochrome, restrained, editorial, minimal, dark

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

- **Do:** Keep the palette to white and greys on near-black (#030303)
- **Do:** Set the headline large and centred in the serif face
- **Do:** Use a dark glass pill with a white hairline border for the primary button
- **Don't:** Don't introduce a colour accent
- **Don't:** Don't place a background image behind the headline
- **Don't:** Don't let the logo strip compete with the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
