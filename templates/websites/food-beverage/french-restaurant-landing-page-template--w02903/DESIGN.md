# Design system — French Restaurant Landing Page Template

`SN-W02903` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

A moody hero that fades from pale grey at the top to dark brown at the bottom, with a white serif headline and an italic tan line beneath it. The tan (#c4b5a3) carries the accent, while the nav and reserve button are black pills and the page leans on type rather than imagery. The stance is literary and understated.

**Mood:** literary, understated, moody, warm, type-led

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ecfdf5` | Cards, panels, raised areas |
| Text | `#1c1917` | Headings and primary copy |
| Muted text | `#a7977d` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c4b5a3` | Primary action and highlights |
| Second accent | `#78350f` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#047857` · `#ecfdf5` · `#a7977d` · `#1c1917` · `#c4b5a3` · `#78350f` · `#f8fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Instrument Serif
- **Scale (largest breakpoint):** h2 72px · h3 24px · body 12px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-40`
- **Common gaps:** `gap-4`, `gap-3`, `gap-2.5`

**Primary button**

```html
<a class="group bg-brand-900 text-brand-100 px-6 py-2.5 rounded-full text-xs font-medium tracking-[0.1em] uppercase hover:bg-wine transition-all duration-500 flex items-center gap-2.5 shadow-lg shadow-brand-900/10 hover:shadow-xl hover:shadow-wine/15">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. Map / location (`map-location`)
8. Modal / overlay (`modal-overlay`)
9. Booking form (`booking`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ecfdf5;
  --color-text: #1c1917;
  --color-muted: #a7977d;
  --color-border: #ffffff;
  --color-accent: #c4b5a3;
  --color-accent-2: #78350f;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ecfdf5',
    ink: '#1c1917',
    muted: '#a7977d',
    line: '#ffffff',
    accent: '#c4b5a3',
    accent2: '#78350f',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif, with the second line in italic tan (#c4b5a3).
- **Do:** Use black pills for the nav reserve button and the primary booking action.
- **Do:** Keep the hero text-led; a grey-to-brown fade carries the mood.
- **Don't:** Don't use green for accents; the page is grey, tan and brown.
- **Don't:** Don't set the hero headline in a sans; it is a serif.
- **Don't:** Don't use bright colour in the hero; the hero is grey, tan and brown.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
