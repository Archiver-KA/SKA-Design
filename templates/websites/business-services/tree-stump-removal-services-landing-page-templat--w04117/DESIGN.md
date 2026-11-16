# Design system — Tree Stump Removal Services Landing Page Template

`SN-W04117` · business-services · dark mode · Sinera Atlas theme `route` · language `nl`

## Direction

A dark, direct hero on a near-black ground (#000000), with a bold white sans headline whose second line is set in red. The page uses a solid red primary button beside an outline button, and a short checklist sits in the copy. The design is blunt and practical, relying on contrast rather than decoration.

**Mood:** blunt, practical, high-contrast, dark, direct

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f9fafb` | Cards, panels, raised areas |
| Text | `#000000` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#b91c1c` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#e5e7eb` · `#f9fafb` · `#fee2e2` · `#b91c1c` · `#dcfce7` · `#d1d5db` · `#ea580c` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 60px · h2 30px · h3 20px · body 14px
- **Weights in use:** semibold, bold, medium
- **Letter spacing:** `tracking-tight`, `tracking-tighter`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-2xl` (16px)
- **Shadows:** `shadow-sm`, `shadow-lg`, `shadow-brand-orange/5`
- **Content width:** `max-w-[1312px]`, `max-w-2xl`
- **Section padding:** `py-32`, `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-3`

**Primary button**

```html
<a class="hidden md:inline-flex h-10 items-center justify-center rounded-full border border-brand-border bg-white px-5 text-sm font-medium text-brand-text hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 transition-all">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Logo cloud (`logo-cloud`)
5. Call to action (`cta`)
6. FAQ (`faq`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), AOS scroll reveal
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f9fafb;
  --color-text: #000000;
  --color-border: #ffffff;
  --color-accent: #b91c1c;
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
    surface: '#f9fafb',
    ink: '#000000',
    line: '#ffffff',
    accent: '#b91c1c',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in bold white with the second line in the red accent (#b91c1c)
- **Do:** Use a solid red primary button beside an outline secondary button
- **Do:** Keep checklists short, with one line per benefit
- **Don't:** Don't use light backgrounds for the hero
- **Don't:** Don't add decorative gradients behind the headline
- **Don't:** Don't set long text in red

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
