# Design system — Asian Restaurant Landing Page Template

`SN-W02837` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A moody restaurant page on near-black (#0a0a0a), where the hero is a heavily darkened photograph of a bowl and chopsticks, with warm food tones showing faintly through the shadow. The type is Inter, with a near-white headline and small grey labels. The look stays modest: a dark ground, low-key food photography and a restrained accent.

**Mood:** moody, dark, photographic, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#1a1a1a` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#a3a3a3` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#34d399` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#34d399` · `#ffffff` · `#a3a3a3` · `#fafafa` · `#1a1a1a` · `#047857` · `#fbbf24` · `#0a0a0a` · `#f59e0b` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 128px · h2 12px · h3 14px · body 12px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_30px_-10px_rgba(45,106,79,0.2)]`, `shadow-xl`, `shadow-[0_10px_40px_rgba(45,106,79,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-[600px]`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="magnetic-btn inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-[#0A0A0A] bg-[#FAFAFA] hover:bg-emerald-500 hover:text-[#FAFAFA] rounded-full transition-colors duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Menu list (`menu-list`)
6. Feature grid (`features`)
7. Map / location (`map-location`)
8. Testimonials (`testimonials`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #1a1a1a;
  --color-text: #fafafa;
  --color-muted: #a3a3a3;
  --color-border: #ffffff;
  --color-accent: #34d399;
  --color-accent-2: #fbbf24;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#1a1a1a',
    ink: '#fafafa',
    muted: '#a3a3a3',
    line: '#ffffff',
    accent: '#34d399',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on near-black (#0a0a0a) with near-white (#fafafa) text
- **Do:** Use food photography under a dark overlay so the imagery stays in shadow
- **Do:** Use the surface (#1a1a1a) for panels and menu blocks
- **Don't:** Don't brighten the hero photograph; it should stay low-key
- **Don't:** Don't use the green (#34d399) as a large fill; it is an accent only
- **Don't:** Don't set body copy over the brightest part of a photograph

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
