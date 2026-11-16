# Design system — PodLab Founder Services Landing Page Template

`SN-W04054` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, technology-styled page on a near-black ground. A wide geometric display headline in white, set in short lines, leads into a green-glowing primary button and a pill secondary. A dark diagram card with small labelled nodes shows the content system, giving the page a precise, product-like feel with soft outlines throughout.

**Mood:** technological, precise, dark, product-like

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#050505` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#737373` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#ffffff` · `#737373` · `#a3a3a3` · `#404040` · `#262626` · `#d4d4d4` · `#000000` · `#050505` · `#020202` · `#525252`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Michroma
- **Body:** Geist
- **Loaded families:** Geist, Manrope, Michroma
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-2xl` (16px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_15px_rgba(42,221,27,0.3)]`, `shadow-[0_0_20px_rgba(42,221,27,0.5)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-6`

**Primary button**

```html
<a class="inline-flex h-full min-h-[50px] items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Team (`team`)
3. Booking form (`booking`)
4. Hero (`hero`)
5. Logo cloud (`logo-cloud`)
6. Integrations (`integrations`)
7. Testimonials (`testimonials`)
8. Call to action (`cta`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #050505;
  --color-text: #ffffff;
  --color-muted: #737373;
  --color-border: #ffffff;
  --font-display: "Michroma", sans-serif;
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
    muted: '#737373',
    line: '#ffffff',
  },
  fontFamily: { display: ['Michroma'], sans: ['Geist'] },
} }
```

## Do and don't

- **Do:** Set headlines in Michroma, in short lines
- **Do:** Use the green glow on the primary button only
- **Do:** Keep diagrams as dark cards with small labelled nodes
- **Don't:** Don't put light backgrounds behind sections
- **Don't:** Don't add more than one glow per block
- **Don't:** Don't set body copy in the display face

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
