# Design system — Developer Portfolio Landing Page Template

`SN-W01954` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A black page with a floating dark navigation pill at the top, a white name mark on the left and a white pill button on the right. The first screen is nearly empty, with a small grey embedded WebGL frame at the bottom, so the page relies on motion and the scene to fill the space. Restraint and the pill shapes do the work.

**Mood:** restrained, minimal, dark, spacious, kinetic

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#000000` | Page ground |
| Surface | `#f3f4f6` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#000000` · `#6b7280` · `#171717` · `#050505` · `#9ca3af` · `#d4d4d4` · `#f97316` · `#333333` · `#444444`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h2 36px · h3 20px · body 12px
- **Weights in use:** medium, normal, light
- **Letter spacing:** `tracking-tight`, `tracking-widest`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-white/5`, `shadow-lg`
- **Content width:** `max-w-6xl`, `max-w-5xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-2`, `gap-6`, `gap-3`

**Primary button**

```html
<a class="text-sm font-medium text-white/70 hover:text-white transition-colors px-4 py-2 hover:bg-white/5 rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Case studies (`case-studies`)
3. About (`about`)
4. Contact form (`contact-form`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #000000;
  --color-surface: #f3f4f6;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f97316;
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
    surface: '#f3f4f6',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f97316',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the navigation as a floating dark pill with a white primary button
- **Do:** Leave the hero open and let the WebGL scene provide the content
- **Do:** Use white for the primary action and grey for secondary text
- **Don't:** Don't put text in the empty hero area; the scene is the content
- **Don't:** Don't use a light page ground
- **Don't:** Don't add more than one button to the navigation

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
