# Design system — Ember Client Acquisitions

`SN-W00357` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A high-contrast, text-led sales page on black with very large white sans headlines set in long, lettered sentences that read like a pitch. A small orange status dot and a dark pill label sit above the headline. The accent orange (#f97316) appears only in small highlights and the navigation call to action, so the copy does the persuading.

**Mood:** direct, bold, text-led, confident

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#090909` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f97316` · `#71717a` · `#fb923c` · `#fdba74` · `#000000` · `#a1a1aa` · `#d4d4d8` · `#52525b` · `#090909`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, WistiaPlayerInterNumbersSemiBold
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.18em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_24px_80px_rgba(0,0,0,0.55)]`
- **Content width:** `max-w-3xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-orange-500 px-8 py-4 text-sm font-medium text-black transition duration-300 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-4 focus:ring-offset-[#050505] sm:px-10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Call to action (`cta`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Benefits (`benefits`)
9. FAQ (`faq`)
10. Booking form (`booking`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #090909;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    surface: '#090909',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines large in white sans with tight leading
- **Do:** Use orange (#f97316) only for the navigation call to action and small highlights
- **Do:** Keep the pill label above headlines small, with a status dot
- **Don't:** Don't add imagery to the hero; the copy carries the page
- **Don't:** Don't set headline text in orange
- **Don't:** Don't set headlines in a light weight

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
