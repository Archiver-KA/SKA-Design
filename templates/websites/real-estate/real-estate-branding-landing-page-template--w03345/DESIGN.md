# Design system — Real Estate Branding Landing Page Template

`SN-W03345` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, glowing landing page on near-black, with a soft cyan halo behind the centred hero. The headline is large white sans-serif, and its last phrase is set in an italic serif in light cyan (#22d3ee), which is the one decorative move. The primary button is solid cyan (#06b6d4) with spaced uppercase labels, and a small pill label sits above the headline.

**Mood:** luminous, dark, bold, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#06b6d4` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#22d3ee` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#22d3ee` · `#06b6d4` · `#94a3b8` · `#ecfeff` · `#cbd5e1` · `#64748b` · `#67e8f9` · `#000000` · `#164e63`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** light, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_20px_40px_rgba(34,211,238,0.1)]`, `shadow-[0_0_10px_rgba(34,211,238,0.8)]`, `shadow-[0_0_5px_rgba(34,211,238,0.8)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-3`, `gap-2.5`, `gap-4`

**Primary button**

```html
<a class="group relative flex items-center justify-center gap-2.5 transition-all duration-500 hover:scale-105 text-xs font-medium text-white bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20 rounded-full py-2.5 px-6 shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] overflow-hidden backdrop-blur-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Pricing (`pricing`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Product grid (`product-grid`)
8. Listings (`listings`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js, Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #06b6d4;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #22d3ee;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#06b6d4',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#22d3ee',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in white, with one italic phrase in cyan (#22d3ee)
- **Do:** Use cyan (#06b6d4) for the primary button only
- **Do:** Set labels and button text in letter-spaced uppercase
- **Don't:** Don't use a light page background; the look depends on near-black
- **Don't:** Don't set small cyan body text on dark backgrounds
- **Don't:** Don't add a second accent colour to the glow or highlights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
