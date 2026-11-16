# Design system — Education Landing Page Template

`SN-W03451` · education · light mode · Sinera Atlas theme `calm` · language `pt-BR`

## Direction

A cream editorial hero for an academic course, with a large bold serif headline in near-black and an italic olive-grey phrase in the middle. A pale lime [#dbe270] tag marks the enrolment status, and a dark button is the main action. A tall photograph in blue and orange sits on the right edge and anchors the page.

**Mood:** editorial, warm, scholarly, refined

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f9f5ea` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1c1d18` | Headings and primary copy |
| Muted text | `#585b52` | Secondary copy, captions |
| Border | `#dfdfdf` | Hairlines, dividers, outlines |
| Accent | `#dbe270` | Primary action and highlights |

Palette by frequency of use: `#1c1d18` · `#585b52` · `#dfdfdf` · `#f9f5ea` · `#dbe270` · `#ffffff` · `#e5e2d9` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, JetBrains Mono, Outfit
- **Scale (largest breakpoint):** h1 24px · h2 48px · h3 30px · body 14px
- **Weights in use:** semibold, medium, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-md` (6px)
- **Shadows:** `shadow-xl`, `shadow-[#1C1D18]/5`, `shadow-[#1C1D18]/10`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-4`, `gap-8`, `gap-6`

**Primary button**

```html
<a class="inline-flex items-center justify-center w-full sm:w-auto bg-[#DBE270] text-[#1C1D18] px-10 py-5 rounded-full text-lg font-semibold hover:-translate-y-1 hover:shadow-xl hover:shadow-[#DBE270]/20 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Call to action (`cta`)
3. Feature grid (`features`)
4. Stats band (`stats`)
5. FAQ (`faq`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, CSS animations
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f9f5ea;
  --color-surface: #ffffff;
  --color-text: #1c1d18;
  --color-muted: #585b52;
  --color-border: #dfdfdf;
  --color-accent: #dbe270;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f9f5ea',
    surface: '#ffffff',
    ink: '#1c1d18',
    muted: '#585b52',
    line: '#dfdfdf',
    accent: '#dbe270',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold serif, with one phrase in italic olive grey
- **Do:** Use the pale lime (#dbe270) for the status tag only
- **Do:** Use a near-black button for the main action on the cream background (#f9f5ea)
- **Don't:** Don't use lime as a button or text colour
- **Don't:** Don't set headlines in all caps
- **Don't:** Don't add colours beyond the cream, black, olive and lime

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
