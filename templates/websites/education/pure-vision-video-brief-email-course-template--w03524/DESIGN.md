# Design system — Pure Vision Video Brief Email Course Template

`SN-W03524` · education · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A dark charcoal course page with a bold uppercase sans headline in white, set in Montserrat. Teal (#4ca9b4) marks the small eyebrow label, the submit button and the highlighted items in a light preview card, while the rest of the page stays grey. The signup field is the centre of the layout, so the page reads as a direct, focused email course sign-up.

**Mood:** direct, clean, charcoal, focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#202020` | Page ground |
| Surface | `#313131` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#797c86` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ca9b4` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#4ca9b4` · `#797c86` · `#313131` · `#202020` · `#f3f4f6` · `#e5e7eb` · `#3fa0ab` · `#1a202c` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat
- **Scale (largest breakpoint):** h1 48px · h2 36px · h3 20px · body 16px
- **Weights in use:** semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_10px_20px_rgba(76,169,180,0.2)]`, `shadow-[0_20px_50px_rgba(0,0,0,0.5)]`, `shadow-lg`
- **Content width:** `max-w-[140px]`, `max-w-7xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="w-full bg-[#4CA9B4] hover:bg-[#3FA0AB] text-white rounded-xl px-8 py-4 text-base font-semibold transition-all shadow-[0_10px_20px_rgba(76,169,180,0.2)] flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Schedule (`schedule-agenda`)
6. Newsletter signup (`newsletter`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #202020;
  --color-surface: #313131;
  --color-text: #ffffff;
  --color-muted: #797c86;
  --color-border: #ffffff;
  --color-accent: #4ca9b4;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#202020',
    surface: '#313131',
    ink: '#ffffff',
    muted: '#797c86',
    line: '#ffffff',
    accent: '#4ca9b4',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold uppercase Montserrat in white
- **Do:** Use teal (#4ca9b4) for the eyebrow label and the submit button only
- **Do:** Keep the signup field and its button stacked together on the dark ground
- **Don't:** Don't use teal for headlines or body text
- **Don't:** Don't place the light preview card over the signup form
- **Don't:** Don't use fully rounded corners on the signup field; keep them slightly rounded

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
