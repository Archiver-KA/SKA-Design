# Design system — Halal Investment Landing Page Template

`SN-W00979` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `ar`

## Direction

A dark green-black page sets large white Arabic headlines in Tajawal, centred and right-to-left, with a muted paragraph beneath. The layout is plain, with a small logo at the top. The colour story is white text on a dark ground.

**Mood:** dark, calm, centred, rtl, plain

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Tajawal
- **Body:** Tajawal
- **Loaded families:** Tajawal, WistiaPlayerInterNumbersSemiBold
- **Scale (largest breakpoint):** h1 36px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_-3px]`, `shadow-primary/20`, `shadow-[0_0_30px_-3px]`
- **Content width:** `max-w-3xl`, `max-w-5xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-4`, `gap-6`, `gap-12`

**Primary button**

```html
<a class="mt-10 inline-block bg-[linear-gradient(to_right,hsl(160_70%_35%),hsl(160_70%_55%)_20%,hsl(160_70%_40%)_50%,hsl(160_70%_50%)_80%,hsl(160_70%_35%))] text-primary-foreground font-bold text-base md:text-lg px-6 py-3 md:px-10 md:py-4 border border-black/40 shadow-[inset_0_2px_3px_rgba(255,255,255,0.4),_0_4px_8px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300 rounded-2xl">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Video / media (`video-media`)
3. Feature grid (`features`)
4. Call to action (`cta`)
5. Gallery / portfolio (`gallery-portfolio`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-border: #000000;
  --font-display: "Tajawal", sans-serif;
  --font-body: "Tajawal", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    line: '#000000',
  },
  fontFamily: { display: ['Tajawal'], sans: ['Tajawal'] },
} }
```

## Do and don't

- **Do:** Set Arabic headlines in Tajawal, large and centred, right-to-left.
- **Do:** Keep the page ground dark with white headings.
- **Do:** Use a muted grey paragraph under each headline.
- **Don't:** Don't use left alignment for the Arabic headlines.
- **Don't:** Don't set the paragraph in a light grey that falls below contrast on dark.
- **Don't:** Don't add a decorative accent colour without a clear role.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
