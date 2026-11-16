# Design system — Corporate Comedy Booking Landing Page Template

`SN-W03871` · business-services · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A monochrome green page on a pale mint ground (#f0fdf4), with a heavy dark-green sans-serif headline and a lighter green line for the middle phrase. The primary button is solid dark green, and a wide photo frame sits beside the copy on the right. The palette stays within one hue, from pale mint to near-black green, so the page reads as calm and restrained.

**Mood:** monochrome, fresh, calm, restrained, green

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f0fdf4` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#022c22` | Headings and primary copy |
| Border | `#ecfdf5` | Hairlines, dividers, outlines |
| Accent | `#064e3b` | Primary action and highlights |

Palette by frequency of use: `#064e3b` · `#059669` · `#ffffff` · `#d1fae5` · `#a7f3d0` · `#065f46` · `#10b981` · `#022c22` · `#047857` · `#f0fdf4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 30px · h3 18px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-6`, `gap-1`, `gap-4`

**Primary button**

```html
<a class="text-white bg-emerald-900 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-md text-sm px-6 py-2.5 text-center transition-all duration-200 shadow-sm border border-transparent shadow-emerald-200 uppercase tracking-widest text-xs">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Video / media (`video-media`)
6. Testimonials (`testimonials`)
7. Schedule (`schedule-agenda`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f0fdf4;
  --color-surface: #ffffff;
  --color-text: #022c22;
  --color-border: #ecfdf5;
  --color-accent: #064e3b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f0fdf4',
    surface: '#ffffff',
    ink: '#022c22',
    line: '#ecfdf5',
    accent: '#064e3b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the palette to one green family, from pale mint to dark green
- **Do:** Set the middle headline phrase in a lighter green for contrast
- **Do:** Use the dark green (#064e3b) for the primary button only
- **Don't:** Don't add warm or bright colours; the page stays in greens
- **Don't:** Don't set the headline in a light weight; it is heavy
- **Don't:** Don't replace the pale mint ground with white; the tint defines the page

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
