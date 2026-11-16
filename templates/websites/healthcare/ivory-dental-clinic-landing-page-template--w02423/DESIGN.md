# Design system — Ivory Dental Clinic Landing Page Template

`SN-W02423` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

The dental clinic hero is black, with a serif headline in white. The middle phrase is italic and the closing phrase is light grey serif, which gives three tonal steps from one line. The primary button is a warm tan (#d4b996), the only colour on the page, and a rounded photo card with a small label sits on the right. The tone is quiet, luxurious and editorial.

**Mood:** luxurious, editorial, quiet, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#4b5563` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#d4b996` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#d4b996` · `#9ca3af` · `#6b7280` · `#4b5563` · `#d1d5db` · `#000000` · `#1f2937` · `#050505` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 88px · h2 30px · h3 20px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_8px_32px_rgba(0,0,0,0.3)]`, `shadow-[0_0_15px_rgba(212,185,150,0.3)]`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-3`, `gap-1`, `gap-6`

**Primary button**

```html
<a class="px-5 py-1.5 rounded-full text-xs font-medium text-black bg-[#D4B996] shadow-[0_0_15px_rgba(212,185,150,0.3)] transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Articles (`blog-articles`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #ffffff;
  --color-muted: #4b5563;
  --color-border: #ffffff;
  --color-accent: #d4b996;
  --color-accent-2: #22c55e;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    ink: '#ffffff',
    muted: '#4b5563',
    line: '#ffffff',
    accent: '#d4b996',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in serif in white, with the middle phrase in italic
- **Do:** Use the tan (#d4b996) for the primary button only
- **Do:** Place a rounded photo card with a small glass label beside the hero copy
- **Don't:** Don't use bright colours; the tan is the only accent
- **Don't:** Don't set the headline in sans-serif; the serif carries the luxury tone
- **Don't:** Don't use the tan (#d4b996) as the hero ground; the ground is black.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
