# Design system — Fine Dining & Cultural Restaurant Template

`SN-W02889` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A cinematic dark page where the hero is almost all type: a very large uppercase Cormorant headline in off-white, with one italic word set in gold (#e3b04a). Background is a warm near-black (#0c0a09) with a soft photographic haze, and secondary labels are small tracked caps in muted grey. The gold is the one accent, and the outlined pill keeps calls to action quiet.

**Mood:** cinematic, editorial, reserved, dark, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0c0a09` | Page ground |
| Surface | `#000000` | Cards, panels, raised areas |
| Text | `#fafaf9` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e3b04a` | Primary action and highlights |
| Second accent | `#234232` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e3b04a` · `#c05c3b` · `#234232` · `#0c0a09` · `#fafaf9` · `#000000` · `#11130e` · `#a34a28`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, DM Sans, Newsreader
- **Scale (largest breakpoint):** h1 128px · h2 72px · body 12px
- **Weights in use:** light, extralight
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]`, `shadow-[0_0_10px_rgba(192,92,59,0.4)]`, `shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]`
- **Content width:** `max-w-[90rem]`, `max-w-5xl`
- **Section padding:** `py-40`
- **Common gaps:** `gap-3`, `gap-6`, `gap-8`

**Primary button**

```html
<a class="mt-12 px-10 py-4 bg-white/[0.03] text-white text-xs uppercase tracking-widest rounded-full border border-[#E3B04A]/30 hover:border-[#E3B04A] hover:bg-[#E3B04A]/10 hover:text-[#E3B04A] transition-all duration-500 font-light backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative overflow-hidden shimmer-button">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Menu list (`menu-list`)
5. Booking form (`booking`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0c0a09;
  --color-surface: #000000;
  --color-text: #fafaf9;
  --color-border: #ffffff;
  --color-accent: #e3b04a;
  --color-accent-2: #234232;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0c0a09',
    surface: '#000000',
    ink: '#fafaf9',
    line: '#ffffff',
    accent: '#e3b04a',
    accent2: '#234232',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in Cormorant Garamond, uppercase at light weight, with one italic gold word.
- **Do:** Use the gold (#e3b04a) for the italic accent and the single highlight per section.
- **Do:** Keep secondary labels as small tracked caps in muted grey.
- **Don't:** Don't place gold fills behind text; gold is for type and thin rules.
- **Don't:** Don't use bright or saturated colours; the palette stays near-black, off-white and gold.
- **Don't:** Don't put the outlined button on a light image; it needs the dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
