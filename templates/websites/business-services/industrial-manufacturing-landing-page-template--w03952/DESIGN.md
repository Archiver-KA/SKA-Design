# Design system — Industrial Manufacturing Landing Page Template

`SN-W03952` · business-services · dark mode · Sinera Atlas theme `route` · language `en`

## Direction

A dark slate industrial page where very large uppercase sans-serif headlines stack across the hero, with one word set in orange (#ea580c) to mark the point of the message. Floating status panels with thin borders overlay the headline and are joined by a dashed orange connector line, which adds a technical, data-driven layer. Body text is light grey on the slate ground.

**Mood:** technical, bold, precise, dense, industrial

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#1f2937` | Page ground |
| Surface | `#ffffff` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#374151` | Hairlines, dividers, outlines |
| Accent | `#ea580c` | Primary action and highlights |
| Second accent | `#4ade80` | Supporting highlights |

Palette by frequency of use: `#ea580c` · `#ffffff` · `#9ca3af` · `#374151` · `#6b7280` · `#111827` · `#1f2937` · `#e5e7eb` · `#c24100` · `#4ade80`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** IBM Plex Sans
- **Body:** IBM Plex Sans
- **Loaded families:** IBM Plex Sans, Playfair Display, Oswald
- **Scale (largest breakpoint):** h1 128px · h2 72px · h3 16px · body 14px
- **Weights in use:** medium
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-md` (6px), `rounded-full` (9999px)
- **Shadows:** `shadow-lg`, `shadow-2xl`, `shadow-sm`
- **Content width:** `max-w-[1600px]`, `max-w-[200px]`
- **Section padding:** `py-16`, `py-32`
- **Common gaps:** `gap-2`, `gap-3`, `gap-4`

**Primary button**

```html
<a class="bg-[#EA580C] px-6 py-3 rounded-md text-white text-sm font-medium hover:bg-[#c24100] shadow-[0_0_15px_rgba(234,88,12,0.3)] transition-all flex items-center gap-2 font-ibm">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Logo cloud (`logo-cloud`)
4. Bento grid (`bento-grid`)
5. Process / steps (`how-it-works`)
6. Case studies (`case-studies`)
7. Modal / overlay (`modal-overlay`)
8. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #1f2937;
  --color-surface: #ffffff;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #374151;
  --color-accent: #ea580c;
  --color-accent-2: #4ade80;
  --font-display: "IBM Plex Sans", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --radius: 6px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#1f2937',
    surface: '#ffffff',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#374151',
    accent: '#ea580c',
    accent2: '#4ade80',
  },
  fontFamily: { display: ['IBM Plex Sans'], sans: ['IBM Plex Sans'] },
} }
```

## Do and don't

- **Do:** Set headlines in uppercase sans-serif, stacked on separate lines
- **Do:** Use orange (#ea580c) for one headline word and the primary button
- **Do:** Layer small status panels over the hero with thin borders
- **Don't:** Don't use orange for body text
- **Don't:** Don't place body copy on top of the floating panels
- **Don't:** Don't use decorative photography behind the headline

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
