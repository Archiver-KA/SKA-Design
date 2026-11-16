# Design system — Baseline Tennis Social Club Landing Page Template

`SN-W02326` · healthcare · dark mode · Sinera Atlas theme `calm` · language `fr`

## Direction

A high-energy sports club page on a near-black green ground (#101510), with a deep teal glow behind the hero. Lime (#d3fa24) is the one loud colour: it marks a single highlighted word in each headline and the court reservation link. Large bold Inter headlines on the dark ground, with thin outlined labels, give the page a fast and disciplined look.

**Mood:** energetic, disciplined, dark, sporty

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#101510` | Page ground |
| Surface | `#19200f` | Cards, panels, raised areas |
| Text | `#f5f5ee` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d3fa24` | Primary action and highlights |
| Second accent | `#22434a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d3fa24` · `#000000` · `#20261e` · `#19200f` · `#101510` · `#031b25` · `#f5f5ee` · `#354538` · `#18210e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h2 72px · h3 48px · body 12px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-xl`, `shadow-2xl`
- **Content width:** `max-w-[120rem]`, `max-w-3xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-5`, `gap-3`, `gap-2`

**Primary button**

```html
<a class="flex w-full items-center justify-between rounded-lg bg-[#d3fa24] px-5 py-4 text-sm text-[#18210e] transition-colors hover:bg-[#e0ff62]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Call to action (`cta`)
5. Schedule (`schedule-agenda`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #101510;
  --color-surface: #19200f;
  --color-text: #f5f5ee;
  --color-border: #ffffff;
  --color-accent: #d3fa24;
  --color-accent-2: #22434a;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#101510',
    surface: '#19200f',
    ink: '#f5f5ee',
    line: '#ffffff',
    accent: '#d3fa24',
    accent2: '#22434a',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Highlight one word per headline in lime (#d3fa24) and no more.
- **Do:** Set headlines in large bold Inter with tight spacing on the dark ground.
- **Do:** Use lime text, not lime fills, for inline links such as the court reservation call to action.
- **Don't:** Don't use lime as a background fill for large areas.
- **Don't:** Don't use light backgrounds; the club page stays dark.
- **Don't:** Don't set headlines in a serif face.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
