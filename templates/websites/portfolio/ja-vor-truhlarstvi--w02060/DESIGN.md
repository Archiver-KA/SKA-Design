# Design system — Ja-Vor Truhlarstvi

`SN-W02060` · portfolio · light mode · Sinera Atlas theme `workshop` · language `cs`

## Direction

A warm, craft-led page on an off-white ground (#faf9f6) with a large serif headline in dark brown-black (#362b25), where the second line is set in italic taupe (#8c7a6b). The primary button is a near-black (#1f1915) rectangle with a thin outline secondary beside it, so the palette reads as timber, ink and paper. The two-tone serif headline is the recognisable element.

**Mood:** warm, craftsmanlike, understated, natural, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#faf9f6` | Page ground |
| Surface | `#faf9f6` | Cards, panels, raised areas |
| Text | `#362b25` | Headings and primary copy |
| Muted text | `#8c7a6b` | Secondary copy, captions |
| Accent | `#1f1915` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d4c5b0` · `#faf9f6` · `#8c7a6b` · `#1f1915` · `#362b25`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Manrope
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 12px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-[0.25em]`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2px]` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-wood-900/5`, `shadow-lg`
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-8`, `gap-4`

**Primary button**

```html
<a class="ml-4 px-6 py-3 rounded-[2px] text-sm font-medium tracking-wide hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 bg-wood-900 text-wood-50 hover:bg-wood-700 hover:shadow-wood-900/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Contact form (`contact-form`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #faf9f6;
  --color-surface: #faf9f6;
  --color-text: #362b25;
  --color-muted: #8c7a6b;
  --color-accent: #1f1915;
  --font-display: "Instrument Serif", serif;
  --font-body: "Manrope", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#faf9f6',
    surface: '#faf9f6',
    ink: '#362b25',
    muted: '#8c7a6b',
    accent: '#1f1915',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the headline in a large serif, with the second line in italic taupe (#8c7a6b).
- **Do:** Use near-black (#1f1915) for the primary button and keep the secondary as a thin outline.
- **Do:** Keep the page on off-white paper tones with dark brown text.
- **Don't:** Don't add saturated colours; the palette stays timber, ink and paper.
- **Don't:** Don't round the buttons heavily; they have only a 2px corner.
- **Don't:** Don't set body copy in the serif; use the sans for paragraphs.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
