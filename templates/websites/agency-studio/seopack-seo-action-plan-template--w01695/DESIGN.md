# Design system — SEOpack SEO Action Plan Template

`SN-W01695` · agency-studio · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A white page with heavy near-black navy headlines, a small blue pill above the headline, and a solid blue (#2563eb) button for the offer. The copy is short and centred in a single column with generous vertical space. Colour is kept to the headline and the one button, so the page reads as a plain sales letter.

**Mood:** plain, sales-led, clear, flat

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#475569` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#2563eb` · `#475569` · `#334155` · `#e2e8f0` · `#f1f5f9` · `#f8fafc` · `#64748b` · `#60a5fa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 60px · h2 36px · h3 16px · body 14px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-5xl`, `max-w-2xl`
- **Section padding:** `py-20`, `py-28`
- **Common gaps:** `gap-3`, `gap-4`, `gap-2`

**Primary button**

```html
<a class="rounded-full px-4 py-2 text-sm font-medium transition-all hover:shadow-sm bg-blue-600 text-white hover:bg-blue-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Code / terminal (`code-terminal`)
4. Team (`team`)
5. Testimonials (`testimonials`)
6. Pricing (`pricing`)
7. Case studies (`case-studies`)
8. Gallery / portfolio (`gallery-portfolio`)
9. FAQ (`faq`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-muted: #475569;
  --color-border: #f1f5f9;
  --color-accent: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#0f172a',
    muted: '#475569',
    line: '#f1f5f9',
    accent: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use heavy sans headlines in dark navy on white.
- **Do:** Set one solid blue primary button per section; blue (#2563eb) is the only accent.
- **Do:** Keep copy in a single centred column with generous space between sections.
- **Don't:** Don't use the pale blue (#dbeafe) as a page ground; the page is white.
- **Don't:** Don't add a second accent colour to the buttons.
- **Don't:** Don't use gradients or shadows; the page is flat.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
