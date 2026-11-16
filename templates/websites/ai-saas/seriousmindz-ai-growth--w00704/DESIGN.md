# Design system — SeriousMindz AI Growth

`SN-W00704` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, high-contrast agency hero: a near-black ground with a silver-gradient uppercase wordmark, white and mid-grey headline lines, and a lime (#a3e635) primary button. Lime is kept for the action and small status accents, and small outlined tags sit above the headline.

**Mood:** bold, sleek, tech, confident, high contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#171717` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#262626` | Hairlines, dividers, outlines |
| Accent | `#a3e635` | Primary action and highlights |
| Second accent | `#14b8a6` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#84cc16` · `#262626` · `#a3e635` · `#171717` · `#737373` · `#a3a3a3` · `#404040` · `#020202` · `#365314`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Space Grotesk, Inter, Bricolage Grotesque
- **Scale (largest breakpoint):** h2 36px · h3 20px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_50px_-10px_rgba(132,204,22,0.3)]`, `shadow-sm`, `shadow-[0_0_20px_rgba(132,204,22,0.25)]`
- **Content width:** `max-w-2xl`, `max-w-4xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="relative inline-flex justify-center items-center gap-2 px-8 py-3 bg-lime-400 text-black rounded-full text-base font-medium tracking-wide overflow-hidden group transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(163,230,53,0.6)] hover:shadow-[0_0_30px_rgba(163,230,53,0.9)] border border-lime-300">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Testimonials (`testimonials`)
7. Process / steps (`how-it-works`)
8. Pricing (`pricing`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #171717;
  --color-text: #ffffff;
  --color-muted: #a3a3a3;
  --color-border: #262626;
  --color-accent: #a3e635;
  --color-accent-2: #14b8a6;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#171717',
    ink: '#ffffff',
    muted: '#a3a3a3',
    line: '#262626',
    accent: '#a3e635',
    accent2: '#14b8a6',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use lime (#a3e635) only for the primary button and small highlights.
- **Do:** Set the wordmark in uppercase with a silver gradient fill.
- **Do:** Keep the hero on a near-black ground with white and grey type only.
- **Don't:** Don't use lime as a fill for large sections.
- **Don't:** Don't add light-coloured sections into the dark hero.
- **Don't:** Don't introduce bright colours beyond lime and white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
