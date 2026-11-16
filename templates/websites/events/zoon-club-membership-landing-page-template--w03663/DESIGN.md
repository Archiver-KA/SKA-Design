# Design system — Zoon Club Membership Landing Page Template

`SN-W03663` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, restrained membership page where near-black navy carries the whole layout. The headline is large and white, with its final phrase picked out in a gold-to-red gradient, and a solid gold pill is the single primary action. Secondary actions are dark and outlined, so gold stays rare and reads as the mark of the club.

**Mood:** premium, dark, exclusive, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#080c16` | Page ground |
| Surface | `#0b1120` | Cards, panels, raised areas |
| Text | `#94a3b8` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Accent | `#d4af37` | Primary action and highlights |
| Second accent | `#e2e8f0` | Supporting highlights |

Palette by frequency of use: `#d4af37` · `#e2e8f0` · `#0b1120` · `#080c16` · `#64748b` · `#94a3b8` · `#cbd5e1` · `#475569` · `#8b2323` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(212,175,55,0.2)]`, `shadow-2xl`, `shadow-[0_0_15px_rgba(212,175,55,0.15)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#D4AF37] hover:bg-[#C5A028] text-[#080C16] text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Sign-in form (`auth-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #080c16;
  --color-surface: #0b1120;
  --color-text: #94a3b8;
  --color-muted: #64748b;
  --color-accent: #d4af37;
  --color-accent-2: #e2e8f0;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#080c16',
    surface: '#0b1120',
    ink: '#94a3b8',
    muted: '#64748b',
    accent: '#d4af37',
    accent2: '#e2e8f0',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use gold (#d4af37) for the primary button and one highlighted phrase per screen
- **Do:** Set the headline large in white, with the highlight on the final phrase
- **Do:** Keep secondary buttons dark with a thin outline
- **Don't:** Don't use gold for body text or large areas
- **Don't:** Don't add a light background section; the page stays on navy
- **Don't:** Don't use more than one gradient highlight in the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
