# Design system — YouTube Marketing SaaS Landing Page Template

`SN-W01742` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pt-BR`

## Direction

A dark SaaS landing page on near-black [#09090b] where the headline sets its second line in grey and ends the phrase with a blue [#3b82f6] word. Buttons follow the same pattern: a white pill for the primary action and a translucent dark pill for the secondary. A thin glass navigation bar floats above the hero, and the palette stays blue, grey and white.

**Mood:** dark, saas, crisp, glass, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#8b5cf6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#3b82f6` · `#a1a1aa` · `#18181b` · `#d4d4d8` · `#000000` · `#2563eb` · `#8b5cf6` · `#10b981` · `#09090b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 16px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-black/50`, `shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full bg-zinc-100 px-4 font-medium text-zinc-900 transition-all hover:bg-white hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #8b5cf6;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#8b5cf6',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in white with the second line in grey and one blue word
- **Do:** Use a white pill for the primary button and a translucent dark pill for the secondary
- **Do:** Float the navigation bar as a glass panel above the hero
- **Don't:** Don't use the blue for more than the highlight word and the primary action
- **Don't:** Don't set the page on a light background
- **Don't:** Don't use square buttons; the pill is the button shape

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
