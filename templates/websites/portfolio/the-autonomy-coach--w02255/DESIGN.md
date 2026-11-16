# Design system — The Autonomy Coach

`SN-W02255` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A centred dark sales-coaching hero: a near-black ground (#050505) with a large white sans headline, and one word set in yellow italic serif (#ffd400) that carries the promise of the line. A soft yellow glow sits behind the headline, and a single solid yellow pill button is the only control. Grey body copy, with the coach's name in white, sits between them, and the yellow italic word is what makes it recognisable.

**Mood:** confident, dark, warm, focused, bold

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffd400` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#ffd400` · `#9ca3af` · `#6b7280` · `#4b5563` · `#e5e7eb` · `#000000` · `#ffe033` · `#d1d5db` · `#050505`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Geist
- **Body:** Geist
- **Loaded families:** Geist, Montserrat
- **Scale (largest breakpoint):** h1 88px · h2 60px · h3 30px · body 18px
- **Weights in use:** light, medium
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[2rem]` (2rem), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_30px_rgba(255,212,0,0.15)]`, `shadow-[0_0_40px_rgba(255,212,0,0.15)]`
- **Content width:** `max-w-3xl`, `max-w-7xl`
- **Section padding:** `py-32`, `py-20`
- **Common gaps:** `gap-6`, `gap-5`, `gap-3`

**Primary button**

```html
<a class="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFD400] text-black text-xl font-medium hover:bg-[#ffe033] transition-colors shadow-[0_0_30px_rgba(255,212,0,0.15)]">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Feature grid (`features`)
5. About (`about`)
6. Testimonials (`testimonials`)
7. Process / steps (`how-it-works`)
8. FAQ (`faq`)
9. Booking form (`booking`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #ffd400;
  --font-display: "Geist", sans-serif;
  --font-body: "Geist", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#050505',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#ffd400',
  },
  fontFamily: { display: ['Geist'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Use the yellow (#ffd400) for one italic word in the headline and the primary button only.
- **Do:** Centre the hero on a near-black ground with a soft yellow glow behind the headline.
- **Do:** Set body copy in grey, with names or key terms in white.
- **Don't:** Don't use the yellow for body text or links; it is reserved for emphasis.
- **Don't:** Don't put white text on the yellow button; the button uses dark text.
- **Don't:** Don't add a second accent colour to the hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
