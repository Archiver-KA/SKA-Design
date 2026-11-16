# Design system — Click Antilles V1

`SN-W01869` · portfolio · light mode · Sinera Atlas theme `route` · language `fr`

## Direction

A light French business page framed by a dark navy hero card with rounded corners, sitting on a white ground. The headline is a white serif, and one phrase, 'votre projet', is a pink-to-orange italic gradient, the only colour in the card. A magenta filled pill and a dark outlined pill carry the calls to action, and the nav is a plain white bar.

**Mood:** polished, dark-card, elegant, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |
| Second accent | `#f97316` | Supporting highlights |

Palette by frequency of use: `#111827` · `#e11d48` · `#ffffff` · `#ffe4e6` · `#fff1f2` · `#e5e7eb` · `#f3f4f6` · `#6b7280` · `#374151` · `#f43f5e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[1.25rem]` (1.25rem), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-lg`
- **Content width:** `max-w-3xl`, `max-w-6xl`
- **Section padding:** `py-16`, `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-rose-600 text-white hover:bg-rose-500">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Announcement bar (`announcement-bar`)
3. Navigation bar (`navbar`)
4. Hero (`hero`)
5. Marquee (`marquee`)
6. Feature grid (`features`)
7. Process / steps (`how-it-works`)
8. Gallery / portfolio (`gallery-portfolio`)
9. Call to action (`cta`)
10. Newsletter signup (`newsletter`)
11. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #e11d48;
  --color-accent-2: #f97316;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#e11d48',
    accent2: '#f97316',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero as a dark navy card with rounded corners on a white page
- **Do:** Use one gradient italic phrase in the headline for emphasis
- **Do:** Pair a magenta filled pill with a dark outlined pill for the calls to action
- **Don't:** Don't use the light pink (#ffe4e6) as the page ground
- **Don't:** Don't put the gradient on more than one phrase per screen
- **Don't:** Don't set the headline in sans-serif; the design uses a serif

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
