# Design system — TheMailMachine Cold Email SaaS Template

`SN-W00777` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A white hero with a faint violet glow at the top, a centred Inter headline in two tones: Stop managing tools. in near-black and Start closing deals. in grey. A solid violet (#8624ff) pill is the primary button, and it is the only accent, shared with the glow. The page is bright and sparse, with small grey microcopy under the call to action.

**Mood:** bright, sparse, direct, violet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#27272a` | Cards, panels, raised areas |
| Text | `#18181b` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |
| Accent | `#8624ff` | Primary action and highlights |

Palette by frequency of use: `#18181b` · `#8624ff` · `#52525b` · `#ffffff` · `#e4e4e7` · `#71717a` · `#f4f4f5` · `#a1a1aa` · `#27272a` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-inter)
- **Body:** var(--font-inter)
- **Loaded families:** Inter, Instrument Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[100%]` (100%)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-[0_0_24px_rgba(134,36,255,0.25)]`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(134,36,255,0.25)] bg-[#8624FF] text-white hover:opacity-90">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. 3D / canvas scene (`3d-canvas`)
7. FAQ (`faq`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #27272a;
  --color-text: #18181b;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --color-accent: #8624ff;
  --font-display: "var(--font-inter)", sans-serif;
  --font-body: "var(--font-inter)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#27272a',
    ink: '#18181b',
    muted: '#71717a',
    line: '#e4e4e7',
    accent: '#8624ff',
  },
  fontFamily: { display: ['var(--font-inter)'], sans: ['var(--font-inter)'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at large size, centred, with the second line in grey
- **Do:** Use violet (#8624ff) only for the primary button and the glow
- **Do:** Keep small grey microcopy under the button, with no extra text
- **Don't:** Don't use violet as a background for sections
- **Don't:** Don't add dark sections; the page stays white
- **Don't:** Don't use the dark nav button as a second primary action

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
