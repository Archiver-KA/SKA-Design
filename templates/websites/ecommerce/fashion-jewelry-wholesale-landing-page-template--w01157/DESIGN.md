# Design system — Fashion Jewelry Wholesale Landing Page Template

`SN-W01157` · ecommerce · light mode · Sinera Atlas theme `route` · language `en`

## Direction

A wholesale landing page sits on an off-white ground with a dark, tightly set sans headline in near-black and two large pill buttons, one solid and one white. Small white feature chips float over the hero edge like tags, which gives a catalogue feel. The design is plain and commercial.

**Mood:** commercial, plain, bold, catalogue

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#eeeee9` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#211e1f` | Headings and primary copy |
| Muted text | `#504c4d` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#211e1f` | Primary action and highlights |
| Second accent | `#16a34a` | Supporting highlights |

Palette by frequency of use: `#e49a6b` · `#211e1f` · `#ffffff` · `#504c4d` · `#eeeee9` · `#e5e7eb` · `#f3f4f6` · `#ad5207` · `#9ca3af` · `#000000`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 14px
- **Weights in use:** semibold, medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-5xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#E49A6B] hover:bg-[#AD5207] text-white px-10 py-4 rounded-full font-medium transition-colors shadow-lg shadow-[#E49A6B]/20 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Pricing (`pricing`)
3. Stats band (`stats`)
4. Product grid (`product-grid`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN), Lenis smooth scroll
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #eeeee9;
  --color-surface: #ffffff;
  --color-text: #211e1f;
  --color-muted: #504c4d;
  --color-border: #e5e7eb;
  --color-accent: #211e1f;
  --color-accent-2: #16a34a;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#eeeee9',
    surface: '#ffffff',
    ink: '#211e1f',
    muted: '#504c4d',
    line: '#e5e7eb',
    accent: '#211e1f',
    accent2: '#16a34a',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold Plus Jakarta Sans with tight tracking, in near-black (#211e1f).
- **Do:** Use the dark solid button for the primary action and a white pill for the secondary.
- **Do:** Float short white feature chips over hero edges, one line each, as tags.
- **Don't:** Don't use the orange-tan (#e49a6b) as a page ground; the ground is off-white.
- **Don't:** Don't add colour to the chips; they stay white with dark text.
- **Don't:** Don't set headlines in a serif; the family is one sans-serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
