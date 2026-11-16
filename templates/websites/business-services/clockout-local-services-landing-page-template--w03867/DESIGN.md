# Design system — Clockout Local Services Landing Page Template

`SN-W03867` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A warm, editorial landing page on a cream ground (#f4f1ea) with large dark serif headlines. The second headline line switches to a burnt orange (#c2410c) italic, which is the page's one colour move. Body copy is set small and dark, with a pill tag above the headline and a near-black button for the main action.

**Mood:** warm, editorial, direct, confident, tactile

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f1ea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1a1a1a` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#c2410c` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#fb923c` · `#f4f1ea` · `#1a1a1a` · `#262626` · `#e8e4dc` · `#c2410c` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Instrument Serif
- **Loaded families:** Instrument Serif, Inter, JetBrains Mono
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 16px
- **Weights in use:** light, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-12`

**Primary button**

```html
<a class="rounded-md bg-[#1a1a1a] px-4 py-2 text-sm font-semibold text-[#f4f1ea] hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f1ea] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. FAQ (`faq`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f4f1ea;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-border: #000000;
  --color-accent: #c2410c;
  --font-display: "Instrument Serif", serif;
  --font-body: "Instrument Serif", serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f1ea',
    surface: '#ffffff',
    ink: '#1a1a1a',
    line: '#000000',
    accent: '#c2410c',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Instrument Serif'] },
} }
```

## Do and don't

- **Do:** Set the headline in large dark serif and switch the second line to burnt orange italic
- **Do:** Use #c2410c only for the italic headline line and highlight accents
- **Do:** Keep the page on cream (#f4f1ea) with near-black text
- **Don't:** Don't set text in the bright orange (#fb923c); it is too light to read on cream
- **Don't:** Don't set headlines in a geometric sans-serif; the serif is the identity
- **Don't:** Don't add heavy gradient fills to the hero; the surfaces stay flat

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
