# Design system — Real Estate Rental Platform Template

`SN-W03376` · real-estate · light mode · Sinera Atlas theme `dwell` · language `en`

## Direction

Light, neutral product page on an off-white ground with a near-black headline and a solid black primary button next to an outlined secondary button. The large sans headline is two-tone, with its second line in mid-grey, giving the statement weight without colour. Indigo appears only on the offer cards further down, so colour stays with content while the buttons remain monochrome.

**Mood:** neutral, modern, monochrome, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#fafafa` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#4f46e5` | Primary action and highlights |
| Second accent | `#111827` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e5e7eb` · `#6b7280` · `#111827` · `#000000` · `#9ca3af` · `#f3f4f6` · `#171717` · `#ededed` · `#6366f1`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 20px · h2 18px · h3 14px · body 14px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-md` (6px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-indigo-500/20`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="p-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Listings (`listings`)
5. Stats band (`stats`)
6. Map / location (`map-location`)
7. Sign-in form (`auth-form`)
8. Dashboard preview (`dashboard-preview`)
9. Booking form (`booking`)
10. Call to action (`cta`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #fafafa;
  --color-surface: #ffffff;
  --color-text: #171717;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #4f46e5;
  --color-accent-2: #111827;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#fafafa',
    surface: '#ffffff',
    ink: '#171717',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#4f46e5',
    accent2: '#111827',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in near-black (#171717) with the second line in mid-grey (#6b7280).
- **Do:** Use the near-black (#111827) for primary buttons and outlined buttons for secondary actions.
- **Do:** Reserve indigo (#4f46e5) for offer cards and highlights, not for buttons.
- **Don't:** Don't fill the hero with a colour block; keep the ground off-white (#fafafa).
- **Don't:** Don't add a second button colour beside the black primary.
- **Don't:** Don't use indigo on body text or small labels.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
