# Design system — Signature Paysage Luxury Landscaping Template

`SN-W02228` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `fr`

## Direction

A deep forest-green hero with a pale serif headline in white, where the second line is set in italic light grey-green. The nav sits on a light grey band, and the kicker is letter-spaced small caps. The thin outline CTA keeps the page editorial and still. The dark green ground against the white serif is the signature.

**Mood:** editorial, still, luxurious, natural

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#052e16` | Page ground |
| Surface | `#e5e7eb` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#f4f3ef` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#0a140e` · `#f4f3ef` · `#6b7280` · `#052e16` · `#e5e7eb` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 60px · h3 24px · body 14px
- **Weights in use:** normal, light
- **Letter spacing:** `tracking-[0.2em]`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-none` (0)
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Section padding:** `py-48`, `py-32`
- **Common gaps:** `gap-4`, `gap-y-16`, `gap-8`

**Primary button**

```html
<a class="ml-6 px-8 py-3.5 border border-[#0A140E]/20 hover:border-[#0A140E] hover:bg-[#0A140E] hover:text-[#F4F3EF] transition-all duration-700 ease-luxe">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Services (`services`)
5. Feature grid (`features`)
6. Logo cloud (`logo-cloud`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #052e16;
  --color-surface: #e5e7eb;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #f4f3ef;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 0;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#052e16',
    surface: '#e5e7eb',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#f4f3ef',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set the hero on deep forest green (#052e16) with white serif headlines
- **Do:** Use italic for the second headline line to create contrast
- **Do:** Keep the outlined CTA thin, with letter-spaced uppercase text
- **Don't:** Don't use the cream (#f4f3ef) as the hero ground; the hero is green
- **Don't:** Don't fill the CTA; it stays an outline
- **Don't:** Don't use a sans-serif headline in this hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
