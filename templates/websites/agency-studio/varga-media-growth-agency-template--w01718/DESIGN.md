# Design system — Varga Media Growth Agency Template

`SN-W01718` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, high-contrast lead generation page: a black ground [#000000] holds a near-black card with a white Instrument Serif headline and rounded pill tags. The one emphasised phrase in each headline is set in an italic violet-pink, which is the page's signature. Rounded forms do most of the work: a pill eyebrow, a pill nav button and a large rounded card as the frame for the hero video.

**Mood:** dark, conversion-led, serif-accented, rounded, high-contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#000000` · `#fb7185` · `#0a0a0a` · `#881337` · `#6b7280` · `#d1d5db` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
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
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Listings (`listings`)
7. Process / steps (`how-it-works`)
8. Integrations (`integrations`)
9. Testimonials (`testimonials`)
10. Team (`team`)
11. Newsletter signup (`newsletter`)
12. FAQ (`faq`)
13. Booking form (`booking`)
14. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #111111;
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
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#111111',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif and mark one phrase per headline in italic
- **Do:** Frame hero media in a large rounded card on a dark surface (#0a0a0a)
- **Do:** Use pill-shaped buttons and eyebrow tags for every call to action and label
- **Don't:** Don't set the page on a coloured background; the ground stays black
- **Don't:** Don't use square corners on cards or media frames
- **Don't:** Don't set body copy in the accent colour; keep it to headline emphasis

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
