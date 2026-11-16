# Design system — Sr. Product Designer Portfolio Template

`SN-W02240` · portfolio · light mode · Sinera Atlas theme `workshop` · language `en-US`

## Direction

A plain, light designer intro on white: a large tight sans headline in black on the right, with a tilted white hero card on the left that casts a soft shadow. Body copy is black with a grey second paragraph, and the blue (#009aff) is kept for the inline link and a floating purchase button. The layout is simple and product-led, with the blue as the only accent.

**Mood:** plain, product-led, clean, light

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#009aff` | Primary action and highlights |

Palette by frequency of use: `#000000` · `#ffffff` · `#6b7280` · `#e5e7eb` · `#1f2937` · `#0e0e0e` · `#9ca3af` · `#3b82f6` · `#2563eb` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** var(--font-body)
- **Body:** var(--font-body)
- **Loaded families:** Inter Tight, Inter
- **Scale (largest breakpoint):** h1 88px · h2 120px · h3 24px · body 18px
- **Weights in use:** medium, normal, semibold
- **Letter spacing:** `tracking-tighter-custom`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[24px]` (24px), `rounded-none` (0)
- **Shadows:** `shadow-2xl`, `shadow-lg`
- **Content width:** `max-w-[1200px]`, `max-w-[350px]`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-8`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center gap-2 bg-[#009aff] text-white px-5 py-3 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300 font-semibold text-sm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Video / media (`video-media`)
4. Case studies (`case-studies`)
5. About (`about`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), blend modes, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text: #000000;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #009aff;
  --font-display: "var(--font-body)", sans-serif;
  --font-body: "var(--font-body)", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ffffff',
    ink: '#000000',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#009aff',
  },
  fontFamily: { display: ['var(--font-body)'], sans: ['var(--font-body)'] },
} }
```

## Do and don't

- **Do:** Set the headline large in tight black sans on the right
- **Do:** Use the blue (#009aff) for inline links and the floating purchase button only
- **Do:** Keep the hero image as a tilted white card with a soft shadow
- **Don't:** Don't use the grey (#e5e7eb) as the page ground; the ground is white
- **Don't:** Don't add a second accent colour beside the blue
- **Don't:** Don't set body copy in pale grey below readable contrast

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
