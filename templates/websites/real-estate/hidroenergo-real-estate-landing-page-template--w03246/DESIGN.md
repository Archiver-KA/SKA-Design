# Design system — Hidroenergo Real Estate Landing Page Template

`SN-W03246` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `hr`

## Direction

A dark, cinematic residential-developer hero: a near-black ground with a violet-to-indigo light wash across a building photograph on the right, and a centred light-weight headline in white. Buttons are one solid white primary and a text-style secondary with a play icon, and a small indigo tag above the headline carries the only tint. The look is moody and architectural, with the colour living in the light rather than the interface.

**Mood:** moody, cinematic, architectural, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#818cf8` · `#050505` · `#000000` · `#6366f1` · `#34d399` · `#080808` · `#312e81` · `#fbbf24` · `#9333ea`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 36px · body 20px
- **Weights in use:** medium, bold, thin
- **Letter spacing:** `tracking-widest`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_10px_rgba(52,211,153,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="px-8 py-4 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-indigo-50 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Feature grid (`features`)
5. Bento grid (`bento-grid`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-surface: #050505;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #34d399;
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
    surface: '#050505',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#34d399',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black with a violet-to-indigo light wash over the building photo.
- **Do:** Set the headline in a light sans, centred, under a small uppercase tag.
- **Do:** Use one solid white primary button beside a text-style secondary with a play icon.
- **Don't:** Don't use the indigo (#6366f1) as a page background; it is a light effect only.
- **Don't:** Don't add a second light colour to the wash; violet and indigo are enough.
- **Don't:** Don't use bright white for body copy; it sits in muted grey on the dark ground.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
