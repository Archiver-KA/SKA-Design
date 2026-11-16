# Design system — Mortgage Growth Agency Landing Page Template (Dark Mode)

`SN-W01003` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark growth-agency hero on near-black (#0a0a0a), with a large white serif headline in which one phrase is set in italic coral (#fb7185). The hero sits in a rounded dark panel with a thin border and a faint red glow, and a dashboard preview is cropped below the copy. Red is used sparingly, for the badge, the italic phrase and an underline rule, so the page feels urgent but controlled.

**Mood:** urgent, dark, bold, editorial, controlled

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#000000` · `#fb7185` · `#0a0a0a` · `#881337` · `#6b7280` · `#d1d5db` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Stats band (`stats`)
6. Process / steps (`how-it-works`)
7. Integrations (`integrations`)
8. Testimonials (`testimonials`)
9. Services (`services`)
10. Newsletter signup (`newsletter`)
11. FAQ (`faq`)
12. Booking form (`booking`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb7185;
  --font-display: "Instrument Serif", serif;
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
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the italic phrase in coral (#fb7185) and keep the rest of the headline white.
- **Do:** Use the coral underline and the small badge as the only red accents.
- **Do:** Keep the hero inside a rounded dark panel with a thin border.
- **Don't:** Don't use the coral as a button fill.
- **Don't:** Don't set the headline in a bold sans-serif.
- **Don't:** Don't put a light background behind the hero panel.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
