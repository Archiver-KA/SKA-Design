# Design system — easyfun

`SN-W00354` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark pricing page on a near-black, faintly green-tinted ground (#050806), with a lime (#c2e455) italic accent word inside a white headline. The primary button is solid lime with dark text, and the secondary is a dark translucent pill. Small grey reassurance lines under the buttons carry the trust message, and the layout stays centred and short.

**Mood:** fresh, confident, dark, crisp

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050806` | Page ground |
| Surface | `#111612` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c2e455` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#111612` · `#000000` · `#050806` · `#c2e455` · `#d6f866`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, PT Serif
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 20px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_30px_rgba(214,248,102,0.25)]`, `shadow-[0_0_40px_rgba(214,248,102,0.4)]`, `shadow-[0_0_20px_rgba(214,248,102,0.2)]`
- **Content width:** `max-w-4xl`, `max-w-6xl`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="bg-brand-green hover:bg-[#c2e455] text-black text-sm font-medium px-5 py-2 rounded-full transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(214,248,102,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Pricing (`pricing`)
4. Comparison (`comparison`)
5. Testimonials (`testimonials`)
6. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050806;
  --color-surface: #111612;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #c2e455;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050806',
    surface: '#111612',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#c2e455',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one emphasis word per headline in lime italic (#c2e455)
- **Do:** Make the primary button solid lime with dark text
- **Do:** Keep reassurance lines in small grey under the buttons
- **Don't:** Don't use lime for body text
- **Don't:** Don't add a second bright accent beside the lime
- **Don't:** Don't use light backgrounds in the pricing sections

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
