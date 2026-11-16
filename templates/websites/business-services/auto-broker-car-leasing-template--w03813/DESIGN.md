# Design system — Auto Broker Car Leasing Template

`SN-W03813` · business-services · dark mode · Sinera Atlas theme `route` · language `pl`

## Direction

A dark photographic hero of cars lined up under an evening sky, with a large uppercase white headline and one highlighted word in orange (#f15f22). Orange also fills the navigation button, and a plain outlined button sits below the intro copy. The layout is heavy and centred, with the photograph supplying most of the visual energy.

**Mood:** bold, energetic, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#110e0d` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#d4d4d4` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f15f22` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#f15f22` · `#a3a3a3` · `#110e0d` · `#525252` · `#737373` · `#d4d4d4` · `#151211` · `#d44d18` · `#e5e5e5`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-lg` (8px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_4px_20px_rgba(0,0,0,0.5)]`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-6`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="hidden md:inline-flex justify-center items-center px-6 py-2.5 bg-[#F15F22] text-white text-xs font-medium hover:bg-[#d44d18] transition-colors duration-300 rounded uppercase tracking-widest shadow-[0_0_20px_-5px_rgba(241,95,34,0.4)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #110e0d;
  --color-surface: #171717;
  --color-text: #d4d4d4;
  --color-muted: #737373;
  --color-border: #ffffff;
  --color-accent: #f15f22;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#110e0d',
    surface: '#171717',
    ink: '#d4d4d4',
    muted: '#737373',
    line: '#ffffff',
    accent: '#f15f22',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Inter, uppercase, in white, with one highlighted word in orange (#f15f22).
- **Do:** Use orange (#f15f22) for the navigation button and the highlighted word only.
- **Do:** Keep the hero photograph darkened so the white headline stays legible.
- **Don't:** Don't use orange for body copy.
- **Don't:** Don't place the headline over the bright sky areas of the photograph.
- **Don't:** Don't add a second highlight colour to the headline.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
