# Design system — AI-Powered Visual Intelligence Template

`SN-W00200` · ai-saas · light mode · Sinera Atlas theme `circuit` · language `en`

## Direction

Light enterprise page on white with a large heavy sans-serif headline, where the second line is set in a deep blue (#2563eb) gradient. A soft blue glow sits behind the headline and a blue primary button leads the calls to action. The overall look is bright, airy and corporate.

**Mood:** bright, corporate, airy, enterprise

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#ffffff` | Page ground |
| Surface | `#ecfdf5` | Cards, panels, raised areas |
| Text | `#171717` | Headings and primary copy |
| Muted text | `#525252` | Secondary copy, captions |
| Border | `#e5e5e5` | Hairlines, dividers, outlines |
| Accent | `#2563eb` | Primary action and highlights |
| Second accent | `#2563eb` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#171717` · `#525252` · `#111827` · `#e5e5e5` · `#10b981` · `#ecfdf5` · `#6b7280` · `#f5f5f5` · `#2563eb`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Geist, Roboto, Montserrat, Poppins, Playfair Display
- **Scale (largest breakpoint):** h1 72px · h2 48px · h3 20px · body 16px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wider`

## Shape, spacing and layout

- **Corner radius:** `rounded-xl` (12px), `rounded-full` (9999px), `rounded-[1.5rem]` (1.5rem)
- **Shadows:** `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)]`, `shadow-md`, `shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]`
- **Content width:** `max-w-7xl`, `max-w-3xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-4`, `gap-2`, `gap-8`

**Primary button**

```html
<a class="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#0066FF] text-white text-base font-normal rounded-full hover:bg-blue-600 transition-colors">…</a>
```

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, blend modes, CSS animations, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN), React
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #ffffff;
  --color-surface: #ecfdf5;
  --color-text: #171717;
  --color-muted: #525252;
  --color-border: #e5e5e5;
  --color-accent: #2563eb;
  --color-accent-2: #2563eb;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 12px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#ffffff',
    surface: '#ecfdf5',
    ink: '#171717',
    muted: '#525252',
    line: '#e5e5e5',
    accent: '#2563eb',
    accent2: '#2563eb',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set the second headline line in deep blue (#2563eb) with the soft glow behind it
- **Do:** Use the blue as the primary button colour and nowhere else in the hero
- **Do:** Keep the page on white with the hero card set in light surfaces
- **Don't:** Don't use green for accents; the page is blue and neutral
- **Don't:** Don't add dark sections; the page stays white
- **Don't:** Don't fade the headline to match the body copy; it stays solid

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
