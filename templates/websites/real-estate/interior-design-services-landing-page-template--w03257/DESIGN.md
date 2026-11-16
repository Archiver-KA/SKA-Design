# Design system — Interior Design Services Landing Page Template

`SN-W03257` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `fr`

## Direction

Quiet and warm, with a deep brown-black ground (#1c1917) and an off-white serif headline, the second line in italic. The palette is almost entirely warm neutrals, and the only solid shape on the first screen is a cream pill button, so contrast comes from light on dark rather than colour. Small tracked capitals label each section, and the spacing is generous and calm.

**Mood:** warm, calm, refined, understated

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1c1917` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#f5f5f4` | Headings and primary copy |
| Muted text | `#78716c` | Secondary copy, captions |
| Border | `#e7e5e4` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#1c1917` · `#ffffff` · `#78716c` · `#f5f5f4` · `#292524` · `#e7e5e4` · `#d6d3d1` · `#a8a29e` · `#f5f4f0` · `#57534e`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-sans)
- **Body:** var(--font-sans)
- **Loaded families:** Instrument Serif, Inter, Playfair Display, Geist, Roboto, Montserrat
- **Scale (largest breakpoint):** h1 96px · h2 36px · h3 30px · body 12px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded` (4px)
- **Shadows:** `shadow-sm`, `shadow-[0_2px_10px_-4px_rgba(28,25,23,0.05)]`, `shadow-[0_20px_40px_-12px_rgba(28,25,23,0.1)]`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="hidden md:flex bg-stone-100 text-stone-900 px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-white transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Process / steps (`how-it-works`)
5. Contact form (`contact-form`)
6. Newsletter signup (`newsletter`)
7. FAQ (`faq`)
8. About (`about`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #1c1917;
  --color-surface: #ffffff;
  --color-text: #f5f5f4;
  --color-muted: #78716c;
  --color-border: #e7e5e4;
  --font-display: "var(--font-sans)", sans-serif;
  --font-body: "var(--font-sans)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1c1917',
    surface: '#ffffff',
    ink: '#f5f5f4',
    muted: '#78716c',
    line: '#e7e5e4',
  },
  fontFamily: { display: ['var(--font-sans)'], sans: ['var(--font-sans)'] },
} }
```

## Do and don't

- **Do:** Set headlines in a serif display face in off-white (#f5f5f4), with the second line in italic.
- **Do:** Use small tracked capitals for section eyebrows above headings.
- **Do:** Make the primary button a cream pill with dark text on the dark ground.
- **Don't:** Don't introduce a saturated accent colour; the page is neutral.
- **Don't:** Don't place light panels on the dark ground without a clear reason.
- **Don't:** Don't set headlines in all capitals.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
