# Design system — USDA Asset-Backed Stablecoin Template

`SN-W01058` · fintech-crypto · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A black stablecoin page has a large bold uppercase headline stacked over four lines, where the final phrase is set in pale blue (#9ed8ff) and the rest is white. Beneath the headline a thin perspective grid of blue light sits on the black ground like a floor, giving a futuristic but restrained tone. The pale blue is the one accent, used for the emphasised phrase and the glow lines.

**Mood:** futuristic, restrained, bold, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#171a1f` | Hairlines, dividers, outlines |
| Accent | `#9ed8ff` | Primary action and highlights |
| Second accent | `#cfae6e` | Supporting highlights |

Palette by frequency of use: `#9ed8ff` · `#171a1f` · `#cfae6e` · `#f5f7fa` · `#050505` · `#ffffff` · `#c8eaff` · `#b8c0cc` · `#9aa6b5` · `#a1a1aa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Michroma, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h2 51px · h3 20px · body 15px
- **Weights in use:** light, normal, semibold
- **Letter spacing:** `tracking-[0.18em]`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[4px]` (4px), `rounded-[15px]` (15px)
- **Shadows:** `shadow-[0_0_15px_rgba(0,0,0,0.5)]`, `shadow-[0_0_48px_rgba(239,68,68,0.08)]`, `shadow-[0_0_60px_rgba(239,68,68,0.15)]`
- **Content width:** `max-w-[42rem]`, `max-w-7xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="group inline-flex items-center gap-3 border border-[#232833] bg-[#111318]/90 px-4 py-3 font-display text-[10px] tracking-[0.18em] uppercase text-[#F5F7FA] transition-all duration-300 hover:border-[#CFAE6E]/60 hover:text-[#CFAE6E]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Comparison (`comparison`)
5. Bento grid (`bento-grid`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Unicorn Studio (WebGL scenes), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-border: #171a1f;
  --color-accent: #9ed8ff;
  --color-accent-2: #cfae6e;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    line: '#171a1f',
    accent: '#9ed8ff',
    accent2: '#cfae6e',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold uppercase sans, with the final phrase in pale blue (#9ed8ff)
- **Do:** Use the thin blue grid lines as the only decoration under the hero
- **Do:** Keep the ground black (#050505) with white body copy and a dark outlined button
- **Don't:** Don't use gold (#cfae6e) as an accent.
- **Don't:** Don't fill buttons with the pale blue; they are dark and outlined
- **Don't:** Don't add more glow than the single grid floor

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
