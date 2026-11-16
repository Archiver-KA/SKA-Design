# Design system — Promptless Studio Marketing Agency Template

`SN-W01673` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `cs`

## Direction

A deep teal-black page with a very large bold cream headline, where one word is set in warm amber (#ffbd76) and underlined, and a handwritten-style amber annotation sits low on the left. Tilted photo cards with rounded corners and a soft glass label sit to the right. The mood is warm, human and editorial, with amber doing the emphasis.

**Mood:** warm, human, editorial, expressive, personal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a171d` | Page ground |
| Text | `#fff6e9` | Headings and primary copy |
| Accent | `#ffbd76` | Primary action and highlights |

Palette by frequency of use: `#ffbd76` · `#fff6e9` · `#0a171d` · `#b85c3a` · `#f4e9d2`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Caveat
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Content width:** `max-w-3xl`, `max-w-7xl`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-3`, `gap-10`, `gap-2`

**Primary button**

```html
<a class="inline-flex items-center gap-2 bg-[#FFBD76] text-[#0A171D] text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity magnetic">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Testimonials (`testimonials`)
5. Marquee (`marquee`)
6. Video / media (`video-media`)
7. Feature grid (`features`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), GSAP, AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0a171d;
  --color-text: #fff6e9;
  --color-accent: #ffbd76;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a171d',
    ink: '#fff6e9',
    accent: '#ffbd76',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Highlight one headline word in amber (#ffbd76) with a thin underline
- **Do:** Set headlines bold and large in cream (#fff6e9) on the dark teal ground
- **Do:** Use small tilted, rounded photo cards for social proof
- **Don't:** Don't set body copy in the amber; it is a highlight colour
- **Don't:** Don't use the rust (#b85c3a) as a text colour on the dark ground
- **Don't:** Don't add cool colours to the hero; the warmth is part of the look

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
