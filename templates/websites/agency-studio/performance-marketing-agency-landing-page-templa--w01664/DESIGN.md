# Design system — Performance Marketing Agency Landing Page Template

`SN-W01664` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `cs`

## Direction

A near-black hero with a bold white Czech headline, the last line in grey, and a bright mint-green (#00e08f) pill as the primary button. A small mint badge sits above the headline, and stat and feature rows follow below. The mint is the single signal colour against a deep ink ground, giving a sharp, performance-focused tone.

**Mood:** sharp, performance-led, dark, confident, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0c10` | Page ground |
| Surface | `#1f2228` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#00e08f` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#00e08f` · `#0a0c10` · `#1f2228` · `#ef4444` · `#f97316` · `#eab308` · `#2d313a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-all duration-300 overflow-hidden hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Case studies (`case-studies`)
7. Services (`services`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0c10;
  --color-surface: #1f2228;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #00e08f;
  --color-accent-2: #f97316;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0c10',
    surface: '#1f2228',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#00e08f',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use the mint (#00e08f) for the primary button and the eyebrow badge
- **Do:** Set headlines bold and large in white, with a grey second line
- **Do:** Keep the orange (#f97316) to secondary highlights only
- **Don't:** Don't use mint for body text or long links on the dark ground
- **Don't:** Don't add more than one saturated accent to a section
- **Don't:** Don't set the headline below display size; the page relies on scale

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
