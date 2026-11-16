# Design system — Home Decor & Blinds Landing Page Template

`SN-W03247` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A light, editorial blinds page with a large serif headline in near-black, centred over several lines, and one italic teal phrase (3 Weeks) as the single highlight. The page sits on a white ground inside a soft rounded frame, with a small tracked teal badge above the headline and a dark pill button in the header. Typography carries most of the design, and the teal is kept to one phrase and one badge.

**Mood:** editorial, clean, refined, measured

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#0d9488` | Primary action and highlights |
| Second accent | `#fbbf24` | Supporting highlights |

Palette by frequency of use: `#111827` · `#ffffff` · `#14b8a6` · `#4b5563` · `#0d9488` · `#f3f4f6` · `#e5e7eb` · `#9ca3af` · `#f9fafb` · `#f0fdfa`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Instrument Serif
- **Body:** Inter
- **Loaded families:** Instrument Serif, Inter, Montserrat
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 14px
- **Weights in use:** light, medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-xl` (12px)
- **Shadows:** `shadow-sm`, `shadow-md`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-2`, `gap-10`, `gap-4`

**Primary button**

```html
<a class="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm shadow-lg shadow-teal-600/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-teal-600 text-white hover:bg-teal-700">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Logo cloud (`logo-cloud`)
5. Team (`team`)
6. Process / steps (`how-it-works`)
7. Gallery / portfolio (`gallery-portfolio`)
8. Services (`services`)
9. Testimonials (`testimonials`)
10. Listings (`listings`)
11. FAQ (`faq`)
12. Contact form (`contact-form`)
13. Footer (`footer`)

## Motion, effects and stack

- **Effects:** gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-text: #111827;
  --color-muted: #4b5563;
  --color-border: #f3f4f6;
  --color-accent: #0d9488;
  --color-accent-2: #fbbf24;
  --font-display: "Instrument Serif", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    ink: '#111827',
    muted: '#4b5563',
    line: '#f3f4f6',
    accent: '#0d9488',
    accent2: '#fbbf24',
  },
  fontFamily: { display: ['Instrument Serif'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in a serif in near-black, centred, with one italic teal phrase (#0d9488).
- **Do:** Use the teal (#0d9488) for the single highlight phrase and the small badge only.
- **Do:** Keep the page on white inside a rounded frame, with a small tracked badge above the headline.
- **Don't:** Don't set body copy in the serif; it is reserved for the headline.
- **Don't:** Don't add a second highlight colour beyond the teal.
- **Don't:** Don't use a teal background; the page ground is white.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
