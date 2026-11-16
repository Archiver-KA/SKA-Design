# Design system — Luxury Real Estate & Architectural Landing Page Template

`SN-W03284` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `es`

## Direction

Dark and literary: a charcoal ground (#1c1c1c) with a large off-white serif headline in two lines, the second line in italic. A small tracked label sits above, followed by a short subhead in light type. The one warm note is a tan (#b89c66) WhatsApp button pinned to the lower right, so the page reads calm and editorial with a single point of colour.

**Mood:** literary, calm, dark, editorial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1c1c` | Page ground |
| Text | `#f7f5f0` | Headings and primary copy |
| Muted text | `#8e8d8a` | Secondary copy, captions |
| Border | `#f7f5f0` | Hairlines, dividers, outlines |
| Accent | `#b89c66` | Primary action and highlights |
| Second accent | `#162a22` | Supporting highlights |

Palette by frequency of use: `#b89c66` · `#f7f5f0` · `#1c1c1c` · `#2f3b2f` · `#111111` · `#8e8d8a` · `#333333` · `#162a22` · `#f5f5f5` · `#404040`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Cormorant Garamond, Inter, Tenor Sans
- **Scale (largest breakpoint):** h3 42px · body 16px
- **Weights in use:** medium
- **Letter spacing:** `tracking-tight`, `tracking-[0.2em]`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px)
- **Content width:** `max-w-[1500px]`, `max-w-4xl`
- **Section padding:** `py-20`, `py-12`
- **Common gaps:** `gap-3`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="mt-2 inline-flex w-max items-center bg-[#B89C66] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F7F5F0] transition-opacity hover:opacity-85">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. Feature grid (`features`)
5. Marquee (`marquee`)
6. Contact form (`contact-form`)
7. Footer (`footer`)
8. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1c1c;
  --color-text: #f7f5f0;
  --color-muted: #8e8d8a;
  --color-border: #f7f5f0;
  --color-accent: #b89c66;
  --color-accent-2: #162a22;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1c1c',
    ink: '#f7f5f0',
    muted: '#8e8d8a',
    line: '#f7f5f0',
    accent: '#b89c66',
    accent2: '#162a22',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in the serif display face in off-white (#f7f5f0), with the second line in italic.
- **Do:** Use the tan (#b89c66) for the floating contact button and small highlights only.
- **Do:** Keep the ground charcoal (#1c1c1c) with small tracked labels above headings.
- **Don't:** Don't lighten the ground to cream; the page is built on charcoal.
- **Don't:** Don't set headlines in a sans face; the serif carries the voice.
- **Don't:** Don't place the tan on large background areas.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
