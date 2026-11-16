# Design system — Tech Freelancer Portfolio Landing Page Template

`SN-W02254` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark developer-leaning freelancer page: a near-black ground (#0a0a0a) with a heavy white sans headline in which one phrase is set in hot pink (#ff006e) and the next fades into grey. A code card on the right, with pink keywords and grey text, and a pink pill button repeat the accent, so colour works as a single emphasis signal. The pink phrase inside the headline, backed by the code card, is what makes it recognisable.

**Mood:** technical, bold, dark, energetic, precise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#d1d5db` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ff006e` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#ff006e` · `#9ca3af` · `#4b5563` · `#6b7280` · `#0a0a0a` · `#4ade80` · `#374151` · `#111111` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_-5px_rgba(255,0,110,0.5)]`, `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-16`

**Primary button**

```html
<a class="hidden md:flex items-center justify-center text-sm font-bold text-white px-6 py-2.5 rounded-full bg-[#FF006E] hover:bg-[#E60063] transition-all shadow-[0_0_20px_-5px_rgba(255,0,110,0.5)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Marquee (`marquee`)
5. Stats band (`stats`)
6. Services (`services`)
7. Gallery / portfolio (`gallery-portfolio`)
8. FAQ (`faq`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #1f2937;
  --color-text: #d1d5db;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #ff006e;
  --color-accent-2: #4ade80;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#1f2937',
    ink: '#d1d5db',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#ff006e',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Use the hot pink (#ff006e) for one headline phrase and the primary button only.
- **Do:** Set headlines in the heavy sans, with the secondary phrase in a grey gradient.
- **Do:** Keep the code card as the hero visual, with pink keywords on grey text.
- **Don't:** Don't use the green (#4ade80) for emphasis; it appears only as a status dot.
- **Don't:** Don't put more than one pink phrase or button in a section.
- **Don't:** Don't place the code card on a light ground; it depends on the dark page.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
