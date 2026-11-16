# Design system — Insurance Marketplace Landing Page Template

`SN-W01187` · ecommerce · light mode · Sinera Atlas theme `market` · language `fr`

## Direction

A soft insurance landing page on a near-white ground with pale pink and blue washes behind the hero. The second headline word, intelligente, carries a gradient from periwinkle blue (#5c95ff) to coral (#f87575), the one expressive moment, while the rest of the headline is set in a muted warm grey. Buttons pair a solid blue pill with a white outline pill, which keeps the tone calm and trustworthy.

**Mood:** calm, trustworthy, modern, soft

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#7e6c6c` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#5c95ff` | Primary action and highlights |
| Second accent | `#f87575` | Supporting highlights |

Palette by frequency of use: `#7e6c6c` · `#ffffff` · `#5c95ff` · `#f3f4f6` · `#f87575` · `#b9e6ff` · `#f9fafb` · `#ffa9a3` · `#e5e7eb` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Stack Sans Headline
- **Body:** Stack Sans Headline
- **Loaded families:** Stack Sans Headline
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2.5 bg-taupe text-white text-sm font-medium rounded-lg shadow-lg shadow-taupe/20 hover:bg-taupe/90 transition-all hover:scale-[1.02] border border-transparent">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Call to action (`cta`)
5. Marquee (`marquee`)
6. Bento grid (`bento-grid`)
7. Feature grid (`features`)
8. Testimonials (`testimonials`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #000000;
  --color-muted: #7e6c6c;
  --color-border: #f3f4f6;
  --color-accent: #5c95ff;
  --color-accent-2: #f87575;
  --font-display: "Stack Sans Headline", sans-serif;
  --font-body: "Stack Sans Headline", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#000000',
    muted: '#7e6c6c',
    line: '#f3f4f6',
    accent: '#5c95ff',
    accent2: '#f87575',
  },
  fontFamily: { display: ['Stack Sans Headline'], sans: ['Stack Sans Headline'] },
} }
```

## Do and don't

- **Do:** Apply the blue-to-coral gradient only to the single highlighted word in the hero headline.
- **Do:** Use the blue (#5c95ff) for the primary button and the coral (#f87575) for accents only.
- **Do:** Keep the pastel washes behind the hero at low contrast.
- **Don't:** Don't set body copy in the gradient; it is for one headline word.
- **Don't:** Don't use the coral for button fills; it is for accents.
- **Don't:** Don't use a dark ground; the pastel wash on white is the base.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
