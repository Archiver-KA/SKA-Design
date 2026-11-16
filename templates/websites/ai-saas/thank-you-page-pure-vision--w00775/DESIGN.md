# Design system — Thank you page Pure Vision

`SN-W00775` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A flat charcoal page (#202020) with a bold, uppercase Montserrat headline in white, where the middle phrase BRIEF VIDEO is set in teal (#4ca9b4). Grey (#797c86) body copy sits beneath, followed by a row holding a dark input and a muted dark button. The palette is one teal accent on neutral charcoal, so the highlighted phrase is the single point of emphasis.

**Mood:** direct, charcoal, focused, marketing

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#202020` | Page ground |
| Surface | `#313131` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#797c86` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4ca9b4` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#4ca9b4` · `#313131` · `#797c86` · `#1a202c` · `#202020` · `#3182ce` · `#f7fafc`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Montserrat
- **Body:** Montserrat
- **Loaded families:** Montserrat
- **Scale (largest breakpoint):** h2 48px · h3 20px · body 14px
- **Weights in use:** normal, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-3xl` (24px), `rounded-[32px]` (32px)
- **Shadows:** `shadow-[0_15px_25px_rgba(49,130,206,0.2)]`, `shadow-2xl`, `shadow-[0_15px_25px_rgba(49,130,206,0.3)]`
- **Content width:** `max-w-[140px]`, `max-w-7xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-2`, `gap-6`, `gap-16`

**Primary button**

```html
<a class="hidden md:inline-flex items-center justify-center rounded-full bg-[#1A202C] text-[#F7FAFC] px-6 py-3 text-sm font-normal hover:bg-[#3182CE] transition-all hover:shadow-[0_15px_25px_rgba(49,130,206,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Booking form (`booking`)
5. Stats band (`stats`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #202020;
  --color-surface: #313131;
  --color-text: #ffffff;
  --color-muted: #797c86;
  --color-border: #ffffff;
  --color-accent: #4ca9b4;
  --font-display: "Montserrat", sans-serif;
  --font-body: "Montserrat", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#202020',
    surface: '#313131',
    ink: '#ffffff',
    muted: '#797c86',
    line: '#ffffff',
    accent: '#4ca9b4',
  },
  fontFamily: { display: ['Montserrat'], sans: ['Montserrat'] },
} }
```

## Do and don't

- **Do:** Set headlines in Montserrat bold, uppercase, in white
- **Do:** Use the teal (#4ca9b4) only for the one highlighted phrase in the headline
- **Do:** Keep the email field and button together as one dark, rounded control
- **Don't:** Don't use teal for buttons; the highlight is text only
- **Don't:** Don't set the body copy in pure white; it is grey (#797c86)
- **Don't:** Don't put a light background behind the form

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
