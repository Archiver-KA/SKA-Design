# Design system — JEJUAIr Travel Planning Template

`SN-W03070` · travel · dark mode · Sinera Atlas theme `dwell` · language `en`

## Direction

A dark, minimal planning page on a near-black ground (#121214) with a large white Korean headline set in a clean sans, and a short orange (#ff5000) kicker above. The only solid colour is an orange pill button for the call to action, and faint orange arc lines sit in the background as texture. Spacing is wide and the text column is narrow, so the page feels calm and personal.

**Mood:** minimal, dark, personal, calm

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#121214` | Page ground |
| Surface | `#18181a` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#f5f1e8` | Hairlines, dividers, outlines |
| Accent | `#ff5000` | Primary action and highlights |

Palette by frequency of use: `#f5f1e8` · `#ff7a1a` · `#18181a` · `#121214` · `#222224` · `#ff5000` · `#ffffff` · `#e64800` · `#0a0a0b` · `#0f0f11`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Cormorant Garamond
- **Body:** Cormorant Garamond
- **Loaded families:** Cormorant Garamond, JetBrains Mono, Fredoka, IBM Plex Sans
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 12px · body 14px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-[32px]` (32px), `rounded-[30px]` (30px)
- **Shadows:** `shadow-[0_4px_14px_rgba(255,80,0,0.3)]`
- **Content width:** `max-w-7xl`, `max-w-5xl`
- **Section padding:** `py-24`, `py-16`
- **Common gaps:** `gap-4`, `gap-8`, `gap-12`

**Primary button**

```html
<a class="hover:text-[#F5F1E8] transition-colors p-2 bg-[#F5F1E8]/5 rounded-full">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Hero (`hero`)
3. Feature grid (`features`)
4. Video / media (`video-media`)
5. Testimonials (`testimonials`)
6. FAQ (`faq`)
7. Call to action (`cta`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** blend modes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #121214;
  --color-surface: #18181a;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #f5f1e8;
  --color-accent: #ff5000;
  --font-display: "Cormorant Garamond", serif;
  --font-body: "Cormorant Garamond", serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#121214',
    surface: '#18181a',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#f5f1e8',
    accent: '#ff5000',
  },
  fontFamily: { display: ['Cormorant Garamond'], sans: ['Cormorant Garamond'] },
} }
```

## Do and don't

- **Do:** Use orange (#ff5000) for the kicker and the single call to action
- **Do:** Keep the headline in a large clean sans with generous line spacing
- **Do:** Keep the text column narrow beside the headline
- **Don't:** Don't use the light orange (#ff7a1a) as a page ground
- **Don't:** Don't add a second solid colour button in the hero
- **Don't:** Don't set the Korean headline in a serif; use a clean sans

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
