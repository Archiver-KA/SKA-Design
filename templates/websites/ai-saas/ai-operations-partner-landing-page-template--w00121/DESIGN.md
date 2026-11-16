# Design system — AI Operations Partner Landing Page Template

`SN-W00121` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Aram Labs is a light, soft service page on an off-white ground (#f8fafc) with a faint mint glow at the lower right. The headline is a heavy dark-slate sans, and its second line is a blue-to-green gradient (#2563eb to #34d399). A near-black pill button carries the action, so colour appears only in the headline phrase and the glow.

**Mood:** light, soft, trustworthy, calm, friendly

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#f8fafc` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#1e293b` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#34d399` | Supporting highlights |

Palette by frequency of use: `#0f172a` · `#ffffff` · `#475569` · `#3b82f6` · `#2563eb` · `#334155` · `#f8fafc` · `#1e293b` · `#f1f5f9` · `#e2e8f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** a serif face
- **Body:** Inter
- **Loaded families:** Inter, Plus Jakarta Sans
- **Scale (largest breakpoint):** h1 88px · h2 48px · h3 20px · body 18px
- **Weights in use:** medium, semibold, bold
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-[1200px]`, `max-w-2xl`
- **Section padding:** `py-24`, `py-20`
- **Common gaps:** `gap-2`, `gap-3`, `gap-8`

**Primary button**

```html
<a class="btn-hover inline-flex items-center gap-2 bg-blue-600 text-white text-lg font-medium rounded-full px-8 py-3 hover:bg-blue-700 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Call to action (`cta`)
4. About (`about`)
5. Services (`services`)
6. Process / steps (`how-it-works`)
7. Contact form (`contact-form`)
8. Footer (`footer`)
9. Modal / overlay (`modal-overlay`)

## Motion, effects and stack

- **Effects:** gradient fills, blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1e293b;
  --color-border: #ffffff;
  --color-accent: #2563eb;
  --color-accent-2: #34d399;
  --font-display: "a serif face", serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#f8fafc',
    surface: '#ffffff',
    ink: '#1e293b',
    line: '#ffffff',
    accent: '#2563eb',
    accent2: '#34d399',
  },
  fontFamily: { display: ['a serif face'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the headline in heavy dark-slate sans (#1e293b), with the second line in the blue-to-green gradient
- **Do:** Use the near-black pill (#0f172a) for the primary action
- **Do:** Keep the mint glow at the lower corner of the hero, not across the page
- **Don't:** Don't set the display face in serif; the headline is a bold sans
- **Don't:** Don't use the blue or green as button fills; buttons are near-black
- **Don't:** Don't add extra gradients to the body copy

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
