# Design system — Car Detailing Landing Page Template

`SN-W03852` · business-services · dark mode · Sinera Atlas theme `route` · language `cs`

## Direction

A centred, near-black hero with a bold two-line white sans-serif headline and a grey line of service names separated by vertical bars. Small outlined tags sit above the headline, and a solid red button (#e10600) leads the actions with an outlined button beside it. The composition is symmetric and direct, and red is reserved for the booking action.

**Mood:** centred, premium, direct, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e10600` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e10600` · `#737373` · `#a3a3a3` · `#000000` · `#d4d4d4` · `#171717` · `#525252` · `#050505` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** system sans-serif
- **Body:** system sans-serif
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-green-900/20`, `shadow-red-900/20`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 bg-[#E10600] text-white text-sm font-semibold rounded-full hover:bg-[#c00500] transition-colors shadow-[0_0_20px_rgba(225,6,0,0.3)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Menu list (`menu-list`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #171717;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #e10600;
  --color-accent-2: #25d366;
  --font-display: "system sans-serif", serif;
  --font-body: "system sans-serif", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#171717',
    ink: '#ffffff',
    muted: '#737373',
    line: '#ffffff',
    accent: '#e10600',
    accent2: '#25d366',
  },
  fontFamily: { display: ['system sans-serif'], sans: ['system sans-serif'] },
} }
```

## Do and don't

- **Do:** Set the headline centred in bold white sans-serif.
- **Do:** Use the red (#e10600) for the booking button only.
- **Do:** Separate service names with vertical bars in grey.
- **Don't:** Don't use red for the secondary button.
- **Don't:** Don't set the headline in a light weight.
- **Don't:** Don't add photographs behind the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
