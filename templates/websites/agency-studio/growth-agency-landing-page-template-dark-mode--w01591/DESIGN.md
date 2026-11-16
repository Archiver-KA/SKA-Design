# Design system — Growth Agency Landing Page Template (Dark Mode)

`SN-W01591` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground with a long serif headline in white, set in four centred lines with a dollar figure in the same serif. A small dark-rose badge above the headline carries the audience line in spaced uppercase, and a grey paragraph sits below. The page is restrained: serif type, dark ground, and rose used only inside the badge.

**Mood:** restrained, serious, dark, serif-led, centred

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#881337` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#0a0a0a` · `#000000` · `#6b7280` · `#881337` · `#fb7185` · `#050505` · `#262626`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-md`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="md:px-5 md:py-2.5 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-rose-500/20 hover:bg-rose-600 hover:text-white shrink-0 text-xs font-medium text-black font-montserrat bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Testimonials (`testimonials`)
7. Pricing (`pricing`)
8. FAQ (`faq`)
9. Booking form (`booking`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #881337;
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
    accent: '#881337',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif at large size, centred over several lines
- **Do:** Use the dark rose (#881337) only inside the audience badge
- **Do:** Keep body copy short and grey beneath the headline
- **Don't:** Don't set the headline in a sans-serif; the serif carries the page
- **Don't:** Don't use rose for buttons or the headline
- **Don't:** Don't crowd the headline with extra badges or icons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
