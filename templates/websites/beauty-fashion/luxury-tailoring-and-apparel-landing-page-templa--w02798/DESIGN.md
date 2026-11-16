# Design system — Luxury Tailoring & Apparel Landing Page Template

`SN-W02798` · beauty-fashion · light mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A light editorial tailoring page on white (#ffffff). A large bold sans headline sits left in near-black, its last phrase in italic, above a short paragraph and two buttons. The right half is a tall photograph of a man in a blue checked suit, the main colour in the layout.

**Mood:** editorial, tailored, clean, neutral, crafted

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#000000` | Headings and primary copy |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Mono
- **Body:** IBM Plex Mono
- **Loaded families:** IBM Plex Mono, Inter, Jost
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-10`, `gap-3`, `gap-5`

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --font-display: "IBM Plex Mono", sans-serif;
  --font-body: "IBM Plex Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#000000',
  },
  fontFamily: { display: ['IBM Plex Mono'], sans: ['IBM Plex Mono'] },
} }
```

## Do and don't

- **Do:** Keep the page white (#ffffff) and use near-black for headlines and the primary button.
- **Do:** Set the headline heavy, with the final phrase in italic.
- **Do:** Place the full-height photograph on the right half of the hero.
- **Don't:** Don't add decorative colour to the layout; the suit photograph supplies it.
- **Don't:** Don't use a dark background for this light style.
- **Don't:** Don't set the tracked labels in a heavy weight.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
