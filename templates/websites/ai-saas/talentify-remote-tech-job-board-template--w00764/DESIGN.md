# Design system — Talentify Remote Tech Job Board Template

`SN-W00764` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A near-black page (#0a0a0a) with a soft blue glow across the top and a bold white Inter headline on two short lines. Below, dark candidate cards carry quotes, names, job titles and scores out of ten in white and grey. The cards are the main visual, so the page reads as a list of real people rather than illustration.

**Mood:** dark, human, data-scored, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#c2c2c2` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#365eff` | Primary action and highlights |

Palette by frequency of use: `#c2c2c2` · `#ffffff` · `#365eff` · `#0a0a0a` · `#7989d9` · `#1a1a1a`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Plus Jakarta Sans, Inter, Geist Mono
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-wide`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[10px]` (10px)
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-3`, `gap-2`, `gap-5`

**Primary button**

```html
<a class="bg-[#365EFF] text-white text-sm font-semibold px-5 py-3 rounded-[10px] hover:bg-[#365EFF]/90 transition-colors shrink-0">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Feature grid (`features`)
5. Product grid (`product-grid`)
6. Testimonials (`testimonials`)
7. Stats band (`stats`)
8. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #c2c2c2;
  --color-border: #ffffff;
  --color-accent: #365eff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    muted: '#c2c2c2',
    line: '#ffffff',
    accent: '#365eff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter bold, white, on short left-aligned lines
- **Do:** Show testimonials as dark cards with name, role and a score out of ten
- **Do:** Keep the blue glow as a soft wash at the top of the hero only
- **Don't:** Don't use the blue (#365eff) as a fill for the cards
- **Don't:** Don't add large photographs to the cards; the avatars are small
- **Don't:** Don't colour the scores; they stay white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
