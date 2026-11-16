# Design system — Local Webdesign & SEO Landing Page Template

`SN-W01625` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `de`

## Direction

A dark German web-design page on near-black (#0a0a0a) with white headlines in a serif display face. The brand word 'loqal' is orange (#f97316), and orange also fills the main CTA, the logo dot and a top ribbon. A grey secondary button and a sans body keep the hierarchy quiet, and a mock browser card with a green ranking chip (+12%) sits in the hero to show the outcome.

**Mood:** energetic, dark, local, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#737373` · `#000000` · `#a3a3a3` · `#171717` · `#262626` · `#22c55e` · `#fb923c` · `#ef4444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display, JetBrains Mono, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 18px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(0,0,0,0.5)]`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-orange-500 hover:bg-orange-400 text-black px-6 py-3 rounded-full font-semibold text-sm transition-colors whitespace-nowrap shadow-lg shadow-orange-500/20">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Process / steps (`how-it-works`)
6. Stats band (`stats`)
7. Integrations (`integrations`)
8. Benefits (`benefits`)
9. Awards / press (`awards-press`)
10. FAQ (`faq`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#000000',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use orange (#f97316) for the primary button, the brand word and the top ribbon only
- **Do:** Set the headline in a serif display face, white, with one italic grey phrase
- **Do:** Keep the page on near-black (#0a0a0a) with a mock browser card as the hero visual
- **Don't:** Don't use green (#22c55e) for anything except ranking or positive numbers
- **Don't:** Don't set body copy in the serif
- **Don't:** Don't add orange backgrounds to sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
