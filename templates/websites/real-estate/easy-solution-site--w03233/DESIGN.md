# Design system — easy solution site 

`SN-W03233` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, photographic skyline page: a black-to-grey gradient over a monochrome city silhouette, with a thin-bordered translucent navigation pill at the top. The imagery is low-key and desaturated, so the page relies on white type rather than colour.

**Mood:** monochrome, low-key, atmospheric, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#fafafa` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#9ca3af` · `#6b7280` · `#000000` · `#0a0a0a` · `#111111` · `#e5e7eb` · `#4b5563` · `#333333` · `#555555`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, JetBrains Mono, Poppins
- **Scale (largest breakpoint):** h1 120px · h2 72px · h3 20px · body 20px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-3xl` (24px)
- **Shadows:** `shadow-2xl`
- **Content width:** `max-w-6xl`, `max-w-7xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-6`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="hero-elem bg-transparent text-white rounded-full px-8 py-3.5 text-sm font-medium border border-white/20 hover:border-white transition-colors flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. About (`about`)
5. Feature grid (`features`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #0a0a0a;
  --color-text: #fafafa;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#0a0a0a',
    ink: '#fafafa',
    muted: '#6b7280',
    line: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero over a desaturated, low-key photograph that fades to black at the bottom.
- **Do:** Set the navigation as a thin-bordered translucent pill with white text and a white primary button.
- **Do:** Keep the palette to black, white and grey; the photograph is the only tonal variation.
- **Don't:** Don't add colour to the imagery; the skyline is kept monochrome.
- **Don't:** Don't brighten the photograph behind the headline; the low-key tone is part of the look.
- **Don't:** Don't use solid coloured buttons; the only solid fill is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
