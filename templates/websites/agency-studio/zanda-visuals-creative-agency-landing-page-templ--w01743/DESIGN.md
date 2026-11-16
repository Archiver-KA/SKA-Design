# Design system — Zanda Visuals Creative Agency Landing Page Template

`SN-W01743` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `cs`

## Direction

A stark off-white creative-agency page where a huge black numeral does most of the work in the hero, set in a bold sans. Small monospaced labels in grey caps sit above and below the copy, and the only colour is a hot pink [#e8005a] pill button. The layout is spare and grid-like, with a thin index on the right edge.

**Mood:** stark, spare, editorial, bold, grid-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fbfbf9` | Page ground |
| Surface | `#f4f4f1` | Cards, panels, raised areas |
| Text | `#0b0b0c` | Headings and primary copy |
| Accent | `#e8005a` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#e8005a` · `#ffffff` · `#fbfbf9` · `#f4f4f1` · `#0b0b0c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist Mono
- **Body:** Geist Mono
- **Loaded families:** Geist Mono, Switzer
- **Scale (largest breakpoint):** h3 24px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-[-.035em]`, `tracking-[-.05em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-2xl` (16px), `rounded-full` (9999px), `rounded-[1.75rem]` (1.75rem)
- **Shadows:** `shadow-[0_1px_2px_rgba(11,11,12,.04),0_8px_24px_rgba(11,11,12,.05)]`
- **Content width:** `max-w-[100rem]`, `max-w-[48ch]`
- **Section padding:** `py-[clamp(8rem,18vh,16rem)]`, `py-16`
- **Common gaps:** `gap-x-4`, `gap-x-7`, `gap-8`

**Primary button**

```html
<a class="pressable pointer-events-auto rounded-full bg-[#E8005A] px-4 py-2.5 text-xs text-white shadow-[0_1px_2px_rgba(11,11,12,.04),0_8px_24px_rgba(11,11,12,.05)] transition-transform duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Sidebar (`sidebar`)
3. Hero (`hero`)
4. Marquee (`marquee`)
5. Video / media (`video-media`)
6. Bento grid (`bento-grid`)
7. Stats band (`stats`)
8. Process / steps (`how-it-works`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Libraries:** Tailwind CSS (CDN), GSAP, Lenis smooth scroll
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #fbfbf9;
  --color-surface: #f4f4f1;
  --color-text: #0b0b0c;
  --color-accent: #e8005a;
  --font-display: "Geist Mono", sans-serif;
  --font-body: "Geist Mono", sans-serif;
  --radius: 16px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fbfbf9',
    surface: '#f4f4f1',
    ink: '#0b0b0c',
    accent: '#e8005a',
  },
  fontFamily: { display: ['Geist Mono'], sans: ['Geist Mono'] },
} }
```

## Do and don't

- **Do:** Set the hero numeral or headline very large in black with a bold sans
- **Do:** Use hot pink (#e8005a) for the primary button only
- **Do:** Set labels and captions in small uppercase Geist Mono
- **Don't:** Don't put the pink on large fills or backgrounds
- **Don't:** Don't add decorative shapes or gradients to the hero
- **Don't:** Don't set body copy in the pink

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
