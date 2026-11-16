# Design system — AI Local Visibility Landing Page Template

`SN-W00116` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

AI Sight is a dark navy, direct-response page on a deep navy ground (#0a1828), with a white sans headline and one orange (#ff6b35) phrase set inside a quoted search query. Orange fills the primary button, while the secondary is a dark outline button. Amber stat lines at the bottom add a second warm colour, so the page feels like a sales funnel.

**Mood:** direct, dark, warm, urgent, sales-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a1828` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#e5e5e5` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff6b35` | Primary action and highlights |
| Second accent | `#f4b740` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff6b35` · `#f4b740` · `#e5e5e5` · `#0a1828` · `#132035`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 48px · h2 48px · h3 24px · body 18px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-xl`, `shadow-[#FF6B35]/30`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-6 py-2.5 rounded-lg font-medium text-sm tracking-tight transition-all hover:shadow-lg hover:shadow-[#FF6B35]/20">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Testimonials (`testimonials`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a1828;
  --color-text: #ffffff;
  --color-muted: #e5e5e5;
  --color-border: #ffffff;
  --color-accent: #ff6b35;
  --color-accent-2: #f4b740;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a1828',
    ink: '#ffffff',
    muted: '#e5e5e5',
    line: '#ffffff',
    accent: '#ff6b35',
    accent2: '#f4b740',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline in white bold sans, with one key phrase in orange (#ff6b35)
- **Do:** Use the orange button for the primary action and an outline button for the second
- **Do:** Show proof points as small amber stat lines below the buttons
- **Don't:** Don't use the navy (#132035) as an accent; it is a surface
- **Don't:** Don't stack more than one orange highlight per headline
- **Don't:** Don't set the amber stats in a large size; they are small support

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
