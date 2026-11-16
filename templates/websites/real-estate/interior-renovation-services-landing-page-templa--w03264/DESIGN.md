# Design system — Interior Renovation Services Landing Page Template

`SN-W03264` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

Dark and direct: a near-black ground (#1c1c1a) carries a large white headline set in three short lines, with the middle line in burnt orange (#c4541a). The orange is the only colour and does two jobs, the highlighted headline phrase and the primary button, while a faint oversized letter sits behind the copy. Supporting text is small and grey, giving the hero a confident, workmanlike tone.

**Mood:** bold, dark, workmanlike, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1c1a` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b6b67` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#c4541a` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#c4541a` · `#d96b2d` · `#1c1c1a` · `#6b6b67` · `#111110` · `#9e3d0e` · `#9a9a95` · `#1a1a18` · `#fafaf7`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Bebas Neue
- **Body:** Bebas Neue
- **Loaded families:** Bebas Neue, DM Sans
- **Scale (largest breakpoint):** h1 128px · h2 60px · h3 24px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_8px_24px_rgba(196,84,26,0.25)]`, `shadow-xl`, `shadow-[0_8px_32px_rgba(196,84,26,0.06)]`
- **Content width:** `max-w-[1280px]`, `max-w-[560px]`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-[#C4541A] text-white text-xs font-semibold tracking-widest uppercase rounded hover:bg-[#9E3D0E] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,84,26,0.25)] transition-all duration-300 border-none cursor-pointer">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. About (`about`)
7. Services (`services`)
8. Process / steps (`how-it-works`)
9. Gallery / portfolio (`gallery-portfolio`)
10. Feature grid (`features`)
11. Testimonials (`testimonials`)
12. Map / location (`map-location`)
13. FAQ (`faq`)
14. Contact form (`contact-form`)
15. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1c1c1a;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b6b67;
  --color-border: #ffffff;
  --color-accent: #c4541a;
  --font-display: "Bebas Neue", sans-serif;
  --font-body: "Bebas Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1c1a',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b6b67',
    line: '#ffffff',
    accent: '#c4541a',
  },
  fontFamily: { display: ['Bebas Neue'], sans: ['Bebas Neue'] },
} }
```

## Do and don't

- **Do:** Use burnt orange (#c4541a) for the highlighted middle headline line and the primary button only.
- **Do:** Set headlines in white, large, in three short lines.
- **Do:** Keep the hero ground dark (#1c1c1a) with white headings and grey supporting copy.
- **Don't:** Don't use orange for body text or running links.
- **Don't:** Don't place light panels on the dark hero.
- **Don't:** Don't add a second accent colour beside the orange.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
