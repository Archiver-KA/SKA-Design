# Design system — Modern Designer Portfolio & Course Landing Page Template

`SN-W02124` · portfolio · dark mode · Sinera Atlas theme `workshop` · language `pl`

## Direction

A dark navy course landing page (#062130) where cyan (#42e1ec) carries the emphasis: the second headline line, the primary button and a soft glow behind the hero. The first headline line is white and bold uppercase, which sets a plain, high-contrast tone. Body copy sits in a muted blue-grey, and the glow shapes add depth without card borders.

**Mood:** bold, high-contrast, energetic, promotional, dark

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#062130` | Page ground |
| Text | `#ffffff` | Headings and primary copy |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#42e1ec` | Primary action and highlights |

Palette by frequency of use: `#ffffff` · `#42e1ec` · `#031722` · `#8ca6b5` · `#062130` · `#2bc9d4`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, WistiaPlayerInterNumbersSemiBold
- **Scale (largest breakpoint):** h1 72px · h2 36px · h3 20px · body 18px
- **Weights in use:** medium, semibold, normal
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded` (4px), `rounded-full` (9999px)
- **Shadows:** `shadow-2xl`, `shadow-[0_0_30px_rgba(66,225,236,0.4)]`, `shadow-xl`
- **Content width:** `max-w-7xl`, `max-w-2xl`
- **Section padding:** `py-24`
- **Common gaps:** `gap-2`, `gap-16`, `gap-4`

**Primary button**

```html
<a class="bg-[#42e1ec] text-[#031722] px-12 py-5 mt-4 rounded font-semibold text-xl uppercase tracking-wide hover:bg-[#2bc9d4] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(66,225,236,0.4)] relative z-20">…</a>
```

## Page structure

Blocks in page order:

1. Hero (`hero`)
2. Video / media (`video-media`)
3. Services (`services`)
4. Booking form (`booking`)
5. Call to action (`cta`)
6. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, large blurred glow shapes
- **Libraries:** Tailwind CSS (CDN)
- **Icons:** Lucide

## Tokens

```css
:root {
  --color-background: #062130;
  --color-text: #ffffff;
  --color-border: #ffffff;
  --color-accent: #42e1ec;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 4px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#062130',
    ink: '#ffffff',
    line: '#ffffff',
    accent: '#42e1ec',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Use cyan (#42e1ec) for one headline line and the primary button per section, not for body text.
- **Do:** Set headlines in bold uppercase Inter, white on the navy ground.
- **Do:** Put the soft cyan glow behind the hero, never behind text blocks.
- **Don't:** Don't set the page on bright cyan; the navy ground is the base.
- **Don't:** Don't use cyan for body copy; it is reserved for emphasis.
- **Don't:** Don't remove the glow shapes; they carry the hero's depth.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
