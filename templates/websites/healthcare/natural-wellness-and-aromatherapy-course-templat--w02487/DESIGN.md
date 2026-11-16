# Design system — Natural Wellness & Aromatherapy Course Template

`SN-W02487` · healthcare · light mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A bold, large-type hero on white, where the headline is deep blue (#244a70) and its second line switches to lime green (#8ebb14). Bright lime (#d4ff33) is kept for the header button and small badges, which gives one high-contrast call to action. Very large uppercase sans and generous white space make the page read more like a poster than a brochure.

**Mood:** bold, natural, poster-like, bright

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#244a70` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#8ebb14` | Primary action and highlights |
| Second accent | `#d4ff33` | Supporting highlights |

Palette by frequency of use: `#305f8e` · `#ffffff` · `#244a70` · `#f3f4f6` · `#8ebb14` · `#4b5563` · `#d4ff33` · `#374151` · `#f9fafb` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Bebas Neue, Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#305F8E] bg-[#D4FF33] rounded-lg hover:bg-[#ccee22] transition-transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-lime-400/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Stats band (`stats`)
5. Schedule (`schedule-agenda`)
6. Booking form (`booking`)
7. Testimonials (`testimonials`)
8. Call to action (`cta`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #244a70;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #8ebb14;
  --color-accent-2: #d4ff33;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#244a70',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#8ebb14',
    accent2: '#d4ff33',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the main headline in deep blue (#244a70) with one lime highlight line
- **Do:** Use bright lime (#d4ff33) for the single primary button in the header
- **Do:** Keep headlines in uppercase Inter at very large sizes
- **Don't:** Don't set lime (#d4ff33) text on white; contrast is too low
- **Don't:** Don't use more than one highlight colour on a screen
- **Don't:** Don't set small body text in lime

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
