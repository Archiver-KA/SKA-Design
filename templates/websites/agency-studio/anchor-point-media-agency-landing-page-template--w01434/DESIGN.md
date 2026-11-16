# Design system — Anchor Point Media Agency Landing Page Template

`SN-W01434` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black ground ([#0a0a0a]) with a coral-red accent ([#f43f5e]) used on one italic phrase per headline and a small uppercase eyebrow above it. The headline is a large serif in white, centred and packed into five or six lines with very tight leading. The page reads as a direct-response offer rather than a brand story, and the serif italic carries the emphasis.

**Mood:** direct, dramatic, high-pressure, dark, serif-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |
| Second accent | `#d99b4a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#000000` · `#881337` · `#0a0a0a` · `#fb7185` · `#d1d5db` · `#6b7280` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, WistiaPlayerInterNumbersSemiBold
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-3xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. Services (`services`)
8. Newsletter signup (`newsletter`)
9. FAQ (`faq`)
10. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
  --color-accent-2: #d99b4a;
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
    accent: '#f43f5e',
    accent2: '#d99b4a',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of each headline in Instrument Serif italic in #f43f5e
- **Do:** Keep the page ground at #0a0a0a with white body text
- **Do:** Put a small uppercase eyebrow label above each headline
- **Don't:** Don't use the light palette, the hero is dark throughout
- **Don't:** Don't set headlines in sans-serif
- **Don't:** Don't use the rose colour for body copy or large fills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
