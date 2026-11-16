# Design system — Corporate Apparel Landing Page Template

`SN-W02732` · beauty-fashion · light mode · Sinera Atlas theme `route` · language `en`

## Direction

Light, plain corporate landing page with a centred serif headline in dark navy and a short grey subline beneath. The header is a white bar with one saturated blue button (#2563eb) for the quote call to action, and the lower area holds a wide photo band of people at work. The stance is restrained and business-like, with blue reserved for the single action.

**Mood:** plain, corporate, restrained, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#0a192f` | Headings and primary copy |
| Muted text | `#0a192f` | Secondary copy, captions |
| Border | `#0a192f` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#9333ea` | Supporting highlights |

Palette by frequency of use: `#0a192f` · `#ffffff` · `#2563eb` · `#f8fafc` · `#dcfce7` · `#15803d` · `#dbeafe` · `#f3e8ff` · `#7e22ce` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="bg-[#2563EB] text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-[#2563EB]/20 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Process / steps (`how-it-works`)
5. Pricing (`pricing`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #0a192f;
  --color-muted: #0a192f;
  --color-border: #0a192f;
  --color-accent: #2563eb;
  --color-accent-2: #9333ea;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#0a192f',
    muted: '#0a192f',
    line: '#0a192f',
    accent: '#2563eb',
    accent2: '#9333ea',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#2563eb) only for the header quote button and one main action per section
- **Do:** Centre headlines in dark navy (#0a192f) with a short grey subline
- **Do:** Show people photography as wide, full-width bands below the hero
- **Don't:** Don't use dark section backgrounds; the template is light
- **Don't:** Don't add more accent colours to the hero; green and purple do not show on the first screen
- **Don't:** Don't left-align the hero headline; it sits in the centre

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
