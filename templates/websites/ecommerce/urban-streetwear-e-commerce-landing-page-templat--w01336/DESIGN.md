# Design system — Urban Streetwear E-commerce Landing Page Template

`SN-W01336` · ecommerce · dark mode · Sinera Atlas theme `market` · language `fr`

## Direction

A monochrome street-culture hero on black, with a grey-toned lens photograph fading behind a two-tone wordmark. 'MN' is bold white and 'HOOD' is mid-grey, so the name carries the hierarchy. The French tagline sits centred in light grey, and a single square-cornered white button is the only solid shape on the screen, which keeps the page moody and restrained.

**Mood:** moody, monochrome, urban, cinematic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22c55e` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#262626` · `#737373` · `#171717` · `#000000` · `#404040` · `#525252` · `#a3a3a3` · `#d4d4d4` · `#0a0a0a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 30px · body 12px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-wider`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-lg` (8px)
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="inline-block border border-neutral-700 text-white px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition-colors rounded-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Marquee (`marquee`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero black (#000000) with grayscale photography behind the wordmark
- **Do:** Set the wordmark in heavy sans-serif with two tones, white and mid-grey
- **Do:** Use a single square-cornered white button for the primary action
- **Don't:** Don't add colour to the hero; the grey tones are the palette
- **Don't:** Don't add an accent colour; the first screen has none
- **Don't:** Don't place bright text over the lightest areas of the photograph; keep the wordmark on dark grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
