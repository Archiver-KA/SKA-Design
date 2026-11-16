# Design system — Breathe Leads | 15 New Clients in 90 Days or Your Money Back

`SN-W03845` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, quiet page on a near-black ground, with a large serif headline in white set with tight spacing and grey supporting copy beneath it. The main content sits in a rounded, nearly black panel that holds a video, so the offer is framed like a product demo. The only interactive colour in the first view is a white pill button in the navigation.

**Mood:** minimal, dark, editorial, sharp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#f43f5e` · `#000000` · `#0a0a0a` · `#fb7185` · `#881337` · `#121212` · `#050505` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, WistiaPlayerInterNumbersSemiBold
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-[1.5rem]` (1.5rem), `rounded-full` (9999px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-2xl`, `shadow-lg`, `shadow-black`
- **Content width:** `max-w-5xl`, `max-w-6xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-6`, `gap-2`, `gap-10`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Schedule (`schedule-agenda`)
5. Feature grid (`features`)
6. Team (`team`)
7. Process / steps (`how-it-works`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #fb7185;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 1.5rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#121212',
    ink: '#ffffff',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif with tight spacing, in white.
- **Do:** Frame media in a rounded, near-black panel.
- **Do:** Keep the call to action as a white pill button.
- **Don't:** Don't add a coloured background to the hero.
- **Don't:** Don't set the supporting copy in pure white.
- **Don't:** Don't introduce a colour accent into the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
