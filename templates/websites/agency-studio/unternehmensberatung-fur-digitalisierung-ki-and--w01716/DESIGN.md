# Design system — Unternehmensberatung für Digitalisierung, KI & Marketing | INTELLI

`SN-W01716` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `de`

## Direction

A dark editorial consultancy page on warm near-black [#1a1917] with cream type. Playfair Display carries the headlines, and the second line of each headline is set in italic tan [#d4a07a], the main way the page builds hierarchy. The accent stays rare: italic words, an outlined secondary button and small eyebrow labels, so it reads like a printed brochure.

**Mood:** editorial, warm, restrained, serif-led, premium

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1a1917` | Page ground |
| Surface | `#2a2825` | Cards, panels, raised areas |
| Text | `#f5f0eb` | Headings and primary copy |
| Muted text | `#6b675e` | Secondary copy, captions |
| Border | `#38302b` | Hairlines, dividers, outlines |
| Accent | `#d4a07a` | Primary action and highlights |

Palette by frequency of use: `#d4a07a` · `#f5f0eb` · `#6b675e` · `#38302b` · `#9c9789` · `#c17f59` · `#1a1917` · `#2a2825` · `#5a6b7c` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** var(--font-body)
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 48px · h2 24px · h3 24px · body 16px
- **Weights in use:** medium, light, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_0_12px_2px_#D4A07A]`, `shadow-[0_0_20px_rgba(212,160,122,0.1)]`, `shadow-[0_0_40px_rgba(193,127,89,0.15)]`
- **Content width:** `max-w-[32px]`, `max-w-[560px]`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 text-[0.78rem] uppercase tracking-[0.1em] font-medium text-[#F5F0EB] bg-transparent border border-[#C17F59]/30 rounded-full hover:bg-[#C17F59]/10 hover:border-[#C17F59] transition-all duration-300 w-full sm:w-auto group">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. About (`about`)
5. Services (`services`)
6. Stats band (`stats`)
7. Process / steps (`how-it-works`)
8. Testimonials (`testimonials`)
9. Call to action (`cta`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1a1917;
  --color-surface: #2a2825;
  --color-text: #f5f0eb;
  --color-muted: #6b675e;
  --color-border: #38302b;
  --color-accent: #d4a07a;
  --font-display: "Playfair Display", serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1a1917',
    surface: '#2a2825',
    ink: '#f5f0eb',
    muted: '#6b675e',
    line: '#38302b',
    accent: '#d4a07a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set headlines in Playfair Display and put the second line in italic tan (#d4a07a)
- **Do:** Keep the tan accent to italic words, the outlined button and eyebrow labels
- **Do:** Use the cream text colour (#f5f0eb) on near-black backgrounds for all body copy
- **Don't:** Don't fill buttons or cards with the tan accent
- **Don't:** Don't add a second accent hue to the palette
- **Don't:** Don't set headlines in a sans-serif face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
