# Design system — Aurelia AI Travel & Concierge Template

`SN-W03023` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A deep navy ground (#07162b) with a headline in warm off-white, and a large image well in the lower left that is still a soft grey glow. The itinerary sits on a cream card (#eee5da) with a serif title, numbered day rows separated by hairlines, and small gold bullets (#bd8a3c). Gold marks the list and the actions, so the palette reads as evening, sea and brass.

**Mood:** evening, refined, travel-led, warm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#07162b` | Page ground |
| Surface | `#eee5da` | Cards, panels, raised areas |
| Text | `#fffaf2` | Headings and primary copy |
| Muted text | `#526071` | Secondary copy, captions |
| Border | `#fffaf2` | Hairlines, dividers, outlines |
| Accent | `#bd8a3c` | Primary action and highlights |
| Second accent | `#10233d` | Supporting highlights |

Palette by frequency of use: `#07162b` · `#fffaf2` · `#526071` · `#bd8a3c` · `#d8c5a3` · `#9d7337` · `#8a612d` · `#eee5da` · `#d1c4b7` · `#2b3748`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Manrope
- **Body:** Manrope
- **Loaded families:** Cormorant Garamond, Manrope
- **Scale (largest breakpoint):** h1 96px · h2 24px · h3 24px · body 11px
- **Weights in use:** bold, semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.22em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_0_4px_#eee5da]`, `shadow-[0_16px_40px_rgba(7,22,43,0.08),inset_0_1px_0_rgba(255,255,255,0.8)]`, `shadow-[0_24px_70px_rgba(7,22,43,0.10),inset_0_1px_0_rgba(255,255,255,0.78)]`
- **Content width:** `max-w-[88rem]`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center rounded-xl bg-[#07162b] px-6 py-3.5 text-[0.82rem] font-semibold text-[#fffaf2] shadow-lg shadow-[#07162b]/15 transition hover:bg-[#10233d]">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Feature grid (`features`)
3. Timeline (`timeline`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN), GSAP
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #07162b;
  --color-surface: #eee5da;
  --color-text: #fffaf2;
  --color-muted: #526071;
  --color-border: #fffaf2;
  --color-accent: #bd8a3c;
  --color-accent-2: #10233d;
  --font-display: "Manrope", sans-serif;
  --font-body: "Manrope", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#07162b',
    surface: '#eee5da',
    ink: '#fffaf2',
    muted: '#526071',
    line: '#fffaf2',
    accent: '#bd8a3c',
    accent2: '#10233d',
  },
  fontFamily: { display: ['Manrope'], sans: ['Manrope'] },
} }
```

## Do and don't

- **Do:** Set the itinerary on the cream card (#eee5da) with hairline row dividers
- **Do:** Use gold (#bd8a3c) for bullets, small labels and text links
- **Do:** Keep the navy ground (#07162b) behind the hero and all headline text
- **Don't:** Don't use the cream card on a light page; it is designed to read against navy
- **Don't:** Don't use gold for large filled areas
- **Don't:** Don't set text in the muted blue-grey (#526071) on navy; the contrast is too low

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
