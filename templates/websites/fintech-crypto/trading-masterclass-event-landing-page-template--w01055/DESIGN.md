# Design system — Trading Masterclass Event Landing Page Template

`SN-W01055` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark event page has a white serif headline (Playfair Display), centred over a grey sans subline, with gold (#c7a368) as the only warm colour. Countdown figures sit in dark square tiles with tiny uppercase labels, and short check points run between the headline and the countdown. The gold and serif pairing gives the page a premium, invitation-like tone.

**Mood:** premium, invitational, dark, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c7a368` | Primary action and highlights |

Palette by frequency of use: `#c7a368` · `#ffffff` · `#737373` · `#a3a3a3` · `#0a0a0a` · `#050505` · `#525252` · `#000000` · `#d4d4d4` · `#171717`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Playfair Display, Inter, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(199,163,104,0.4)]`, `shadow-[0_0_50px_-10px_rgba(199,163,104,0.4)]`, `shadow-[0_0_50px_-20px_rgba(199,163,104,0.15)]`
- **Content width:** `max-w-6xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="text-xs font-semibold uppercase tracking-wider text-[#050505] bg-[#C7A368] hover:bg-[#e0b979] px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_rgba(199,163,104,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Bento grid (`bento-grid`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. FAQ (`faq`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #525252;
  --color-border: #ffffff;
  --color-accent: #c7a368;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#525252',
    line: '#ffffff',
    accent: '#c7a368',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a white serif, centred, with a grey sans subline
- **Do:** Use gold (#c7a368) only for the primary button and small accents
- **Do:** Show countdown figures in dark tiles with tiny uppercase labels beneath
- **Don't:** Don't use a light ground; the page is near-black.
- **Don't:** Don't use gold as a large background fill; it is an accent
- **Don't:** Don't put a second accent colour beside the gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
