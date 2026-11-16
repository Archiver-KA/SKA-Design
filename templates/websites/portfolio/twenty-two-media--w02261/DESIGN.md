# Design system — Twenty Two Media

`SN-W02261` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark independent-studio landing page on a near-black ground (#09090b), with a large bold white serif headline set across three lines. A small uppercase kicker sits above, a faint thin ring graphic sits to the right, and a three-column strip of small caps labels runs along the foot of the hero. The restraint of white on black with one faint ring is what makes it recognisable.

**Mood:** restrained, editorial, dark, confident, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#030712` | Cards, panels, raised areas |
| Text | `#f4f4f5` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#d1d5db` | Hairlines, dividers, outlines |
| Accent | `#93c5fd` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#030712` · `#6b7280` · `#d1d5db` · `#9ca3af` · `#93c5fd` · `#f3e8ff` · `#4b5563` · `#1f2937` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** DM Mono
- **Body:** DM Mono
- **Loaded families:** DM Mono, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 72px · h3 30px · body 12px
- **Weights in use:** semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-[0.15em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px)
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-36`
- **Common gaps:** `gap-3`, `gap-5`, `gap-12`

**Primary button**

```html
<a class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-blue-300">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Case studies (`case-studies`)
5. Services (`services`)
6. Call to action (`cta`)
7. Testimonials (`testimonials`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #030712;
  --color-text: #f4f4f5;
  --color-muted: #6b7280;
  --color-border: #d1d5db;
  --color-accent: #93c5fd;
  --font-display: "DM Mono", sans-serif;
  --font-body: "DM Mono", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#030712',
    ink: '#f4f4f5',
    muted: '#6b7280',
    line: '#d1d5db',
    accent: '#93c5fd',
  },
  fontFamily: { display: ['DM Mono'], sans: ['DM Mono'] },
} }
```

## Do and don't

- **Do:** Set the headline large and white, with a small uppercase kicker above it.
- **Do:** Use the faint thin ring as the only decoration in the hero.
- **Do:** Keep the labels as small caps in three columns at the foot of the hero.
- **Don't:** Don't add a saturated accent; the page is white on near-black.
- **Don't:** Don't set the headlines in a mono face; they are serif.
- **Don't:** Don't fill the hero with imagery; the empty ground is part of the look.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
