# Design system — creativity

`SN-W01920` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A deep navy-black field with a faint dark orange glow behind the hero, and an oversized headline in Space Grotesk set at about 136px. The second line of the headline uses a white-to-grey gradient, which carries the mood without colour. Orange (#f97316) appears only as the logo dot and the outlined contact button, so the accent stays small and deliberate.

**Mood:** cinematic, dark, bold, futuristic, restrained

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#030712` | Page ground |
| Surface | `#1f2937` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#6b7280` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#f97316` | Primary action and highlights |
| Second accent | `#22c55e` | Supporting highlights |

Palette by frequency of use: `#f97316` · `#ffffff` · `#6b7280` · `#9ca3af` · `#000000` · `#1f2937` · `#030712` · `#111827` · `#374151` · `#fb923c`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Space Grotesk
- **Body:** Inter
- **Loaded families:** Inter, Space Grotesk, Geist, Roboto, Montserrat, Poppins
- **Scale (largest breakpoint):** h1 136px · h2 48px · h3 20px · body 14px
- **Weights in use:** medium, bold, light
- **Letter spacing:** `tracking-widest`, `tracking-tight`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded-2xl` (16px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_0_40px_rgba(249,115,22,0.4)]`, `shadow-2xl`
- **Content width:** `max-w-7xl`, `max-w-6xl`
- **Section padding:** `py-24`, `py-12`
- **Common gaps:** `gap-3`, `gap-2`, `gap-6`

**Primary button**

```html
<a class="group relative inline-flex items-center gap-3 px-10 py-4 bg-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-105">…</a>
```

## Page structure

Blocks in page order:

1. Modal / overlay (`modal-overlay`)
2. Navigation bar (`navbar`)
3. Hero (`hero`)
4. Process / steps (`how-it-works`)
5. Case studies (`case-studies`)
6. Contact form (`contact-form`)
7. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Iconify

## Tokens

```css
:root {
  --color-background: #030712;
  --color-surface: #1f2937;
  --color-text: #ffffff;
  --color-muted: #6b7280;
  --color-border: #ffffff;
  --color-accent: #f97316;
  --color-accent-2: #22c55e;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#030712',
    surface: '#1f2937',
    ink: '#ffffff',
    muted: '#6b7280',
    line: '#ffffff',
    accent: '#f97316',
    accent2: '#22c55e',
  },
  fontFamily: { display: ['Space Grotesk'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in Space Grotesk at display size, white with a grey gradient on the second line
- **Do:** Use the orange (#f97316) only on the logo mark and one outlined CTA
- **Do:** Keep the navigation as a floating dark bar with a centred pill
- **Don't:** Don't use a solid orange button for the main call to action; the template uses an outline
- **Don't:** Don't use a bright background; the page sits on near-black
- **Don't:** Don't set body copy in Space Grotesk; body text is Inter

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
