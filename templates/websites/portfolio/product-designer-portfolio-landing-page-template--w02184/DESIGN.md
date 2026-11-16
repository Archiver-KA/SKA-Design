# Design system — Product Designer Portfolio Landing Page Template

`SN-W02184` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

Dark, gradient-accented product page: a black ground (#000000) with bold white Inter headlines, and one word in a blue-to-violet gradient (#3b82f6 to #a855f7) for emphasis. The primary button is white with black text and a small arrow, and a secondary outline button sits beside it. The gradient word and a small green status dot are the only colour, so the hierarchy depends on that single highlight.

**Mood:** dark, gradient, focused, crisp, modern

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#3b82f6` | Primary action and highlights |
| Second accent | `#a855f7` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#fafafa` · `#9ca3af` · `#3b82f6` · `#000000` · `#d1d5db` · `#60a5fa` · `#a855f7` · `#f3f4f6` · `#6b7280`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]`
- **Content width:** `max-w-6xl`, `max-w-2xl`
- **Section padding:** `py-32`, `py-28`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-500 text-white px-6 py-3 text-base font-medium hover:bg-blue-600 transition-all duration-300">…</a>
```

## Page structure

Blocks in page order:

1. Video / media (`video-media`)
2. Menu list (`menu-list`)
3. Schedule (`schedule-agenda`)
4. Navigation bar (`navbar`)
5. Hero (`hero`)
6. Case studies (`case-studies`)
7. About (`about`)
8. Timeline (`timeline`)
9. FAQ (`faq`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Spline 3D
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-text: #f3f4f6;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #3b82f6;
  --color-accent-2: #a855f7;
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
    ink: '#f3f4f6',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#3b82f6',
    accent2: '#a855f7',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set one headline word in a blue-to-violet gradient per hero
- **Do:** Use a white pill button with black text as the primary action
- **Do:** Keep the status dot green and small, beside the badge
- **Don't:** Don't gradient more than one word per section
- **Don't:** Don't use a light page ground; the page is black
- **Don't:** Don't fill the outline button with a colour

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
