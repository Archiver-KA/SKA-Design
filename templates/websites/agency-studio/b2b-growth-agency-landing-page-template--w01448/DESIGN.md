# Design system — B2B Growth Agency Landing Page Template

`SN-W01448` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep navy ground ([#0b1020]) with a slightly lighter card ([#151e32]) behind the hero and a green ([#22c55e]) italic accent on the key phrase. The headline is a large serif in white over three centred lines, with a small blue eyebrow tag above. The palette is cool and corporate, and the green is saved for the one highlighted phrase.

**Mood:** corporate, cool, serif-led, focused, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b1020` | Page ground |
| Surface | `#0b1020` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#f8fafc` | Secondary copy, captions |
| Accent | `#22c55e` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#2563eb` · `#f8fafc` · `#263247` · `#94a3b8` · `#151e32` · `#000000` · `#3b82f6` · `#0b1020` · `#22c55e` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-2xl`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-12`, `py-20`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-[#2563EB]/20 bg-[#2563EB] text-[#F8FAFC] hover:bg-[#3B82F6] shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. FAQ (`faq`)
8. Booking form (`booking`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0b1020;
  --color-surface: #0b1020;
  --color-text: #f5f5f5;
  --color-muted: #f8fafc;
  --color-accent: #22c55e;
  --color-accent-2: #22c55e;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b1020',
    surface: '#0b1020',
    ink: '#f5f5f5',
    muted: '#f8fafc',
    accent: '#22c55e',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use green (#22c55e) for the italic highlight in the headline only
- **Do:** Set headlines in Instrument Serif at large size
- **Do:** Keep the hero card at #151e32 on the #0b1020 ground
- **Don't:** Don't use the blue (#2563eb) as a background for the hero
- **Don't:** Don't use green for buttons or body text
- **Don't:** Don't add a second highlight colour to the same headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
