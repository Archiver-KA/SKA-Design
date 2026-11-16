# Design system — AI Automation Agency Landing Page Template

`SN-W01381` · agency-studio · dark mode · Sinera Atlas theme `workshop` · language `en`

## Direction

A near-black page with a left-aligned headline in a high-contrast serif, set over four lines, with the closing phrase We automate them in blue italic. Small floating cards at the right carry status labels and a code line, so the technical layer sits beside the editorial headline. The serif and the blue italic phrase are the signature, and blue appears nowhere else in the hero.

**Mood:** editorial, technical, dark, contrast

## Colour

| Role | Value | Use |
|---|---|---|
| Background | `#09090b` | Page ground |
| Surface | `#18181b` | Cards, panels, raised areas |
| Text | `#ffffff` | Headings and primary copy |
| Muted text | `#71717a` | Secondary copy, captions |
| Border | `#ffffff` | Hairlines, dividers, outlines |
| Accent | `#0ea5e9` | Primary action and highlights |
| Second accent | `#6366f1` | Supporting highlights |

Palette by frequency of use: `#ffffff` · `#a1a1aa` · `#18181b` · `#000000` · `#27272a` · `#0ea5e9` · `#52525b` · `#71717a` · `#111111` · `#3b82f6`.

Roles are inferred from how often and where each colour is used; check them against the page before relying on them.

## Typography

- **Display:** Inter
- **Body:** Inter
- **Loaded families:** Inter, Newsreader, Google Sans Flex, Oswald, DM Sans
- **Scale (largest breakpoint):** h1 60px · h2 60px · h3 24px · body 16px
- **Weights in use:** medium, light, semibold
- **Letter spacing:** `tracking-tight`, `tracking-wide`

## Shape, spacing and layout

- **Corner radius:** `rounded-full` (9999px), `rounded` (4px), `rounded-xl` (12px)
- **Shadows:** `shadow-lg`, `shadow-[0_8px_30px_rgba(0,0,0,0.5)]`, `shadow-2xl`
- **Content width:** `max-w-[1400px]`, `max-w-3xl`
- **Section padding:** `py-32`
- **Common gaps:** `gap-3`, `gap-2`, `gap-4`

**Primary button**

```html
<a class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors">…</a>
```

## Page structure

Blocks in page order:

1. Navigation bar (`navbar`)
2. Hero (`hero`)
3. Benefits (`benefits`)
4. Integrations (`integrations`)
5. Footer (`footer`)

## Motion, effects and stack

- **Effects:** backdrop blur (glass panels), gradient fills, CSS animations, custom keyframes
- **Libraries:** Tailwind CSS (CDN), Unicorn Studio (WebGL scenes)
- **Icons:** Lucide, Iconify

## Tokens

```css
:root {
  --color-background: #09090b;
  --color-surface: #18181b;
  --color-text: #ffffff;
  --color-muted: #71717a;
  --color-border: #ffffff;
  --color-accent: #0ea5e9;
  --color-accent-2: #6366f1;
  --font-display: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --radius: 9999px;
}
```

```js
// tailwind.config
theme: { extend: {
  colors: {
    background: '#09090b',
    surface: '#18181b',
    ink: '#ffffff',
    muted: '#71717a',
    line: '#ffffff',
    accent: '#0ea5e9',
    accent2: '#6366f1',
  },
  fontFamily: { display: ['Inter'], sans: ['Inter'] },
} }
```

## Do and don't

- **Do:** Set headlines in a high-contrast serif in white, with one italic phrase in blue (#0ea5e9).
- **Do:** Place small floating status cards and code lines at the right of the hero as the technical counterpoint.
- **Do:** Use blue for the italic phrase and the primary action only.
- **Don't:** Don't set the headline in a sans-serif; the serif is the voice of the page.
- **Don't:** Don't move code snippets into body copy; they stay in the floating cards.
- **Don't:** Don't use more than one blue italic phrase per hero.

## Use as a prompt

Paste this file into an AI coding tool with: "Build [YOUR PAGE] using this design system. Keep the colours, type, corner radius and spacing exactly; reuse the block order where it fits."
