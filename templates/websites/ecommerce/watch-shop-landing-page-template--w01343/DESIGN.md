# Design system — Watch Shop Landing Page Template

`SN-W01343` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, austere watch-shop hero on black, with a centred serif headline in white and a small tracked eyebrow flanked by thin rules. The subcopy is mid-grey, and the two buttons are a solid white block and a dark outlined block. Nothing decorative sits on the ground; the luxury comes from restraint, a serif face and the quiet spacing around the words.

**Mood:** austere, refined, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#080808` · `#a3a3a3` · `#737373` · `#0f0f0f` · `#000000` · `#0a0a0a` · `#525252` · `#25d366` · `#d4d4d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, &quot
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 16px · body 12px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-white/5`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-1.5`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-8 py-3 rounded-sm text-sm font-medium hover:bg-[#25D366]/20 transition-colors w-full sm:w-auto">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Services (`services`)
5. About (`about`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #080808;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#080808',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white serif, centred, with a tracked uppercase eyebrow between thin rules
- **Do:** Use a solid white button for the main action and a dark outline for the second
- **Do:** Keep the background black (#000000) with mid-grey supporting copy (#737373)
- **Don't:** Don't introduce a green or other accent; none appears in the hero
- **Don't:** Don't add decorative graphics or gradient fills to the ground; it stays flat
- **Don't:** Don't set the subcopy in white; mid-grey keeps the headline in charge

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
