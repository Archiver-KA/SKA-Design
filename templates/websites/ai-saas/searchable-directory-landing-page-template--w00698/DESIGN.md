# Design system — Searchable Directory Landing Page Template

`SN-W00698` · ai-saas · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark, utilitarian reference site: pure black ground with white bold Inter headlines and grey supporting text. The search field is the focus of the hero, a wide dark bar with a cmd-K hint and small outlined chips for popular sectors. Below, a narrow filter rail sits beside result rows divided by hairlines, so the data reads first and decoration is absent.

**Mood:** functional, monochrome, dense, utilitarian, quiet

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#171717` | Cards, panels, raised areas |
| Text | `#f3f4f6` | Headings and primary copy |
| Muted text | `#9ca3af` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#ffffff` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#d1d5db` · `#000000` · `#171717` · `#6b7280` · `#404040` · `#262626` · `#9ca3af` · `#525252` · `#f3f4f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 48px · h2 14px · h3 14px · body 14px
- **Weights in use:** medium, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-sm` (2px), `rounded` (4px), `rounded-md` (6px)
- **Shadows:** `shadow-sm`, `shadow-md`
- **Content width:** `max-w-6xl`, `max-w-3xl`
- **Section padding:** `py-12`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-white text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-200 transition-colors shadow-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels)
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #171717;
  --color-text: #f3f4f6;
  --color-muted: #9ca3af;
  --color-border: #ffffff;
  --color-accent: #ffffff;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 2px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#000000',
    surface: '#171717',
    ink: '#f3f4f6',
    muted: '#9ca3af',
    line: '#ffffff',
    accent: '#ffffff',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the page on pure black (#000000) with white headings in bold Inter.
- **Do:** Make the wide search field the primary control on the page.
- **Do:** Separate results with hairline borders rather than cards or shadows.
- **Don't:** Don't introduce accent colours; the page is greyscale throughout.
- **Don't:** Don't add decorative imagery to the hero; the search is the content.
- **Don't:** Don't set body copy in pure white; secondary text stays grey.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
