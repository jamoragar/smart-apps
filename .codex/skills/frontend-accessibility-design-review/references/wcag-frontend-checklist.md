# WCAG Frontend Checklist

## Must Fix

- Missing page title, language, landmark, or main heading.
- Interactive elements without accessible names.
- Mouse-only interactions.
- Invisible or low-contrast focus.
- Text or controls below WCAG AA contrast.
- Images without appropriate `alt`.
- Heading levels that skip or hide page structure.
- Motion without reduced-motion handling.

## Should Fix

- Generic link text such as "click here" or "read more".
- Text embedded in images when real text is possible.
- Fixed heights that clip translated, zoomed, or longer content.
- Navigation without current-page state.
- Cards where the visual affordance and interactive target disagree.

## Verify

- Tab through the page from top to bottom.
- Use Enter and Space on controls.
- Test at mobile width, 200 percent browser zoom, and reduced motion.
- Run build and available tests after changes.
