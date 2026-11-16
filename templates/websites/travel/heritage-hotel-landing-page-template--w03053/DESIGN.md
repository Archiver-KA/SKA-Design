# Design system — Heritage Hotel Landing Page Template

`SN-W03053` · travel · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A heritage hotel with a grey-tinted photo hero, white headlines and a warm burnt-orange (#b45309) button as the single action. The navigation is small uppercase tracked text on a white bar, and the hero copy is centred over the photograph with one italic line for emphasis. The most distinct element is a round green chat button (#25d366) floating at the bottom right, the only cool colour on the page.

**Mood:** heritage, warm, spiritual, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafaf9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#57534e` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |
| Accent | `#b45309` | Primary action and highlights |
| Second accent | `#25d366` | Supporting highlights |

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#e7e5e4` · `#b45309` · `#fafaf9` · `#a8a29e` · `#f5f5f4` · `#d6d3d1` · `#d97706`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 12px · body 12px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-wide`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-stone-200/50`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="bg-amber-700 text-stone-50 hover:bg-amber-800 px-5 py-2.5 text-xs font-medium transition-all rounded-sm uppercase tracking-wide">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. About (`about`)
5. Listings (`listings`)
6. Services (`services`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Contact form (`contact-form`)
9. Booking form (`booking`)
10. Pricing (`pricing`)
11. Map / location (`map-location`)
12. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fafaf9;
  --color-surface: #ffffff;
  --color-text: #57534e;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --color-accent: #b45309;
  --color-accent-2: #25d366;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafaf9',
    surface: '#ffffff',
    ink: '#57534e',
    muted: '#78716c',
    line: '#e7e5e4',
    accent: '#b45309',
    accent2: '#25d366',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use burnt orange (#b45309) for the primary booking button only
- **Do:** Keep navigation small, uppercase and tracked on a white bar
- **Do:** Place floating contact buttons at the bottom right
- **Don't:** Don't use the green chat colour (#25d366) for anything except contact
- **Don't:** Don't place hero text over busy parts of the photo
- **Don't:** Don't use more than one warm accent in a single hero

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
