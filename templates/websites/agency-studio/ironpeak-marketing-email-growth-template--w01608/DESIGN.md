# Design system — IronPeak Marketing Email Growth Template

`SN-W01608` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark offer page on near-black (#0a0a0a). The headline is a tight, large Instrument Serif in white, with the figure '$20,000-$50,000' set in rose (#f43f5e) so the number is the only coloured element. Grey subline copy and a small uppercase label keep the hierarchy clear, the layout is centred, and a single framed video sits below the hero.

**Mood:** persuasive, dark, editorial, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f43f5e` | Primary action and highlights |

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
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. FAQ (`faq`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Video / media (`video-media`)
8. Integrations (`integrations`)
9. Testimonials (`testimonials`)
10. Team (`team`)
11. Newsletter signup (`newsletter`)
12. Booking form (`booking`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #f43f5e;
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
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#f43f5e',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Instrument Serif, tight leading, white, with the figure in rose (#f43f5e)
- **Do:** Keep the page on near-black (#0a0a0a) and the subline in grey (#9ca3af)
- **Do:** Frame the hero video with a dark rounded panel and no extra colour
- **Don't:** Don't set the whole headline in rose; only the figure takes the colour
- **Don't:** Don't use the serif for buttons
- **Don't:** Don't put a light background behind the dark hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
