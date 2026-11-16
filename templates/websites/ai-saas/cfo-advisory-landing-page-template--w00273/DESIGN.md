# Design system — CFO Advisory Landing Page Template

`SN-W00273` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A dark, editorial advisory landing page on a near-black ground (#0b0b0b), with a large white serif headline and the closing line set in gold (#c4a04d) italic. Gold is the single accent, reserved for the italic phrase and the small kicker, and the nav's white pill is the only solid button. The wide serif type and the empty portrait frame give it a private-advisory tone.

**Mood:** luxurious, editorial, dark, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0b0b0b` | Page ground |
| Text | `#f5f5f5` | Headings and primary copy |
| Accent | `#c4a04d` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#0b0b0b` · `#c4a04d` · `#f5f5f5` · `#ffffff`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 18px · body 14px
- **Weights in use:** medium, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px)
- **Shadows:** `shadow-[0_0_20px_rgba(196,160,77,0.2)]`
- **Content width:** `max-w-[80rem]`, `max-w-3xl`
- **Section padding:** `py-24`, `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[linear-gradient(135deg,#c4a04d,#d4b878)] text-black font-medium text-base hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(196,160,77,0.2)]">…</a>
```

## Page structure

Blocks in page order:

1. Logo cloud (`logo-cloud`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Stats band (`stats`)
5. FAQ (`faq`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #0b0b0b;
  --color-text: #f5f5f5;
  --color-accent: #c4a04d;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0b0b0b',
    ink: '#f5f5f5',
    accent: '#c4a04d',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a large white serif (Playfair Display) on #0b0b0b
- **Do:** Use gold (#c4a04d) only for the italic closing phrase and the kicker
- **Do:** Keep the solid white pill as the single nav call to action
- **Don't:** Don't use gold for buttons or large fills
- **Don't:** Don't set body copy in serif; the sans carries the paragraphs
- **Don't:** Don't add a second bright accent beside the gold

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
