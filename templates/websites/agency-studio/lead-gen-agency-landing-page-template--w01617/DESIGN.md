# Design system — Lead-Gen Agency Landing Page Template

`SN-W01617` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark landing page for a service business, with a starfield texture on black. A large bold sans headline in white carries the closing word 'Contractors' in warm amber. The primary button is an amber fill with dark text and the secondary a dark outline, so amber is the single brand accent. A phone-number card floats over the hero.

**Mood:** bold, dark, trade-focused, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#1e293b` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#cbd5e1` · `#1e293b` · `#94a3b8` · `#64748b` · `#000000` · `#334155` · `#475569` · `#111111` · `#222222`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 64px · h2 30px · h3 30px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-wide`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-glow`, `shadow-xl`
- **Content width:** `max-w-[1280px]`, `max-w-[85%]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-dark font-semibold rounded-lg hover:bg-brand-goldhover transition-all shadow-glow hover:-translate-y-1">…</a>
```

## Page structure

Blocks in page order:

1. 3D / canvas scene (`3d-canvas`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Logo cloud (`logo-cloud`)
5. Testimonials (`testimonials`)
6. Video / media (`video-media`)
7. Feature grid (`features`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #64748b;
  --color-border: #ffffff;
  --color-accent: #1e293b;
  --color-accent-2: #22c55e;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#64748b',
    line: '#ffffff',
    accent: '#1e293b',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Use the warm amber for the closing headline word and the primary button only
- **Do:** Set the headline in bold sans, white, sized large and left-aligned
- **Do:** Keep the background near-black with the subtle starfield texture
- **Don't:** Don't use amber for body copy or borders
- **Don't:** Don't use a light background; the page is dark
- **Don't:** Don't add more than one floating card to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
