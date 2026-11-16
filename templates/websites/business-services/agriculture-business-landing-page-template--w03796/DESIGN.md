# Design system — Agriculture Business Landing Page Template

`SN-W03796` · business-services · light mode · Sinera Atlas theme `route` · language `cs`

## Direction

A rural landing page led by a full-width photograph of a field at sunset, with a centred white serif headline laid over it. Beneath the headline sit a light sans-serif paragraph and two buttons, one in pale cream and one translucent. Deep green (#3a5f3a) marks the navigation call to action. The page feels warm and grounded, with the photograph doing most of the work.

**Mood:** warm, rural, grounded, traditional

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f4f2ec` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#2e2e2e` | Headings and primary copy |
| Muted text | `#3a5f3a` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#3a5f3a` | Primary action and highlights |

Palette by frequency of use: `#3a5f3a` · `#ffffff` · `#2e2e2e` · `#6b6b6b` · `#e5e7eb` · `#f4f2ec` · `#f3f4f6` · `#6f8f59` · `#c0a98f` · `#9ca3af`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Playfair Display
- **Body:** Inter
- **Loaded families:** Inter, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 14px
- **Weights in use:** semibold, medium, bold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-xl` (12px), `rounded-2xl` (16px)
- **Shadows:** `shadow-md`, `shadow-hover`, `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-20`, `py-32`
- **Common gaps:** `gap-4`, `gap-10`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-8 py-4 bg-accent text-dark font-semibold rounded-lg hover:bg-[#B59C7F] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 min-w-[160px]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. About (`about`)
4. Gallery / portfolio (`gallery-portfolio`)
5. Map / location (`map-location`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** inline SVG

## Tokens

```css
:root {
  --color-background: #f4f2ec;
  --color-surface: #ffffff;
  --color-text: #2e2e2e;
  --color-muted: #3a5f3a;
  --color-border: #e5e7eb;
  --color-accent: #3a5f3a;
  --font-display: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f4f2ec',
    surface: '#ffffff',
    ink: '#2e2e2e',
    muted: '#3a5f3a',
    line: '#e5e7eb',
    accent: '#3a5f3a',
  },
  fontFamily: { display: ['Playfair Display'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in a serif face at a large size, in white, over the photograph.
- **Do:** Use deep green (#3a5f3a) for the navigation call to action and key labels.
- **Do:** Keep the hero photograph full width, with a darkened overlay beneath the text.
- **Don't:** Don't set body copy in the serif face.
- **Don't:** Don't place green text on the photograph behind the headline.
- **Don't:** Don't add more colours to the hero beyond the photograph and the green.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
