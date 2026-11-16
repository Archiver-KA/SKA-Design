# Design system — Prossium AI SaaS Landing Page Template

`SN-W00647` · ai-saas · dark mode · Sinera Atlas theme `circuit` · language `es`

## Direction

A dark Spanish-language AI page where colour lives in the headline: green (#37cf86) on the key noun and amber (#ffb600) on the adjective, with the rest in white. The hero sits on near-black (#0a0a0a) with faint floating chips on the right and a single green-filled primary button.

**Mood:** dark, bilingual, two-tone, confident, fresh

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#37cf86` | Primary action and highlights |
| Second accent | `#ffb600` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#37cf86` · `#000000` · `#a1a1aa` · `#71717a` · `#ffb600` · `#18181b` · `#0a0a0a` · `#27272a` · `#d4d4d8`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Manrope
- **Scale (largest breakpoint):** h1 76px · h2 60px · h3 30px · body 20px
- **Weights in use:** light, normal, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-inner`, `shadow-[0_0_10px_#37CF86]`, `shadow-black/50`
- **Content width:** `max-w-7xl`, `max-w-[90rem]`
- **Common gaps:** `gap-3`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="bg-[#37CF86] sm:w-auto group hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 font-medium text-black tracking-wide w-full rounded-full py-3.5 px-8 relative shadow-[0_0_30px_-10px_rgba(55,207,134,0.5)] text-xl">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Bento grid (`bento-grid`)
4. Pricing (`pricing`)
5. Contact form (`contact-form`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #37cf86;
  --color-accent-2: #ffb600;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#37cf86',
    accent2: '#ffb600',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the highlighted headline words in green (#37cf86) and amber (#ffb600) only
- **Do:** Keep the rest of the headline white on near-black (#0a0a0a)
- **Do:** Use a solid green primary button for the main action
- **Don't:** Don't use amber for buttons; it is the second headline accent
- **Don't:** Don't set the page on a light ground; it is dark
- **Don't:** Don't add a third colour to the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
