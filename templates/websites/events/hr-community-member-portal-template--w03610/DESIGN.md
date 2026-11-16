# Design system — HR Community Member Portal Template

`SN-W03610` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The member portal page is a clean reading view on white. A large regular-weight sans title is centred, with a grey intro paragraph beneath it and a small tracked line giving reading time and update date. The top bar is light, with a small square logo at the left and a points badge at the right. Neutral greys carry all the text, and the type is the only ornament.

**Mood:** calm, editorial, neutral, readable, clean

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |

No chromatic accent was found: the page relies on contrast between neutrals.

Palette by frequency of use: `#111827` · `#e5e7eb` · `#6b7280` · `#4b5563` · `#ffffff` · `#f9fafb` · `#9ca3af` · `#374151` · `#d1d5db` · `#1f2937`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter
- **Scale (largest breakpoint):** h1 24px · h2 48px · h3 14px · body 12px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px), `rounded` (4px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Announcement bar (`announcement-bar`)
3. Code / terminal (`code-terminal`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set page titles large in regular-weight near-black sans, centred
- **Do:** Use mid grey for intro copy and small tracked caps for reading time and dates
- **Do:** Keep the navigation bar light, with the logo at the left
- **Don't:** Don't add colour; the portal uses neutral greys only
- **Don't:** Don't set titles in bold weights
- **Don't:** Don't place cards behind the reading column

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
