# Design system — Luxury Concierge Travel Landing Page Template

`SN-W03082` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A black luxury concierge page on a near-black ground (#050505) with a large white sans headline split across two lines, the first word in white and the second in dimmer grey. A thin vertical rule sets off a short pull quote, and small tracked caps label the eyebrow and navigation. The hierarchy is driven by value contrast alone, so the page feels sombre and exclusive.

**Mood:** dark, sombre, exclusive, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#d4c4a8` · `#000000` · `#050505` · `#080808` · `#0f0f0f` · `#262626` · `#030303`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Roboto, Montserrat, Poppins, Playfair Display, Instrument Serif
- **Scale (largest breakpoint):** h1 120px · h2 36px · h3 24px · body 14px
- **Weights in use:** light, semibold, medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-sm` (2px), `rounded-full` (9999px)
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-2`, `gap-16`, `gap-3`

**Primary button**

```html
<a class="px-5 py-2 border border-white/10 rounded-full text-[10px] font-semibold uppercase tracking-widest text-[#D4C4A8] hover:bg-[#D4C4A8] hover:text-black transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Services (`services`)
5. Timeline (`timeline`)
6. Schedule (`schedule-agenda`)
7. Feature grid (`features`)
8. Pricing (`pricing`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    line: '#ffffff',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set the first headline word in white and the second in grey
- **Do:** Use a thin vertical rule to frame pull quotes
- **Do:** Keep the ground near-black (#050505) across every section
- **Don't:** Don't use the beige (#d4c4a8) as the page ground; the page is black
- **Don't:** Don't add colour accents to the headline
- **Don't:** Don't set the pull quote in bold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
