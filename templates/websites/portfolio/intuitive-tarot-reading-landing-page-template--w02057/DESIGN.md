# Design system — Intuitive Tarot Reading Landing Page Template

`SN-W02057` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A dark, direct booking page on near-black (#000000) with a large white Inter headline, its second line faded into grey, and a short grey intro. Indigo (#818cf8) marks the accepting-clients badge only, and the primary action is a white pill button. A dark photo card on the right, with a small avatar row as social proof, keeps the page calm and personal.

**Mood:** calm, personal, dark, direct, minimal

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#a1a1aa` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#818cf8` | Primary action and highlights |
| Second accent | `#f59e0b` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#6366f1` · `#27272a` · `#18181b` · `#71717a` · `#e4e4e7` · `#000000` · `#a1a1aa` · `#818cf8` · `#3f3f46`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 72px · h2 14px · h3 16px · body 14px
- **Weights in use:** medium, semibold, light
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-lg` (8px), `rounded-xl` (12px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_20px_rgba(255,255,255,0.1)]`, `shadow-[0_0_25px_rgba(255,255,255,0.2)]`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-4`, `gap-8`

**Primary button**

```html
<a class="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white px-6 font-medium text-black transition-all hover:bg-zinc-200">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Process / steps (`how-it-works`)
4. Contact form (`contact-form`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Three.js
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #18181b;
  --color-text: #f5f5f5;
  --color-muted: #a1a1aa;
  --color-border: #ffffff;
  --color-accent: #818cf8;
  --color-accent-2: #f59e0b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#18181b',
    ink: '#f5f5f5',
    muted: '#a1a1aa',
    line: '#ffffff',
    accent: '#818cf8',
    accent2: '#f59e0b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in Inter at large size, with the second line in grey.
- **Do:** Use indigo (#818cf8) for the availability badge and small markers only.
- **Do:** Make the primary button a white pill with dark text.
- **Don't:** Don't use indigo for large fills; the background stays near-black.
- **Don't:** Don't use bright or saturated colours in the headline.
- **Don't:** Don't remove the avatar and reading-count row under the call to action; it is the social proof.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
