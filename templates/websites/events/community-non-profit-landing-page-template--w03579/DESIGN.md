# Design system — Community Non-profit Landing Page Template

`SN-W03579` · events · light mode · Sinera Atlas theme `workshop` · language `en`

## Direction

The non-profit page sets its hero headline in teal (#49beb2) at very large size, centred on a white ground. Supporting copy is muted slate grey (#64748b), and the layout is centred and spacious with rounded pill buttons. Soft blurred glow shapes add depth at the edges. The effect is gentle and open, with colour carried by the headline and the button rather than by panels.

**Mood:** warm, airy, friendly, soft, hopeful

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#f8fafc` | Cards, panels, raised areas |
| Text | `#475569` | Headings and primary copy |
| Muted text | `#64748b` | Secondary copy, captions |
| Border | `#f1f5f9` | Hairlines, dividers, outlines |
| Accent | `#49beb2` | Primary action and highlights |
| Second accent | `#1e293b` | Supporting highlights |

Palette by frequency of use: `#49beb2` · `#ffffff` · `#64748b` · `#1e293b` · `#f1f5f9` · `#94a3b8` · `#f8fafc` · `#bbf0ea` · `#0f172a` · `#475569`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 88px · h2 36px · h3 20px · body 14px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-lg` (8px)
- **Shadows:** `shadow-sm`, `shadow-xl`, `shadow-md`
- **Content width:** `max-w-[1200px]`, `max-w-[1400px]`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-8`, `gap-12`, `gap-4`

**Primary button**

```html
<a class="bg-[#49beb2] hover:bg-[#3da89d] text-white text-sm font-medium py-3 px-6 rounded-full transition-all shadow-sm hover:shadow-md">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Process / steps (`how-it-works`)
5. Articles (`blog-articles`)
6. Call to action (`cta`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text: #475569;
  --color-muted: #64748b;
  --color-border: #f1f5f9;
  --color-accent: #49beb2;
  --color-accent-2: #1e293b;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#f8fafc',
    ink: '#475569',
    muted: '#64748b',
    line: '#f1f5f9',
    accent: '#49beb2',
    accent2: '#1e293b',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the hero headline in teal (#49beb2) at display size, centred
- **Do:** Use muted slate (#64748b) for supporting copy
- **Do:** Keep the ground white with pill-shaped buttons
- **Don't:** Don't use teal for body text on white
- **Don't:** Don't fill the hero with dark panels
- **Don't:** Don't use hard-edged shapes where the soft glows are

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
