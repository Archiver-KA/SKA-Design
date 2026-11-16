# Design system — Real Estate Landing Page Template

`SN-W03351` · real-estate · light mode · Sinera Atlas theme `dwell` · language `tr`

## Direction

A light, type-led hero on pale grey (#f6f7fa) where an oversized uppercase black sans-serif wordmark spans the full width, with a smaller line tucked under its right side. A pill navigation bar floats above, and three stat numerals sit below with grey labels. The page uses no colour and depends on the scale contrast between the two lines.

**Mood:** bold, minimal, monumental, neutral

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f6f7fa` | Page ground |
| Surface | `#17191f` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#000000` · `#17191f` · `#6b7280` · `#f6f7fa` · `#9ca3af` · `#4b5563` · `#d1d5db` · `#e5e7eb` · `#a1a19f`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Helvetica Neue
- **Body:** Helvetica Neue
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 48px · body 20px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[24px]` (24px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_20px_40px_rgba(0,0,0,0.06)]`, `shadow-[0_4px_20px_rgba(0,0,0,0.02)]`
- **Content width:** `max-w-[1400px]`, `max-w-[90vw]`
- **Common gaps:** `gap-4`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="bg-[#17191F] text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Testimonials (`testimonials`)
4. FAQ (`faq`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #f6f7fa;
  --color-surface: #17191f;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #000000;
  --font-display: "Helvetica Neue", sans-serif;
  --font-body: "Helvetica Neue", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f6f7fa',
    surface: '#17191f',
    ink: '#000000',
    muted: '#6b7280',
    line: '#000000',
  },
  fontFamily: { display: ['Helvetica Neue'], sans: ['Helvetica Neue'] },
} }
```

## Do and don't

- **Do:** Set the wordmark in very large uppercase black sans-serif that spans the full width
- **Do:** Keep the page on pale grey (#f6f7fa) with black type
- **Do:** Tuck the smaller second line under the right side of the wordmark
- **Don't:** Don't add colour to the wordmark or the stats
- **Don't:** Don't use decorative imagery in the hero
- **Don't:** Don't reduce the wordmark to a standard heading size

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
