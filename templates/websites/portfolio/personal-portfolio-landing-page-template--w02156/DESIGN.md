# Design system — Personal Portfolio Landing Page Template

`SN-W02156` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, starfield-style student portfolio on near-black (#000000) with a very large pink (#ec4899) bold sans name as the centrepiece. Role words sit in muted grey, separated by bullets, with a small dark outlined pill below. Pink is the only colour, so the page reads as playful and personal, and the dotted starfield adds atmosphere behind the hero.

**Mood:** playful, dark, personal, bold, atmospheric

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#262626` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#d946ef` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#f472b6` · `#a3a3a3` · `#737373` · `#d4d4d4` · `#000000` · `#262626` · `#525252` · `#db2777`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 30px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_30px_rgba(236,72,153,0.4)]`, `shadow-[0_0_20px_rgba(0,0,0,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="w-full py-3.5 mt-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl text-white font-medium text-sm tracking-wide shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Timeline (`timeline`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #262626;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #ec4899;
  --color-accent-2: #d946ef;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#262626',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#ec4899',
    accent2: '#d946ef',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the name very large in bold sans, in pink (#ec4899) on the dark ground.
- **Do:** Separate role words with grey bullets on one line beneath the name.
- **Do:** Keep the dotted starfield as a background texture behind the hero.
- **Don't:** Don't use pink for body text or long paragraphs.
- **Don't:** Don't set the page on white; the starfield ground is dark.
- **Don't:** Don't add a second bright colour beside the pink.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
