# Design system — Agápē Live Wellness Landing Page Template

`SN-W02313` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A warm cream page with a heavy black sans headline whose final word, unites, is set in an italic orange-red gradient. The primary button is a red-orange gradient pill, with a white pill beside it, and the schedule cards sit on the right as white panels. Orange carries the emphasis and the page stays warm and calm.

**Mood:** warm, calm, spiritual, bold, inviting

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fff7ed` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c2410c` | Primary action and highlights |
| Second accent | `#ea580c` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#c2410c` · `#0f172a` · `#e2e8f0` · `#ffedd5` · `#475569` · `#ea580c` · `#64748b` · `#fff7ed` · `#f1f5f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Roboto
- **Body:** Roboto
- **Loaded families:** Roboto, Geist, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 24px · body 12px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-wider`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-gold-aura`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-[420px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-gradient-to-r from-orange-600 to-red-700 text-white px-6 h-10 rounded-full text-xs font-bold tracking-wide hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 flex justify-center items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Call to action (`cta`)
6. Stats band (`stats`)
7. Schedule (`schedule-agenda`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fff7ed;
  --color-surface: #ffffff;
  --color-text: #1c1917;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #c2410c;
  --color-accent-2: #ea580c;
  --font-display: "Roboto", sans-serif;
  --font-body: "Roboto", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fff7ed',
    surface: '#ffffff',
    ink: '#1c1917',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#c2410c',
    accent2: '#ea580c',
  },
  fontFamily: { display: ['Roboto'], sans: ['Roboto'] },
} }
```

## Do and don't

- **Do:** Set the closing word of the headline in italic orange gradient (#c2410c)
- **Do:** Use the red-orange gradient only on the primary button and the emphasis word
- **Do:** Keep the cards white on the cream ground
- **Don't:** Don't use the cream (#fff7ed) as a card fill; it is the page ground
- **Don't:** Don't set the headline in a pale tone
- **Don't:** Don't add cool colours; the slate in the palette does not appear on the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
