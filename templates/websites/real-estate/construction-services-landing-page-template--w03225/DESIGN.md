# Design system — Construction Services Landing Page Template

`SN-W03225` · real-estate · dark mode · Sinera Atlas theme `dwell` · language `pl`

## Direction

A dark, high-contrast Polish construction page on a deep navy ground (#111b27) with uppercase bold headlines split between white and amber (#e8a020). The amber carries the key phrase of each headline and the primary button, while the secondary button is a dark outlined box. A faint vertical texture sits behind the hero, which makes the page feel blunt, bold and direct.

**Mood:** blunt, bold, dark, industrial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#111b27` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#1f2937` | Secondary copy, captions |
| Border | `#f3f4f6` | Hairlines, dividers, outlines |
| Accent | `#e8a020` | Primary action and highlights |
| Second accent | `#1a2332` | Supporting highlights |

Palette by frequency of use: `#e8a020` · `#1a2332` · `#ffffff` · `#6b7280` · `#9ca3af` · `#111b27` · `#f4f4f2` · `#1f2937` · `#f3f4f6` · `#e5e7eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Barlow Condensed, Inter
- **Scale (largest breakpoint):** h1 96px · h2 48px · h3 30px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`, `shadow-2xl`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-16`, `py-24`
- **Common gaps:** `gap-8`, `gap-12`, `gap-6`

**Primary button**

```html
<a class="bg-[#E8A020] text-[#1A2332] px-6 py-2.5 rounded font-medium text-sm btn-hover flex items-center">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Marquee (`marquee`)
4. Logo cloud (`logo-cloud`)
5. Feature grid (`features`)
6. Bento grid (`bento-grid`)
7. Map / location (`map-location`)
8. FAQ (`faq`)
9. Call to action (`cta`)
10. Contact form (`contact-form`)
11. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #111b27;
  --color-text: #ffffff;
  --color-muted: #1f2937;
  --color-border: #f3f4f6;
  --color-accent: #e8a020;
  --color-accent-2: #1a2332;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#111b27',
    ink: '#ffffff',
    muted: '#1f2937',
    line: '#f3f4f6',
    accent: '#e8a020',
    accent2: '#1a2332',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in bold uppercase, with the key phrase in amber (#e8a020).
- **Do:** Use the amber only for the key headline phrase and the primary button.
- **Do:** Keep the secondary button as a dark outlined box with white text.
- **Don't:** Don't use the dark navy (#1a2332) as the accent; the amber is the signal colour.
- **Don't:** Don't set the hero on a light ground; the first screen is dark.
- **Don't:** Don't use lowercase headlines; the hero headlines are uppercase.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
