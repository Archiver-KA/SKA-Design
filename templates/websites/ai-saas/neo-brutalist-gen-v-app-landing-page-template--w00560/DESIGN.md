# Design system — Neo-Brutalist Gen-V App Landing Page Template

`SN-W00560` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A loud neo-brutalist hero on a lime (#ccff00) ground with heavy black type. Two coloured words carry the headline: 'pop' in violet (#7000ff) and 'harder.' in magenta (#ff0099). A black-bordered phone mock shows playful cards with thick outlines, and pill stickers and a chunky outlined nav bar reinforce the raw, playful style.

**Mood:** loud, playful, raw, high-energy

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ccff00` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#000000` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#ff0099` | Primary action and highlights |
| Second accent | `#7000ff` | Supporting highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#ccff00` · `#ff0099` · `#7000ff` · `#f3f4f6` · `#e5e7eb` · `#f0f0f0` · `#4b5563` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans, Space Grotesk
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 18px
- **Weights in use:** bold, medium, black
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-[4px_4px_0px_rgba(0,0,0,0.2)]`, `shadow-[12px_12px_0px_rgba(0,0,0,1)]`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-black text-white px-5 py-2 rounded-full font-space font-semibold text-sm hover:bg-[#ff0099] transition-colors bouncy hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Dashboard preview (`dashboard-preview`)
5. FAQ (`faq`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ccff00;
  --color-surface: #000000;
  --color-text: #111111;
  --color-muted: #000000;
  --color-border: #000000;
  --color-accent: #ff0099;
  --color-accent-2: #7000ff;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ccff00',
    surface: '#000000',
    ink: '#111111',
    muted: '#000000',
    line: '#000000',
    accent: '#ff0099',
    accent2: '#7000ff',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Keep the lime (#ccff00) ground and set the headline in heavy black type
- **Do:** Outline cards, buttons and the phone frame with thick black borders
- **Do:** Use violet (#7000ff) and magenta (#ff0099) only for headline words and sticker tags
- **Don't:** Don't soften the black outlines with thin or grey strokes
- **Don't:** Don't put a neutral white ground under the hero
- **Don't:** Don't add more than two accent hues beside the lime

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
