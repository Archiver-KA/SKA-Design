# Design system — Personal Injury Law Firm Landing Page Template

`SN-W04041` · business-services · light mode · Sinera Atlas theme `route` · language `en-US`

## Direction

A law-firm page that opens on a deep teal hero with a photograph beneath a dark overlay. The white headline has its key phrase set in copper italic, and a white case-evaluation form sits on a card on the right. A thin top strip lists office locations and phone numbers, and a row of stats sits below the copy, giving a direct, trustworthy tone.

**Mood:** direct, trustworthy, legal, classic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#0f172a` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#9d6b3d` | Primary action and highlights |
| Second accent | `#093c4a` | Supporting highlights |

Palette by frequency of use: `#9d6b3d` · `#ffffff` · `#093c4a` · `#e5e7eb` · `#6b7280` · `#f9fafb` · `#f3f4f6` · `#9ca3af` · `#072d38` · `#d1d5db`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded-full` (9999px)
- **Shadows:** `shadow-xl`, `shadow-lg`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#9d6b3d] hover:bg-[#8a5d34] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Stats band (`stats`)
4. Services (`services`)
5. Team (`team`)
6. Logo cloud (`logo-cloud`)
7. Contact form (`contact-form`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-text: #0f172a;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #9d6b3d;
  --color-accent-2: #093c4a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f9fafb',
    ink: '#0f172a',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#9d6b3d',
    accent2: '#093c4a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the key phrase of the hero headline in copper (#9d6b3d) italic
- **Do:** Keep the case form on a white card over the teal hero
- **Do:** Use the teal (#093c4a) for the top strip and section bands
- **Don't:** Don't use copper for body text
- **Don't:** Don't remove the office locations strip
- **Don't:** Don't use more than one copper highlight per view

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
