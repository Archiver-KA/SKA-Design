# Design system — Sovereign Care - Senior Living Landing Page Template

`SN-W02529` · healthcare · light mode · Sinera Atlas theme `calm` · language `en`

## Direction

A traditional, reassuring care-home site built on a full-width photograph of a brick-and-timber residence under a dark overlay, with a white serif wordmark. Deep burgundy (#6b2f2f) is the only accent, used on the navigation call to action and the primary enquiry button, which gives the page a conservative, premium feel. The hero is a photograph rather than a graphic, so trust comes from the building itself.

**Mood:** traditional, reassuring, premium, homely

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#fafafa` | Cards, panels, raised areas |
| Text | `#111827` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#e5e7eb` | Hairlines, dividers, outlines |
| Accent | `#6b2f2f` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#111827` · `#6b2f2f` · `#e5e7eb` · `#9ca3af` · `#f3f4f6` · `#4b5563` · `#6b7280` · `#fafafa` · `#f9fafb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Pacifico
- **Body:** Pacifico
- **Loaded families:** Pacifico
- **Scale (largest breakpoint):** h1 36px · h2 36px · h3 28px · body 14px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-lg` (8px), `rounded-2xl` (16px), `rounded-full` (9999px)
- **Shadows:** `shadow-sm`
- **Content width:** `max-w-7xl`, `max-w-4xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#6b2f2f] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#5a2727] transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Services (`services`)
4. Awards / press (`awards-press`)
5. Feature grid (`features`)
6. Call to action (`cta`)
7. FAQ (`faq`)
8. Process / steps (`how-it-works`)
9. Contact form (`contact-form`)
10. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #fafafa;
  --color-text: #111827;
  --color-muted: #6b7280;
  --color-border: #e5e7eb;
  --color-accent: #6b2f2f;
  --color-accent-2: #2563eb;
  --font-display: "Pacifico", sans-serif;
  --font-body: "Pacifico", sans-serif;
  --radius: 8px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#fafafa',
    ink: '#111827',
    muted: '#6b7280',
    line: '#e5e7eb',
    accent: '#6b2f2f',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Pacifico'], sans: ['Pacifico'] },
} }
```

## Do and don't

- **Do:** Use burgundy (#6b2f2f) only for the navigation call to action and the primary enquiry button
- **Do:** Lead the hero with a full-width photograph of the actual building under a dark overlay
- **Do:** Set navigation labels in small, letterspaced capitals
- **Don't:** Don't replace the hero photograph with an illustration or a gradient
- **Don't:** Don't add a second brand colour.
- **Don't:** Don't set the wordmark or hero heading in a script face; use a serif.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
