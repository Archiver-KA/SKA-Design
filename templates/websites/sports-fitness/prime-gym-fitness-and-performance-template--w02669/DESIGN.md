# Design system — Prime Gym Fitness & Performance Template

`SN-W02669` · sports-fitness · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A black luxury-gym hero with a large serif headline in which CHAMPIONS is set in lime (#a3e635). Lime is the only colour and also marks the primary button, so the page reads as dark and sharp. The layout relies mostly on large type.

**Mood:** premium, dark, sharp, luxurious, stark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#e5e5e5` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |

Palette by frequency of use: `#a3e635` · `#ffffff` · `#000000` · `#27272a` · `#a3a3a3` · `#737373` · `#171717` · `#0a0a0a` · `#262626` · `#18181b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, Cormorant Garamond, DM Sans
- **Scale (largest breakpoint):** h1 136px · h2 88px · h3 30px · body 12px
- **Weights in use:** medium, bold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-[0_0_40px_rgba(163,230,53,0.15)]`, `shadow-[0_4px_24px_rgba(163,230,53,0.3)]`, `shadow-[0_0_15px_rgba(163,230,53,0.3)]`
- **Content width:** `max-w-6xl`, `max-w-[90vw]`
- **Section padding:** `py-28`
- **Common gaps:** `gap-2`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="bg-lime-400 text-black font-medium text-xs tracking-widest uppercase px-8 py-3.5 rounded-sm hover:bg-lime-300 hover:-translate-y-0.5 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Services (`services`)
6. Gallery / portfolio (`gallery-portfolio`)
7. Testimonials (`testimonials`)
8. Team (`team`)
9. Pricing (`pricing`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #27272a;
  --color-text: #e5e5e5;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #a3e635;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#27272a',
    ink: '#e5e5e5',
    muted: '#737373',
    line: '#ffffff',
    accent: '#a3e635',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Set the emphasis word of each headline in #a3e635 on a black ground.
- **Do:** Use the lime for the primary button and one highlight per section.
- **Do:** Keep headlines large and uppercase with tight leading.
- **Don't:** Don't use lime for body text or long paragraphs.
- **Don't:** Don't use the grey (#737373) for headlines on black.
- **Don't:** Don't set the emphasis word in white; it takes the lime.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
