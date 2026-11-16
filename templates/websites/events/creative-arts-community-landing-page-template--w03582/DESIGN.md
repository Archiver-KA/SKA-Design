# Design system — Creative Arts Community Landing Page Template

`SN-W03582` · events · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The creative arts page opens on a near-black hero (#09090b) with a large white sans headline and a soft glow behind the centre. Secondary actions use grey outline pills beside a solid white one. Content below is set in grey cards on the same dark ground. The first screen is restrained and monochrome, so the headline carries the page.

**Mood:** moody, minimal, dark, artistic, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#e4e4e7` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#18181b` · `#ffffff` · `#e4e4e7` · `#71717a` · `#f4f4f5` · `#d4d4d8` · `#27272a` · `#09090b` · `#fafafa` · `#52525b`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 18px · body 14px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-[200px]`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden md:flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-normal hover:bg-zinc-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Schedule (`schedule-agenda`)
5. Call to action (`cta`)
6. Booking form (`booking`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #e4e4e7;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#e4e4e7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the hero on near-black (#09090b) with white headlines
- **Do:** Use pill-shaped buttons, one solid white and one dark outline
- **Do:** Use soft radial glows behind the headline for depth
- **Don't:** Don't introduce colour accents; the page is monochrome
- **Don't:** Don't set headlines in grey, reserve grey for captions
- **Don't:** Don't use square corners on buttons

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
