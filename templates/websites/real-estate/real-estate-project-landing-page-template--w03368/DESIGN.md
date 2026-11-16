# Design system — Real Estate Project Landing Page Template

`SN-W03368` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A near-black page with a soft magenta glow in the upper left and a crisp white Book Visit button in the navigation. The first screen is almost entirely black, and pink (#ec4899) marks the AI Assistant link and small highlights. The navigation is a translucent dark bar with small grey text, so the page reads as dark, atmospheric and technical.

**Mood:** dark, atmospheric, minimal, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ec4899` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ec4899` · `#737373` · `#a3a3a3` · `#262626` · `#000000` · `#404040` · `#0a0a0a` · `#525252` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-[0.2em]`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_#ec4899]`, `shadow-[0_0_50px_rgba(0,0,0,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-[85%]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="text-xs font-bold bg-white text-black px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Bento grid (`bento-grid`)
7. Timeline (`timeline`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)
11. Call to action (`cta`)
12. About (`about`)
13. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #ec4899;
  --color-accent-2: #22c55e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#ec4899',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0a0a0a) with white headings
- **Do:** Use pink (#ec4899) for the AI link and small highlights only
- **Do:** Make the primary navigation button solid white with black text
- **Don't:** Don't put pink text on the dark glow at small sizes
- **Don't:** Don't use pink as a button fill; the buttons are white
- **Don't:** Don't use light backgrounds for sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
