# Design system — Landin Creative Agency Landing Page Template

`SN-W01615` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark creative-agency page on near-black (#131313) with a deep blue glow behind the hero, so the blue (#0055fe) sits in the background rather than on the type. The centred headline is set in DM Sans, white, with the last word faded into grey. Both buttons are pale, one solid and one outlined, and a row of greyed wordmarks below the hero forms a client-logo band with no colour.

**Mood:** premium, dark, calm, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#131313` | Page ground |
| Surface | `#080808` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Accent | `#0055fe` | Primary action and highlights |

Palette by frequency of use: `#131313` · `#0055fe` · `#ffffff` · `#7aa6ff` · `#efefec` · `#080808` · `#1f1f1f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Sans
- **Body:** DM Sans
- **Loaded families:** DM Sans
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 24px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-[10px]` (10px), `rounded-full` (9999px), `rounded-[20px]` (20px)
- **Content width:** `max-w-3xl`, `max-w-4xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="rounded-[10px] px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Case studies (`case-studies`)
5. Bento grid (`bento-grid`)
6. Product grid (`product-grid`)
7. Pricing (`pricing`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #131313;
  --color-surface: #080808;
  --color-text: #ffffff;
  --color-accent: #0055fe;
  --font-display: "DM Sans", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 10px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#131313',
    surface: '#080808',
    ink: '#ffffff',
    accent: '#0055fe',
  },
  fontFamily: { display: ['DM Sans'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Use the blue (#0055fe) as a soft glow behind the hero, not on text
- **Do:** Set the headline in DM Sans, white, with the last word in grey
- **Do:** Show client logos as muted grey wordmarks in one row
- **Don't:** Don't use the blue for text
- **Don't:** Don't add more than one glow per screen
- **Don't:** Don't fill the hero buttons with blue; the first screen uses white and outline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
