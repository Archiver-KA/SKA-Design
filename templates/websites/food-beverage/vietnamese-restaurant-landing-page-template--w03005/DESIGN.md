# Design system — Vietnamese Restaurant Landing Page Template

`SN-W03005` · food-beverage · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A personal-story page on a cream ground (#f7f4eb), with a heavy condensed sans headline in dark green (#234220) stacked over three lines and a small spaced eyebrow in orange-red (#e85424). Body copy runs in a single reading column beside a tall dark green rounded panel and an orange edge shape. Green carries the headline and panel, and orange carries the eyebrow and shapes.

**Mood:** warm, personal, bold, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f4eb` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#e85424` | Primary action and highlights |
| Second accent | `#234220` | Supporting highlights |

Palette by frequency of use: `#e85424` · `#ffffff` · `#000000` · `#0f172a` · `#234220` · `#f7f4eb` · `#f3d86d` · `#020617` · `#e5e7eb` · `#0f0f0f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Oswald
- **Body:** DM Sans
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h2 72px · h3 30px · body 16px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-wider`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-[2rem]` (2rem), `rounded-lg` (8px), `rounded-[2.5rem]` (2.5rem)
- **Shadows:** `shadow-sm`, `shadow-[0_8px_30px_rgb(0,0,0,0.06)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[460px]`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-6`, `gap-x-4`

**Primary button**

```html
<a class="flex items-center justify-center w-full uppercase transition-colors hover:bg-[#E85424] text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg py-3 shadow-lg cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Modal / overlay (`modal-overlay`)
3. Menu list (`menu-list`)
4. About (`about`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Testimonials (`testimonials`)
7. Map / location (`map-location`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f7f4eb;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-border: #000000;
  --color-accent: #e85424;
  --color-accent-2: #234220;
  --font-display: "Oswald", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --radius: 2rem;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f7f4eb',
    surface: '#ffffff',
    ink: '#0f172a',
    line: '#000000',
    accent: '#e85424',
    accent2: '#234220',
  },
  fontFamily: { display: ['Oswald'], sans: ['DM Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy condensed sans in dark green (#234220), stacked tight.
- **Do:** Use the orange-red (#e85424) for the eyebrow label and the decorative edge shapes only.
- **Do:** Keep body copy in one reading column beside the tall rounded panel.
- **Don't:** Don't set body copy in green or orange.
- **Don't:** Don't use the orange as a large fill on the cream ground.
- **Don't:** Don't reduce the generous corner radius of the panel.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
