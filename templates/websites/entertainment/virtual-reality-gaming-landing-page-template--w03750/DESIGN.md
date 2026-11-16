# Design system — Virtual Reality Gaming Landing Page Template

`SN-W03750` · entertainment · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep navy page [#020617] with translucent glass panels layered over a dark ground. Blue [#3b82f6] is the primary colour, used on the main button and the online badge, and the headline is a large white sans-serif set in short, tight lines. Stat tiles in muted violet and a live image panel give the layout a gaming-dashboard feel.

**Mood:** immersive, glassy, techy, dark, energetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#020617` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#f1f5f9` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#d97706` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#d97706` · `#a3a3a3` · `#a1a1aa` · `#60a5fa` · `#93c5fd` · `#000000` · `#262626` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-lg`, `shadow-blue-500/25`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 bg-blue-500 hover:bg-blue-400 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Call to action (`cta`)
6. Pricing (`pricing`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), Chart.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #020617;
  --color-surface: #000000;
  --color-text: #f1f5f9;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #d97706;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#020617',
    surface: '#000000',
    ink: '#f1f5f9',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#d97706',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use blue (#3b82f6) for the primary button and status badges only
- **Do:** Build cards as translucent dark panels with rounded corners
- **Do:** Set the headline in large white sans-serif with tight line height
- **Don't:** Don't use flat, opaque panels that break the glass effect
- **Don't:** Don't add a second saturated colour to the primary buttons
- **Don't:** Don't set body copy in pure white; keep it in soft grey

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
