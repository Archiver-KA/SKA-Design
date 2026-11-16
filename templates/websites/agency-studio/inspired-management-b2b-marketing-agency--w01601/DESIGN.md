# Design system — Inspired Management B2B Marketing Agency 

`SN-W01601` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, editorial performance-marketing page on near-black (#0a0a0a), with Instrument Serif carrying the headline. The promised result, '15-25 Qualified Applicants', is set in italic coral (#fb7185) while the rest of the headline stays white, so the offer is the focal point. Small uppercase pill labels and a thin coral underline under the headline repeat the same accent, and the layout is centred.

**Mood:** editorial, persuasive, dark, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#0a0a0a` · `#000000` · `#881337` · `#6b7280` · `#fb7185` · `#d1d5db` · `#e11d48`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, WistiaPlayerInterNumbersSemiBold, WistiaPlayerInter
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-md`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-2xl`, `max-w-7xl`
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
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Team (`team`)
6. Process / steps (`how-it-works`)
7. Booking form (`booking`)
8. Integrations (`integrations`)
9. Testimonials (`testimonials`)
10. Newsletter signup (`newsletter`)
11. FAQ (`faq`)

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

- **Do:** Set headlines in Instrument Serif with the promised result in italic coral (#fb7185)
- **Do:** Use the coral only on the promise phrase, its underline and the primary button
- **Do:** Keep the page on near-black (#0a0a0a) with white headline text
- **Don't:** Don't use a rose page ground; the background is near-black
- **Don't:** Don't set body copy in the serif
- **Don't:** Don't use coral for paragraph text

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
