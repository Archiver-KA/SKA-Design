# Design system — Luxury Medspa Landing Page Template

`SN-W02444` · healthcare · dark mode · Sinera Atlas theme `calm` · language `en`

## Direction

A deep teal hero over a faded photograph, which gives the page a dark, calm field for white text. The display type is a white serif with a warm taupe italic line, and a solid dark-teal button sits beside a white pill as the call to action. The look is restrained and clinical-soft, built from one hue plus warm neutrals.

**Mood:** calm, clinical-soft, restrained, premium, cool

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#006d77` | Page ground |
| Surface | `#1c1917` | Cards, panels, raised areas |
| Text | `#f5f5f5` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#f5f5f4` | Hairlines, dividers, outlines |
| Accent | `#00555d` | Primary action and highlights |
| Second accent | `#e0d7c7` | Supporting highlights |

Palette by frequency of use: `#006d77` · `#ffffff` · `#78716c` · `#333333` · `#f5f5f5` · `#e7e5e4` · `#f5f5f4` · `#a8a29e` · `#57534e` · `#f9f9f9`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Marcellus
- **Body:** IBM Plex Sans
- **Loaded families:** IBM Plex Sans, Marcellus
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 18px · body 12px
- **Weights in use:** bold, medium, light
- **Letter spacing:** `tracking-widest`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-sm`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-4`, `gap-3`

**Primary button**

```html
<a class="bg-[#006D77] text-white px-6 py-3 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-[#00555d] transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2">…</a>
```

## Page structure

Blocks in page order:

1. Announcement bar (`announcement-bar`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Services (`services`)
5. Team (`team`)
6. Map / location (`map-location`)
7. Contact form (`contact-form`)
8. FAQ (`faq`)
9. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #006d77;
  --color-surface: #1c1917;
  --color-text: #f5f5f5;
  --color-muted: #ffffff;
  --color-border: #f5f5f4;
  --color-accent: #00555d;
  --color-accent-2: #e0d7c7;
  --font-display: "Marcellus", serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#006d77',
    surface: '#1c1917',
    ink: '#f5f5f5',
    muted: '#ffffff',
    line: '#f5f5f4',
    accent: '#00555d',
    accent2: '#e0d7c7',
  },
  fontFamily: { display: ['Marcellus'], sans: ['IBM Plex Sans'] },
} }
```

## Do and don't

- **Do:** Keep the hero ground on teal (#006d77) with white headline text
- **Do:** Use the dark teal (#00555d) only for solid primary buttons
- **Do:** Set headings in Marcellus and body copy in IBM Plex Sans
- **Don't:** Don't put body copy on the bright part of the photograph; keep the dark overlay behind it
- **Don't:** Don't add a second saturated hue; the page is teal, white and warm grey
- **Don't:** Don't square off the buttons; they are full pills

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
