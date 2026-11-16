# Design system — Architecture and Real Estate Template

`SN-W03188` · real-estate · light mode · Sinera Atlas theme `dwell` · language `es`

## Direction

A warm, editorial Spanish gallery page with a full-bleed landscape photograph and a large white serif headline in roman and italic lines. The brand sits top left and a small gold contact button sits bottom right. Colour is the photograph's earth tones, with cream and gold accents that echo the building materials.

**Mood:** editorial, warm, natural, elegant

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f7f5f0` | Page ground |
| Text | `#1c1c1c` | Headings and primary copy |
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
  --color-background: #f7f5f0;
  --color-text: #1c1c1c;
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
    background: '#f7f5f0',
    ink: '#1c1c1c',
    muted: '#8e8d8a',
    line: '#f7f5f0',
    accent: '#b89c66',
    accent2: '#162a22',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a white serif, roman for line one and italic for line two
- **Do:** Use the gold (#b89c66) only for the bottom-right contact button
- **Do:** Keep the hero photograph full-bleed behind the headline, with a darkened area for legibility
- **Don't:** Don't place dark text on the photograph
- **Don't:** Don't add cool colours; the palette is earth tones
- **Don't:** Don't use the gold for headings or body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
