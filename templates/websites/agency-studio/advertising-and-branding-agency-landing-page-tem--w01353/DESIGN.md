# Design system — Advertising & Branding Agency Landing Page Template

`SN-W01353` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A pure black first screen carries a heavy, uppercase grotesque headline set in large lines that fill most of the width, with no imagery. The only other elements are a small wordmark and a few spaced capital nav links. The design is blunt and typographic, and the headline does all the work.

**Mood:** blunt, typographic, stark, monochrome

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#707070` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4774b8` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#4774b8` · `#707070` · `#f3f4f6` · `#111111` · `#9ca3af` · `#383838` · `#18181b` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Jost
- **Body:** Jost
- **Loaded families:** Jost, Montserrat
- **Scale (largest breakpoint):** h1 104px · h2 48px · h3 36px · body 18px
- **Weights in use:** extrabold, medium, bold
- **Letter spacing:** `tracking-tighter`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-sm` (2px)
- **Shadows:** `shadow-2xl`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`, `py-48`
- **Common gaps:** `gap-8`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="view-btn opacity-0 transition-opacity duration-500 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-[0.65rem] font-secondary uppercase tracking-[0.15em] border border-white/20 hover:bg-white hover:text-black">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Stats band (`stats`)
5. Services (`services`)
6. Marquee (`marquee`)
7. Testimonials (`testimonials`)
8. Team (`team`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f3f4f6;
  --color-text: #ffffff;
  --color-muted: #707070;
  --color-border: #ffffff;
  --color-accent: #4774b8;
  --font-display: "Jost", sans-serif;
  --font-body: "Jost", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#f3f4f6',
    ink: '#ffffff',
    muted: '#707070',
    line: '#ffffff',
    accent: '#4774b8',
  },
  fontFamily: { display: ['Jost'], sans: ['Jost'] },
} }
```

## Do and don't

- **Do:** Set headlines in heavy uppercase at large size, stacked over several lines.
- **Do:** Keep the ground black and the type white, with grey for secondary text.
- **Do:** Keep navigation to a few spaced capital links at small size.
- **Don't:** Don't add photography or illustration to the hero; the type is the image.
- **Don't:** Don't centre the headline; it sits flush left.
- **Don't:** Don't use rounded buttons or badges; none appear in the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
