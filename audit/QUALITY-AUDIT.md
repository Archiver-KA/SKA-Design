# Quality audit — 2026-11-13

Scope: the library holds 4278 templates after 65 removals (61 byte-identical duplicates, 2 empty test fragments, and on 2026-11-16 two more duplicates that differed from their original by one blank line — see removed-templates.json). Components removed (78, as duplicates, as logos that do not display, or on request) are listed in removed-components.json. All were checked statically (HTML parse, local references, metadata, banner). 4200 were also rendered in headless Chromium at 1366px and 390px. The remaining 78 have **not** been render-checked, so render-only findings are unknown for them.

## Status

| Status | Templates | Meaning |
|---|---:|---|
| ok | 3528 | No issue found by the checks that ran |
| rebuilt | 24 | Near-empty stub replaced by a full page in a Sinera Atlas theme, written in the template's original language |
| fixed | 582 | Repaired, no remaining finding |
| needs-review | 44 | At least one open finding (see below) |
| react-project | 100 | Vite/React source project: index.html needs a build step, not a standalone page |

Template kind: 4118 full pages, 160 snippets (single UI fragments, widgets and 3D demos). Snippets carry a snippetType; low text is not a defect for them.

## Fixes applied

- 24 stub templates rebuilt from scratch.
- 23 templates with truncated documents or load-time script errors repaired.
- 589 flagged templates fixed at source for mobile overflow, script errors, missing local assets, filler copy, dead images and stuck loaders; each re-rendered with a fresh 390px load.
- Dead Unsplash images replaced with verified working photos in 126 templates.
- Inline base64 payloads over 40 KB moved to assets/ in 10 templates; 48 blank banners recaptured.
- 2 templates: source-editor tracking iframes removed.
- 7 templates: browser-extension tags removed.
- 9 templates: dead favicon links removed.
- 3 templates: dead Cloudflare /cdn-cgi/ scripts removed.
- 8 templates: missing <title> added.
- 5 templates: missing viewport meta added.

## Open findings

| Finding | Templates | Note |
|---|---:|---|
| broken-images | 22 | An image on a reachable host (Unsplash, local file) failed to load. |
| banner-missing-or-tiny | 10 | banner.webp under 1.5 KB — blank capture; mostly WebGL demos that do not render headless. |
| blank-render | 6 | Rendered with almost no visible content. |
| huge-file | 4 | index.html over 2 MB. |
| heavy-inline-base64 | 4 | More than 500 KB of inline base64 that could not be externalised. |
| mobile-overflow | 2 | Horizontal overflow at 390px (fresh load). |
| lorem-ipsum | 1 | Contains lorem ipsum filler. |

568 templates use images on hosts the audit environment cannot reach (avatar and stock services). They are marked quality.externalImagesUnverified rather than counted as broken.

## Templates needing review

| ID | Findings | Path |
|---|---|---|
| SN-W01617 | broken-images | agency-studio/lead-gen-agency-landing-page-template--w01617 |
| SN-W00017 | huge-file | ai-saas/agent-ai--w00017 |
| SN-W00160 | blank-render | ai-saas/ai-startup-idea-generator-landing-page-template--w00160 |
| SN-W00415 | banner-missing-or-tiny | ai-saas/futuristic-technology-landing-page-template--w00415 |
| SN-W00469 | mobile-overflow | ai-saas/ios-music-app-landing-page-template--w00469 |
| SN-W00480 | huge-file | ai-saas/kerf-k1-cinematic-3d-chip-launch-page--w00480 |
| SN-W00529 | broken-images | ai-saas/medora-infrastructure-saas-landing-page-template--w00529 |
| SN-W00582 | broken-images | ai-saas/nexus-funnel-page-builder-template--w00582 |
| SN-W00767 | broken-images | ai-saas/tech-conference-landing-page-template--w00767 |
| SN-W00790 | banner-missing-or-tiny | ai-saas/vacance-solitude-booking-template--w00790 |
| SN-W00823 | mobile-overflow | ai-saas/web-design-custom-apps-and-ai-systems-project-d--w00823 |
| SN-W02848 | broken-images | food-beverage/beer-hall-and-global-pizza-restaurant-landing-pa--w02848 |
| SN-W03194 | broken-images | real-estate/architecture-studio-landing-page-template--w03194 |
| SN-W03311 | broken-images | real-estate/luxury-swimming-pool-landing-page-template--w03311 |
| SN-W04022 | broken-images | business-services/manufacturing-and-industrial-corporate-template--w04022 |
| SN-W03072 | banner-missing-or-tiny | travel/kairo-luxury-travel-expedition-template--w03072 |
| SN-W03119 | broken-images | travel/moon-river-luxury-resort-template--w03119 |
| SN-W03121 | broken-images | travel/morocco-travel-landing-page-template--w03121 |
| SN-W04175 | blank-render | other-landing/concentric-animated-dot-rings--w04175 |
| SN-W04176 | blank-render | other-landing/concentric-expanding-dot-rings--w04176 |
| SN-W04246 | heavy-inline-base64, huge-file | other-landing/nexus-pro-x-landing-page-template--w04246 |
| SN-W04282 | blank-render | other-landing/rotating-cluster-of-pulsing-dots--w04282 |
| SN-W01746 | banner-missing-or-tiny | portfolio/3d-artist-portfolio-landing-page-template--w01746 |
| SN-W01748 | banner-missing-or-tiny | portfolio/3d-artist-portfolio-template--w01748 |
| SN-W01756 | banner-missing-or-tiny | portfolio/3d-portfolio-landing-page-template--w01756 |
| SN-W01757 | banner-missing-or-tiny | portfolio/3d-portfolio-website-template--w01757 |
| SN-W01835 | broken-images | portfolio/best-production-forever--w01835 |
| SN-W01886 | huge-file | portfolio/creative-developer-portfolio-template--w01886 |
| SN-W01942 | broken-images | portfolio/demo-v1--w01942 |
| SN-W02041 | broken-images | portfolio/hassan-irshad-portfolio--w02041 |
| SN-W02118 | banner-missing-or-tiny, blank-render | portfolio/minimalist-distraction-free-writing-template--w02118 |
| SN-W02132 | broken-images | portfolio/museumlite-cms-and-collections-management-templa--w02132 |
| SN-W02453 | broken-images | healthcare/medical-aesthetic-surgery-landing-page-template--w02453 |
| SN-W02450 | broken-images | healthcare/medical-and-plastic-surgery-clinic-landing-page--w02450 |
| SN-W02452 | broken-images | healthcare/medical-and-plastic-surgery-landing-page-templat--w02452 |
| SN-W02471 | broken-images | healthcare/medical4u-healthcare-template--w02471 |
| SN-W02629 | broken-images | sports-fitness/gym-and-fitness-landing-page-template--w02629 |
| SN-W01117 | blank-render | ecommerce/campushub-marketplace-landing-page-template--w01117 |
| SN-W01228 | broken-images | ecommerce/luxury-jewelry-e-commerce-landing-page-template--w01228 |
| SN-W01258 | broken-images | ecommerce/minimal-e-commerce-landing-page-template--w01258 |
| SN-W01277 | heavy-inline-base64 | ecommerce/noth-streetwear-e-commerce-landing-page-template--w01277 |
| SN-W01278 | heavy-inline-base64 | ecommerce/noth-urban-athletics-and-streetwear-e-commerce-t--w01278 |
| SN-W01342 | heavy-inline-base64 | ecommerce/vow-atelier-diamond-ring-experience--w01342 |
| SN-W03783 | broken-images | news-blog/wedding-team-journal-landing-page-template--w03783 |
