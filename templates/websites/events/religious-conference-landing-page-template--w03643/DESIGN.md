# Design system — Religious Conference Landing Page Template

`SN-W03643` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A calm, traditional event page on a soft grey-green ground, with a large serif headline in charcoal whose final words are set in a muted sky blue (#4ba3e3). A small pill date label sits above it, followed by a grey subtitle and an uppercase venue line. The navigation is a floating glass bar, and the primary action is a dark filled button beside an outlined one.

**Mood:** calm, traditional, welcoming, orderly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ebedea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2d322f` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ba3e3` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#4ba3e3` · `#2d322f` · `#1e2420` · `#ebedea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 30px · body 20px
- **Weights in use:** normal, medium
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_8px_30px_rgba(45,50,47,0.04)]`, `shadow-[0_20px_40px_rgba(75,163,227,0.08)]`, `shadow-[0_8px_32px_rgba(75,163,227,0.3)]`
- **Content width:** `max-w-[1400px]`, `max-w-[1000px]`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="w-full bg-[#4ba3e3] text-white rounded-full py-4 text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-[#1e2420] transition-colors flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Feature grid (`features`)
6. Video / media (`video-media`)
7. Schedule (`schedule-agenda`)
8. Contact form (`contact-form`)
9. App download (`app-download`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ebedea;
  --color-surface: #ffffff;
  --color-text: #2d322f;
  --color-border: #ffffff;
  --color-accent: #4ba3e3;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ebedea',
    surface: '#ffffff',
    ink: '#2d322f',
    line: '#ffffff',
    accent: '#4ba3e3',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the headline large in charcoal (#2d322f), with the key words in sky blue (#4ba3e3)
- **Do:** Use the blue for highlighted headline words and small icons only
- **Do:** Place the navigation in a floating translucent bar above the hero
- **Don't:** Don't use the blue as a large background colour
- **Don't:** Don't set the subtitle in bold
- **Don't:** Don't put the headline over busy photography

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
