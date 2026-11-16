# Design system — Growth Agency Landing Page Template

`SN-W01589` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white ground with a serif headline in near-black, where the placeholder '[Key Result]' is set in italic rose and the closing phrase is underlined in the same colour. A black video frame with rounded corners sits below the copy as the main visual, and a thin-bordered navigation bar floats at the top with a dark pill button. The palette stays light and restrained, with rose as the only accent.

**Mood:** light, restrained, editorial, warm, clear

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#e11d48` | Primary action and highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#e11d48` · `#e5e7eb` · `#6b7280` · `#9ca3af` · `#f43f5e` · `#fff1f2` · `#f3f4f6` · `#fecdd3`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat, Geist, Roboto, Poppins
- **Scale (largest breakpoint):** h1 80px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="md:py-4 hover:bg-rose-500 transition-colors shadow-rose-900/50 font-bold text-white bg-rose-600 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg">…</a>
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
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #e11d48;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#e11d48',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif at large size, with the highlighted phrase in italic rose
- **Do:** Underline the closing phrase in rose rather than boxing it
- **Do:** Use a dark pill button in the navigation as the single action
- **Don't:** Don't tint the whole page rose; the rose is for one phrase and the accent
- **Don't:** Don't set headlines in sans-serif; the serif is the voice
- **Don't:** Don't put a dark card on the light ground without a border; the frame needs an edge

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
