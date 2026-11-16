# Design system — Momentum Documentary Landing Page Template

`SN-W02129` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A cinematic documentary landing page on a near-black, faintly green ground (#090b0a) with cream type (#eeeee8). Headlines are large serif in two stacked lines, like title cards, and they are the strongest element on the page. Small tracked uppercase labels, a thin vertical scroll line and outlined pill buttons keep the chrome quiet.

**Mood:** cinematic, dark, elegant, understated, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#090b0a` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#eeeee8` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d2b477` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d2b477` · `#000000` · `#090b0a` · `#c9b88e` · `#111410` · `#eeeee8` · `#101410` · `#151a16` · `#07110f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow Condensed
- **Body:** Barlow Condensed
- **Loaded families:** Barlow Condensed, IBM Plex Mono
- **Scale (largest breakpoint):** h2 48px · h3 48px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-wider`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Content width:** `max-w-2xl`, `max-w-5xl`
- **Section padding:** `py-12`, `py-24`
- **Common gaps:** `gap-3`, `gap-8`, `gap-5`

**Primary button**

```html
<a class="flex w-full items-center justify-between bg-[#d2b477] px-5 py-4 text-xs uppercase tracking-wider text-[#101410] transition-colors hover:bg-[#e5c992]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Timeline (`timeline`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Newsletter signup (`newsletter`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #090b0a;
  --color-surface: #000000;
  --color-text: #eeeee8;
  --color-border: #ffffff;
  --color-accent: #d2b477;
  --font-display: "Barlow Condensed", sans-serif;
  --font-body: "Barlow Condensed", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#090b0a',
    surface: '#000000',
    ink: '#eeeee8',
    line: '#ffffff',
    accent: '#d2b477',
  },
  fontFamily: { display: ['Barlow Condensed'], sans: ['Barlow Condensed'] },
} }
```

## Do and don't

- **Do:** Set headlines large in a high-contrast serif, cream (#eeeee8) on the near-black ground.
- **Do:** Use small tracked uppercase labels above headings, with a short rule before them.
- **Do:** Keep buttons as outlined pills with a circle icon, not filled blocks.
- **Don't:** Don't set headlines in a condensed sans; use the serif.
- **Don't:** Don't add bright accent colours; the page is cream and near-black only.
- **Don't:** Don't use card shadows; hierarchy comes from scale and thin rules.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
