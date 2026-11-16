# Design system — Auto Repair Service Landing Page Template

`SN-W03820` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A near-black page with a large, heavy, uppercase sans-serif headline: the first line is white and the second is grey, giving a two-tone stack. Red (#e60000) marks the brand word, the small eyebrow label and the floating reserve button, and a faint red glow sits behind the hero. The look is stark and motion-led, and it depends on contrast rather than images.

**Mood:** stark, high-contrast, kinetic, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#050505` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e60000` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#e60000` · `#71717a` · `#000000` · `#a1a1aa` · `#3f3f46` · `#52525b` · `#050505` · `#09090b` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-[0_0_30px_rgba(230,0,0,0.15)]`, `shadow-[0_0_40px_rgba(230,0,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-16`
- **Common gaps:** `gap-4`, `gap-1`, `gap-8`

**Primary button**

```html
<a class="mt-8 bg-white hover:bg-brand text-black hover:text-white text-sm font-semibold uppercase tracking-widest py-4 px-10 rounded-sm transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Benefits (`benefits`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #050505;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e60000;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#050505',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#e60000',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase sans-serif, with the second line in grey.
- **Do:** Use red (#e60000) for the brand word, the eyebrow label and the reserve button only.
- **Do:** Keep the hero on black with a soft red glow rather than a photo.
- **Don't:** Don't put red on large text areas or full sections.
- **Don't:** Don't use a light background for the hero.
- **Don't:** Don't remove the floating reserve button from the first view.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
