# Design system — Hair Salon Landing Page Template

`SN-W02757` · beauty-fashion · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Dark hero framed inside a rounded panel on a pale page: the outer margin is light grey and the inner screen fades from near-black to black. A large white sans headline sits centred, with a white pill for the main action and a translucent rounded navigation bar floating at the top. The rounded frame and floating nav give the page a device-screen look.

**Mood:** dark, rounded, floating, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#fafaf9` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#fafaf9` · `#a8a29e` · `#f5f5f4` · `#9ca3af` · `#171717` · `#e5e5e5` · `#e7e5e4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 30px · body 16px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-[340px]`, `max-w-6xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-1`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="px-5 py-2 text-base rounded-full transition-colors text-white/90 hover:text-white hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Services (`services`)
4. Product grid (`product-grid`)
5. Logo cloud (`logo-cloud`)
6. Map / location (`map-location`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #fafaf9;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#fafaf9',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in large bold sans in white, centred
- **Do:** Use a white pill with a dark circle for the main action
- **Do:** Float the navigation in a translucent rounded bar above the hero
- **Don't:** Don't use yellow for accents; the page is black and white
- **Don't:** Don't drop the rounded frame; the hero reads as a screen inside a pale page
- **Don't:** Don't add gradients to the headline; it is solid white

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
