# Design system — Senior Product Designer Portfolio Template

`SN-W02220` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A monochrome dark portfolio intro: a tight sans headline in off-white with a grey qualifier, a solid white button, and a faint outlined ghost button beside it. Small monospace-style tags label the sections, and a wide-spaced caps row runs along the bottom, so the page is typographic and sparse. The first screen carries no colour.

**Mood:** monochrome, sparse, typographic, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#71717a` · `#27272a` · `#18181b` · `#a1a1aa` · `#d4d4d8` · `#3f3f46` · `#09090b` · `#52525b` · `#c084fc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 48px · h2 14px · h3 18px · body 14px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 text-xs font-medium border px-3 py-1.5 rounded transition-all bg-white/5 hover:bg-white/10 border-white/10 text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Code / terminal (`code-terminal`)
5. About (`about`)
6. Stats band (`stats`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #6366f1;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black (#050505) with off-white headline text
- **Do:** Use a solid white button as the primary call to action
- **Do:** Label sections with small tracked caps in muted grey (#a1a1aa)
- **Don't:** Don't use a coloured page ground; the ground is near-black
- **Don't:** Don't add colour to the first screen
- **Don't:** Don't set the headline in a serif; it is a sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
