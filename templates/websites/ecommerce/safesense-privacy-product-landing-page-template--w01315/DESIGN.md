# Design system — SafeSense Privacy Product Landing Page Template

`SN-W01315` · ecommerce · dark mode · Sinera Atlas theme `market` · language `en`

## Direction

A dark, high-contrast product landing page on near-black (#0a0a0a) with white type and a single red accent (#e42910), used for the primary call to action and the second half of the headline. The hero uses large bold sans-serif with the verbs stacked for rhythm, and a framed product view with thin white corner marks and red alert labels reinforces the detection theme. Depth comes from the dark ground, not shadows.

**Mood:** dark, urgent, high-contrast, technical

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#0a0a0a` | Page ground |
| Surface | `#121212` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#ffffff` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#e42910` | Primary action and highlights |
| Second accent | `#dc2626` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#e42910` · `#dc2626` · `#ff7085` · `#000000` · `#0a0a0a` · `#121212` · `#050505` · `#ff5670` · `#f0f0f0`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 24px · body 14px
- **Weights in use:** medium, light, bold
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_20px_rgba(255,112,133,0.3)]`, `shadow-[0_0_8px_white]`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#ff5670] transition-colors shadow-[0_0_20px_rgba(255,112,133,0.3)] bg-[#E42910]">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Gallery / portfolio (`gallery-portfolio`)
4. Stats band (`stats`)
5. Testimonials (`testimonials`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #0a0a0a;
  --color-surface: #121212;
  --color-text: #ffffff;
  --color-muted: #ffffff;
  --color-border: #ffffff;
  --color-accent: #e42910;
  --color-accent-2: #dc2626;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#0a0a0a',
    surface: '#121212',
    ink: '#ffffff',
    muted: '#ffffff',
    line: '#ffffff',
    accent: '#e42910',
    accent2: '#dc2626',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Keep the ground near-black (#0a0a0a) and the text white
- **Do:** Use red (#e42910) for the primary button and one headline phrase only
- **Do:** Frame product imagery with thin white corner marks and small red status labels
- **Don't:** Don't use light grey or pastel panels; the page stays black, white and red
- **Don't:** Don't add blue or other accents; the alert system is red only
- **Don't:** Don't set headlines in a serif or script face; bold sans-serif carries the tone

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
