# Design system — Studio Twelve

`SN-W00744` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A pale lavender-white page with a near-black serif headline centred over three lines, where the middle line is set in purple (#9333ea) italic. Purple is the only accent, used for the highlight text and small labels, and the rest is neutral grey and white. A dark video card under the headline is the one large dark block, so it draws the eye to the proof.

**Mood:** editorial, soft, confident, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf5ff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#9333ea` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#9333ea` · `#6b7280` · `#e5e7eb` · `#faf5ff` · `#a855f7` · `#9ca3af` · `#f3e8ff` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-purple-500/20 bg-gray-900 text-white hover:bg-purple-600 shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Video / media (`video-media`)
5. Process / steps (`how-it-works`)
6. Call to action (`cta`)
7. About (`about`)
8. Feature grid (`features`)
9. FAQ (`faq`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #faf5ff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #9333ea;
  --color-accent-2: #dc2626;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf5ff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#9333ea',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Instrument Serif, with the key phrase in purple italic (#9333ea)
- **Do:** Keep the page ground pale (#faf5ff) and cards white with hairline borders (#e5e7eb)
- **Do:** Use the dark video card as the only large dark block in the hero
- **Don't:** Don't use purple for large background fills
- **Don't:** Don't set headlines in Inter; Inter is for body copy
- **Don't:** Don't add more than one highlight phrase per section

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
