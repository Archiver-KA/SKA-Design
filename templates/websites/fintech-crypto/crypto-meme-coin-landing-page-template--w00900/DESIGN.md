# Design system — Crypto Meme Coin Landing Page Template

`SN-W00900` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black hero with a very large bold white sans headline in three lines, where the last line fades to dark grey, so the final line reads as a visual punchline. A solid gold-yellow (#eab308) button is the primary action, paired with a dark grey outline button. A faint warm glow behind the badge and headline is the only atmosphere. The tone is playful and punchy, carried by the scale of the type.

**Mood:** dark, playful, punchy, bold, gold-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#eab308` | Primary action and highlights |
| Second accent | `#229ed9` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#eab308` · `#000000` · `#a1a1aa` · `#18181b` · `#71717a` · `#27272a` · `#3f3f46` · `#09090b` · `#1da1f2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 14px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_100px_rgba(234,179,8,0.2)]`, `shadow-[0_0_120px_rgba(234,179,8,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Timeline (`timeline`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #eab308;
  --color-accent-2: #229ed9;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#eab308',
    accent2: '#229ed9',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white sans across three lines, with the last line fading to grey
- **Do:** Make the primary button solid yellow (#eab308) with dark text
- **Do:** Keep the glow behind the badge and headline faint and warm
- **Don't:** Don't use the Telegram blue (#229ed9) in the hero
- **Don't:** Don't add comic-style illustration to the hero; the type carries the joke
- **Don't:** Don't set the grey third line in full white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
