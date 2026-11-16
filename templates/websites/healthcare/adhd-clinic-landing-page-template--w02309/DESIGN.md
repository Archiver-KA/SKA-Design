# Design system — ADHD Clinic Landing Page Template

`SN-W02309` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A near-white page where the headline mixes dark ink with one teal (#1fae9b) key word, and the primary buttons are a deep teal (#0e4a4d). Pricing and assessment cards are white panels with teal headings, and one card is inverted into a deep teal block to mark the complex option. The look is clinical and reassuring, built on pale surfaces and clear hierarchy.

**Mood:** clinical, reassuring, clear, calm, structured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111111` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#0e4a4d` | Primary action and highlights |
| Second accent | `#1fae9b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#0e4a4d` · `#1fae9b` · `#f1f5f9` · `#64748b` · `#e2e8f0` · `#94a3b8` · `#0ea5e9` · `#475569` · `#cbd5e1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Plus Jakarta Sans
- **Body:** Plus Jakarta Sans
- **Loaded families:** Plus Jakarta Sans, Public Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[24px]` (24px)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-slate-200/40`
- **Content width:** `max-w-[1400px]`, `max-w-2xl`
- **Section padding:** `py-20`
- **Common gaps:** `gap-2`, `gap-4`, `gap-6`

**Primary button**

```html
<a class="px-5 py-2 rounded-full bg-[#0e4a4d] text-white text-xs font-semibold hover:bg-[#1fae9b] transition-all shadow-lg shadow-[#0e4a4d]/10">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Timeline (`timeline`)
6. Team (`team`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111111;
  --color-muted: #ffffff;
  --color-border: #f1f5f9;
  --color-accent: #0e4a4d;
  --color-accent-2: #1fae9b;
  --font-display: "Plus Jakarta Sans", sans-serif;
  --font-body: "Plus Jakarta Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111111',
    muted: '#ffffff',
    line: '#f1f5f9',
    accent: '#0e4a4d',
    accent2: '#1fae9b',
  },
  fontFamily: { display: ['Plus Jakarta Sans'], sans: ['Plus Jakarta Sans'] },
} }
```

## Do and don't

- **Do:** Set the key headline word in teal (#1fae9b) and the rest in dark ink
- **Do:** Use deep teal (#0e4a4d) for primary buttons and the highlighted card
- **Do:** Keep pricing cards white with a small tab switch above them
- **Don't:** Don't use teal as the page background; the ground is near-white
- **Don't:** Don't set body copy in teal
- **Don't:** Don't use bright blue for buttons; the palette stays teal

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
