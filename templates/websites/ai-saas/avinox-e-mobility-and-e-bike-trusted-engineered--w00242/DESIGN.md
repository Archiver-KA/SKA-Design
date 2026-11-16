# Design system — Avinox  - E-Mobility & E-Bike Trusted， Engineered for the Future

`SN-W00242` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, cinematic hero where a tinted photograph of a person in futuristic glasses fills the right side, dimmed under a black gradient. The headline, 'POWER BEYOND BOUNDARIES.', is heavy white uppercase across two lines. A small green pill labels the product, and a white filled and an outlined button carry the calls to action, with slider dots at the base.

**Mood:** cinematic, bold, dark, automotive

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#d4d4d8` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#10b981` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#09090b` · `#27272a` · `#71717a` · `#18181b` · `#10b981` · `#34d399` · `#3f3f46` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 20px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tighter`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-3xl` (24px)
- **Shadows:** `shadow-[0_0_15px_rgba(255,255,255,0.1)]`, `shadow-[0_0_15px_rgba(255,255,255,0.3)]`, `shadow-[0_0_15px_-5px_rgba(16,185,129,0.4)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="flex items-center gap-2 text-xs font-medium text-zinc-400 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-white hover:border-white/20 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Integrations (`integrations`)
5. Awards / press (`awards-press`)
6. Logo cloud (`logo-cloud`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #d4d4d8;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #10b981;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#d4d4d8',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#10b981',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy white uppercase across two lines
- **Do:** Dim the photograph with a black gradient so the type stays readable
- **Do:** Use the green (#10b981) for the small label pill only
- **Don't:** Don't put the headline over a bright part of the photo
- **Don't:** Don't add a second accent colour to the hero
- **Don't:** Don't set body copy in uppercase

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
