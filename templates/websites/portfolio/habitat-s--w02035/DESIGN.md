# Design system — habitat.s

`SN-W02035` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A full-bleed photograph of a figure in white walking a wooden boardwalk through rock, toned with a dark overlay so the white type reads. The headline is a large white sans on the left in two lines, with a small pill label above and a white pill button with an arrow circle beneath. A translucent, rounded navigation bar floats over the photo at the top, giving the page a calm, editorial, real-estate lifestyle tone.

**Mood:** calm, editorial, photographic, aspirational

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#292524` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |
| Second accent | `#bfdbfe` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#1c1917` · `#78716c` · `#d6d3d1` · `#e7e5e4` · `#44403c` · `#a8a29e` · `#000000` · `#292524` · `#fafaf9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-2xl`, `max-w-[1600px]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. About (`about`)
3. Feature grid (`features`)
4. Case studies (`case-studies`)
5. Video / media (`video-media`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #292524;
  --color-text: #ffffff;
  --color-muted: #78716c;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --color-accent-2: #bfdbfe;
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
    surface: '#292524',
    ink: '#ffffff',
    muted: '#78716c',
    line: '#ffffff',
    accent: '#ffffff',
    accent2: '#bfdbfe',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use full-bleed photography with a dark overlay behind the left-aligned headline
- **Do:** Set the headline in white Inter at large size, left-aligned in two lines
- **Do:** Use a white pill button with a circular arrow icon for the main action
- **Don't:** Don't place the headline over the bright white clothing in the photograph
- **Don't:** Don't drop the translucent nav; it floats over the photo
- **Don't:** Don't add more than one button colour to the hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
