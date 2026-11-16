# Design system — Memorial Tribute Landing Page Template

`SN-W04237` · other-landing · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A calm, dignified memorial page on a warm off-white ground (#fdfcf8), with a large serif headline in dark brown-black. The second line is set in italic in a muted olive-gold (#9c8558), which is the only accent on the page. Buttons are dark and rectangular with small corners, and the navigation is small and quiet.

**Mood:** dignified, warm, literary, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fdfcf8` | Page ground |
| Surface | `#e5e0d6` | Cards, panels, raised areas |
| Text | `#2d2a26` | Headings and primary copy |
| Muted text | `#5c554b` | Secondary copy, captions |
| Border | `#d6cec3` | Hairlines, dividers, outlines |
| Accent | `#9c8558` | Primary action and highlights |

Palette by frequency of use: `#2d2a26` · `#5c554b` · `#9c8558` · `#fdfcf8` · `#d6cec3` · `#82786b` · `#e5e0d6` · `#ebe5da` · `#4a453e` · `#403c36`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Lato
- **Loaded families:** Cormorant Garamond, Lato
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, bold
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-[#2D2A26]/10`, `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-12`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="inline-block px-10 py-4 bg-[#FDFCF8] text-[#2D2A26] text-sm font-medium tracking-wide rounded-sm hover:bg-[#EBE5DA] transition-colors shadow-lg shadow-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Timeline (`timeline`)
5. Pricing (`pricing`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fdfcf8;
  --color-surface: #e5e0d6;
  --color-text: #2d2a26;
  --color-muted: #5c554b;
  --color-border: #d6cec3;
  --color-accent: #9c8558;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Lato", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fdfcf8',
    surface: '#e5e0d6',
    ink: '#2d2a26',
    muted: '#5c554b',
    line: '#d6cec3',
    accent: '#9c8558',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Lato'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif face, with the second line in italic olive-gold (#9c8558)
- **Do:** Use dark brown-black (#2d2a26) for buttons and headings on the cream ground
- **Do:** Keep navigation small and quiet, with the sign-in link underlined
- **Don't:** Don't use the olive-gold for buttons or large fills
- **Don't:** Don't use bright or saturated colours anywhere on the page
- **Don't:** Don't set the headline in a sans-serif; the serif carries the tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
