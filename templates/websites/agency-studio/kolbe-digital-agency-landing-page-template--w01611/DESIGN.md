# Design system — Kolbe Digital Agency Landing Page Template

`SN-W01611` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `pt-br`

## Direction

A dark digital-agency page on near-black (#05050a). Headings are heavy uppercase sans in white, with the key word in yellow (#facc15). Yellow appears on headings and small captions rather than large areas, and body copy sits in light grey on the same dark ground. A large black-and-white portrait with a yellow caption adds a studio feel, and the navigation is spare.

**Mood:** bold, dark, studio, urgent

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#05050a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#facc15` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#facc15` · `#eab308` · `#9ca3af` · `#d1d5db` · `#6b7280` · `#05050a` · `#000000` · `#fde047` · `#0a0a10`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 24px · body 14px
- **Weights in use:** bold, medium, semibold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-[0_0_20px_rgba(234,179,8,0.3)]`, `shadow-[0_0_30px_rgba(234,179,8,0.5)]`, `shadow-[0_0_15px_rgba(234,179,8,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-4`, `gap-2`, `gap-1`

**Primary button**

```html
<a class="w-full sm:w-auto flex-1 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-bold text-sm uppercase tracking-wide py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-0.5">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Services (`services`)
5. Feature grid (`features`)
6. Process / steps (`how-it-works`)
7. Bento grid (`bento-grid`)
8. Contact form (`contact-form`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #05050a;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #facc15;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#05050a',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#facc15',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set section headlines in heavy uppercase sans, with the key word in yellow (#facc15)
- **Do:** Use yellow only on headline words and captions
- **Do:** Keep the ground near-black (#05050a) and body copy light grey
- **Don't:** Don't use yellow (#eab308) as a page ground; the ground is near-black
- **Don't:** Don't set long copy in uppercase
- **Don't:** Don't add gradients behind the portrait

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
