# Design system — Growth Agency Landing Page Template

`SN-W01588` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black ground (#0a0a0a) with a large serif headline in white, where the placeholder '[Key Result]' is set in italic rose (#fb7185) and the closing phrase is underlined in the same tone. A black video frame with rounded corners sits below the copy, and a small uppercase pill badge marks the audience. The serif on the dark ground gives the page a confident, editorial voice.

**Mood:** confident, editorial, dark, rose-accented, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#0a0a0a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#fb7185` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f43f5e` · `#9ca3af` · `#0a0a0a` · `#881337` · `#000000` · `#fb7185` · `#6b7280` · `#d1d5db` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, WistiaPlayerInterNumbersSemiBold
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-black`
- **Content width:** `max-w-2xl`, `max-w-7xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-white text-black hover:bg-rose-600 hover:text-white">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Feature grid (`features`)
5. Process / steps (`how-it-works`)
6. Integrations (`integrations`)
7. Testimonials (`testimonials`)
8. Team (`team`)
9. Newsletter signup (`newsletter`)
10. FAQ (`faq`)
11. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #0a0a0a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #fb7185;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#0a0a0a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#fb7185',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at large size, with one highlighted phrase in italic rose (#fb7185)
- **Do:** Underline the closing phrase in the rose tone rather than boxing it
- **Do:** Frame the video in a black rounded panel below the copy
- **Don't:** Don't use rose for body copy or large fills
- **Don't:** Don't set headlines in sans-serif; the serif is the voice
- **Don't:** Don't use a light ground for the hero; the dark field carries the layout

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
