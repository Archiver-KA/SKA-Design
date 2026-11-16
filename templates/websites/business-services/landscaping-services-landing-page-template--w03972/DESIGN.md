# Design system — Landscaping Services Landing Page Template

`SN-W03972` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A soft, nature-led page on an off-white ground (#fafaf9), with a faded photograph of a garden path behind the hero. The headline is a near-black sans-serif, and the word Timeless is set in deep green (#047857). Frosted glass cards float over the imagery to list services, and green is kept for that highlight word and the primary button.

**Mood:** natural, calm, airy, refined, eco-focused

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#44403c` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#047857` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#047857` · `#059669` · `#fafaf9` · `#57534e` · `#f5f5f4` · `#34d399` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-main)
- **Body:** var(--font-main)
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-[0_0_0_4px_rgba(16,185,129,0.1)]`
- **Content width:** `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-8`, `gap-1`

**Primary button**

```html
<a class="btn-robotic w-full py-4 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-all flex justify-center items-center gap-2 group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #44403c;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #047857;
  --font-display: "var(--font-main)", sans-serif;
  --font-body: "var(--font-main)", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#44403c',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#047857',
  },
  fontFamily: { display: ['var(--font-main)'], sans: ['var(--font-main)'] },
} }
```

## Do and don't

- **Do:** Set headlines in near-black sans-serif, with one deep-green word
- **Do:** Use deep green (#047857) for the primary button and the highlight word only
- **Do:** Place service cards as frosted white panels over the imagery
- **Don't:** Don't add saturated greens to the background
- **Don't:** Don't set body text over the busy parts of the photograph
- **Don't:** Don't use sharp corners on the frosted cards

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
