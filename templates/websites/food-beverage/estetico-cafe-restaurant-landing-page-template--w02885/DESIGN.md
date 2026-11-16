# Design system — Estetico Café Restaurant Landing Page Template

`SN-W02885` · food-beverage · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Warm, dark photography with a restrained white interface. A dimmed interior photo with pendant lamps fills a rounded frame, and a light grey sans headline sits centred over it. Navigation is a translucent dark pill, and the primary button is white with a black circular knob. Soft background light supplies the atmosphere, so the type can stay plain and the accent colour is almost absent.

**Mood:** atmospheric, restrained, warm, photographic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#ffedd5` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#f5f5f4` · `#a8a29e` · `#e7e5e4` · `#fafaf9` · `#57534e` · `#292524` · `#fafafa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-6`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all tracking-tight font-light">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Menu list (`menu-list`)
4. Services (`services`)
5. Gallery / portfolio (`gallery-portfolio`)
6. Map / location (`map-location`)
7. Booking form (`booking`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #f5f5f4;
  --color-accent: #ffedd5;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#f5f5f4',
    accent: '#ffedd5',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Dim interior photography under a dark overlay before setting the headline
- **Do:** Set the headline in light grey sans, centred, over the dimmed image
- **Do:** Use a white pill with a black knob as the only primary button on the hero
- **Don't:** Don't add colour to the interface; the photo is the only colour source
- **Don't:** Don't place the nav on a solid light bar over the photo
- **Don't:** Don't set body copy in pure white over bright lamp highlights

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
