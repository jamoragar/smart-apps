---
name: frontend-accessibility-design-review
description: Audit and improve frontend applications for WCAG accessibility, semantic HTML, keyboard navigation, responsive behavior, visual hierarchy, contrast, readable UI, and design-system consistency. Use when reviewing or modifying React, CSS, HTML, routes, pages, forms, navigation, landing pages, or component libraries where accessibility and frontend design quality matter.
---

# Frontend Accessibility Design Review

## Workflow

1. Map the frontend stack, scripts, entrypoints, routes, pages, and shared components before editing.
2. Inspect UI code and styles for accessibility, responsive design, visual hierarchy, and interaction states.
3. Prefer fixes that improve both accessibility and design quality: semantic markup, labels, headings, focus, contrast, spacing, readable copy, and predictable layout.
4. Run the app and capture desktop/mobile screenshots when dependencies and a dev server are available.
5. Validate with available checks: build, tests, lint, keyboard walkthrough, and browser accessibility inspection when possible.
6. Report findings by priority, then implement focused improvements.

## Accessibility Priorities

Treat WCAG 2.2 AA as the target unless the user specifies another standard.

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `footer`, `button`, `a`, `ul`, and proper heading order.
- Ensure every interactive control is keyboard reachable and has a visible focus state.
- Do not use clickable `div` or `span` when a native element works.
- Ensure links have meaningful accessible names and indicate destination or action.
- Add `alt` text for informative images; use empty `alt=""` only for decorative images.
- Keep color contrast at AA levels: 4.5:1 for normal text, 3:1 for large text and UI indicators.
- Do not communicate state only through color.
- Ensure forms have labels, error messages, help text, and accessible associations.
- Respect reduced motion for large animation, particles, parallax, or continuous decorative movement.
- Avoid layout, text, or fixed elements that break zoom, small screens, or text resizing.

## Design Review Priorities

- Keep the first viewport focused on the product or brand, not generic decoration.
- Make hierarchy obvious: one primary heading, clear supporting copy, strong calls to action.
- Use spacing, alignment, and typography consistently across components.
- Keep cards, nav, and repeated elements stable across viewport sizes.
- Avoid over-reliance on low-contrast text over images or busy backgrounds.
- Prefer accessible, inspectable content over purely decorative effects.

## React And CSS Guidance

- Keep components small and semantic before adding visual polish.
- Use route-aware navigation patterns from the existing project.
- Preserve existing dependencies unless an update is needed for security, compatibility, or accessibility.
- When updating libraries, inspect breaking changes and upgrade incrementally where possible.
- For Create React App projects, verify `react-scripts`, Node compatibility, build output, and browser behavior after dependency changes.

## Subagent Guidance

Use a subagent when the audit spans multiple pages, viewports, or concerns. Give the subagent only the repo path and the task, and ask for prioritized findings with file references. Keep implementation decisions in the main agent unless the user explicitly asks for parallel implementation.

## Optional Reference

For a compact checklist, read `references/wcag-frontend-checklist.md`.
