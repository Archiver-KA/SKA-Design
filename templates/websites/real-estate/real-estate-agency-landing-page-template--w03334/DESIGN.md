# Design system — Real Estate Agency Landing Page Template

`SN-W03334` · real-estate · light mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A calm agency page on warm off-white (#fafaf8) with generous whitespace and a large dark headline (#2a2a2a). One phrase in the headline is set in teal (#109288) as the only emphasis. Teal is held for the primary button and that phrase, and the hero's right side carries a thin outlined rectangle motif instead of photography.

**Mood:** calm, airy, professional, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf8` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#545454` | Headings and primary copy |
| Accent | `#109288` | Primary action and highlights |

Palette by frequency of use: `#109288` · `#0b6b63` · `#2a2a2a` · `#ffffff` · `#fafaf8` · `#545454`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Nunito
- **Body:** Nunito
- **Loaded families:** Nunito
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 24px · body 12px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-[0.12em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-md` (6px)
- **Shadows:** `shadow-[0_20px_50px_rgba(84,84,84,0.06)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="rounded-md bg-[#109288] px-5 py-3 text-base font-medium text-white transition-colors hover:bg-[#0B6B63] focus:outline-none focus:ring-2 focus:ring-[#109288] focus:ring-offset-2">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Feature grid (`features`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafaf8;
  --color-surface: #ffffff;
  --color-text: #545454;
  --color-accent: #109288;
  --font-display: "Nunito", sans-serif;
  --font-body: "Nunito", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf8',
    surface: '#ffffff',
    ink: '#545454',
    accent: '#109288',
  },
  fontFamily: { display: ['Nunito'], sans: ['Nunito'] },
} }
```

## Do and don't

- **Do:** Use teal (#109288) for the primary button and one highlighted phrase per hero
- **Do:** Keep the page on off-white (#fafaf8) with white cards for content blocks
- **Do:** Set section headings large and dark (#2a2a2a) with generous space above them
- **Don't:** Don't use teal for body text or large decorative fills
- **Don't:** Don't add heavy shadows; the surfaces are flat
- **Don't:** Don't fill the hero with photography; the layout relies on type and whitespace

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
