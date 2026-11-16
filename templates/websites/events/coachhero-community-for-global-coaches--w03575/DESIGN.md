# Design system — CoachHero | Community for Global Coaches

`SN-W03575` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

CoachHero uses a warm off-white ground (#f0eeea) with heavy uppercase black headlines stacked tightly across the hero. A blue (#3d3dc4) italic serif line sits under the headline, and that contrast between blocky sans and italic serif is the signature. Blue is reserved for the italic lines and the primary call to action, with gold (#e8b94a) as a small price highlight.

**Mood:** bold, confident, editorial, warm, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f0eeea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111111` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#3d3dc4` | Primary action and highlights |
| Second accent | `#e8b94a` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111111` · `#3d3dc4` · `#000000` · `#e8b94a` · `#f0eeea` · `#4a5fa8` · `#cc2222` · `#1a1a2e` · `#2a9d4e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Barlow Condensed
- **Body:** Barlow Condensed
- **Loaded families:** Barlow Condensed, Cormorant Garamond, IBM Plex Mono, Lora
- **Scale (largest breakpoint):** h1 88px · h2 80px · h3 24px · body 20px
- **Weights in use:** semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-[3rem]` (3rem), `rounded-[2rem]` (2rem), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-2xl`, `max-w-3xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="magnetic-btn w-full block bg-[#3D3DC4] text-white py-5 rounded-[3rem] font-lora text-lg shadow-xl shadow-[#3D3DC4]/20 mb-4 hover:shadow-2xl hover:shadow-[#3D3DC4]/30 transition-shadow relative overflow-hidden group">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Pricing (`pricing`)
5. Team (`team`)
6. Newsletter signup (`newsletter`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Stats band (`stats`)
9. Bento grid (`bento-grid`)
10. Testimonials (`testimonials`)
11. FAQ (`faq`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, Three.js, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #f0eeea;
  --color-surface: #ffffff;
  --color-text: #111111;
  --color-border: #000000;
  --color-accent: #3d3dc4;
  --color-accent-2: #e8b94a;
  --font-display: "Barlow Condensed", sans-serif;
  --font-body: "Barlow Condensed", sans-serif;
  --radius: 3rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f0eeea',
    surface: '#ffffff',
    ink: '#111111',
    line: '#000000',
    accent: '#3d3dc4',
    accent2: '#e8b94a',
  },
  fontFamily: { display: ['Barlow Condensed'], sans: ['Barlow Condensed'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase black type, tightly leaded
- **Do:** Use the blue (#3d3dc4) italic serif for the second line of the hero headline and the main button only
- **Do:** Keep the page on the warm off-white ground (#f0eeea) with white cards on top of it
- **Don't:** Don't use blue for body text or large background areas
- **Don't:** Don't add drop shadows or heavy gradients to the hero
- **Don't:** Don't set the main headline in light weights or mixed case

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
