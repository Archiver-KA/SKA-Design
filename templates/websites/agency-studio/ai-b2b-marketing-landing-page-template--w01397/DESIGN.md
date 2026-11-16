# Design system — AI B2B Marketing Landing Page Template

`SN-W01397` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep navy ground ([#0a1628]) with a serif display face set large, mixing upright cream type with an italic muted-blue word and a gold word for emphasis. Gold (#b8860b) is the only warm colour and marks the primary button and the key phrase, against a rounded video card on the right. The layout sits in a rounded frame with soft edges, so it reads as editorial.

**Mood:** editorial, premium, navy, serif-led, warm-accented

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a1628` | Page ground |
| Surface | `#0a1628` | Cards, panels, raised areas |
| Text | `#f5f0e6` | Headings and primary copy |
| Muted text | `#f5f0e6` | Secondary copy, captions |
| Accent | `#b8860b` | Primary action and highlights |
| Second accent | `#0f1d32` | Supporting highlights |

Palette by frequency of use: `#b8860b` · `#f5f0e6` · `#a8b4c4` · `#1e3a5f` · `#0a1628` · `#0f1d32` · `#ffffff` · `#ef4444` · `#000000` · `#d4a84b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-[#b8860b]/20`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-4`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="bg-[#f5f0e6] text-[#0a1628] pl-8 pr-6 py-4 rounded-full text-base hover:bg-white hover:scale-[1.02] hover:brightness-110 hover:shadow-lg hover:shadow-white/10 transition-all duration-200 ease-out flex items-center gap-3 font-semibold group/btn">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Pricing (`pricing`)
8. Schedule (`schedule-agenda`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a1628;
  --color-surface: #0a1628;
  --color-text: #f5f0e6;
  --color-muted: #f5f0e6;
  --color-accent: #b8860b;
  --color-accent-2: #0f1d32;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a1628',
    surface: '#0a1628',
    ink: '#f5f0e6',
    muted: '#f5f0e6',
    accent: '#b8860b',
    accent2: '#0f1d32',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase and the primary button in gold (#b8860b) and no other warm colour.
- **Do:** Use the serif display for headlines, with an italic for one phrase per line.
- **Do:** Keep the navy ground (#0a1628) and the rounded frame around the hero.
- **Don't:** Don't use gold as a large fill; it is for text and the button.
- **Don't:** Don't set body text in the serif; the body is sans.
- **Don't:** Don't put a light background behind the hero; the page is navy throughout.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
