# Design system — NutriDesk Dietician SaaS Landing Page Template

`SN-W00607` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

A warm, bright health-practice page on a pale peach ground that fades to near white. The hero headline is heavy, all-caps sans in near-black, with a soft yellow highlight bar under one word (#f9db79). A dark pill sits in the nav as the only solid button, and an app-style card with soft shadow shows the product. The yellow and peach stay soft, so the page reads as friendly and organised.

**Mood:** friendly, warm, organised, bright, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2f2e2e` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#000000` | Hairlines, dividers, outlines |
| Accent | `#f9db79` | Primary action and highlights |

Palette by frequency of use: `#2f2e2e` · `#ffffff` · `#000000` · `#6b7280` · `#f9db79` · `#4b5563` · `#9ca3af` · `#fdf1ec` · `#f3f4f6` · `#374151`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Caveat, Montserrat, Inter, Bricolage Grotesque
- **Scale (largest breakpoint):** h1 96px · h2 60px · h3 30px · body 18px
- **Weights in use:** semibold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-[2rem]` (2rem)
- **Shadows:** `shadow-xl`, `shadow-sm`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-[95%]`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="px-5 py-2 rounded-full text-xs font-heading font-semibold text-gray-500 hover:text-[#2F2E2E] hover:bg-white/50 transition-all uppercase tracking-wider font-sans">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #2f2e2e;
  --color-muted: #6b7280;
  --color-border: #000000;
  --color-accent: #f9db79;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#2f2e2e',
    muted: '#6b7280',
    line: '#000000',
    accent: '#f9db79',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero ground as a pale peach gradient (#fdf1ec) fading to near white (#fafafa).
- **Do:** Use the soft yellow (#f9db79) only as a highlight bar under one headline word.
- **Do:** Keep the nav's booking button as the only dark solid button, and set headlines in heavy all-caps sans.
- **Don't:** Don't use the yellow as text colour; it is a highlight only.
- **Don't:** Don't add a second highlight colour to the headline.
- **Don't:** Don't set the headline in mixed case; it stays all caps.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
