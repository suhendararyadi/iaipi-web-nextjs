# Implementation Plan: UI/UX Polish & Mobile Navigation

This plan executes the approved design for branding consistency and mobile bottom navigation.

## Proposed Changes

### 1. Global Styles Update (`src/app/globals.css`)
- [ ] Define `:root` variables for `--iaipi-green`, `--iaipi-yellow`, and `--iaipi-navy`.
- [ ] Refactor existing component styles in `globals.css` (Header, Slider, etc.) to use these variables.

### 2. New Component: Bottom Navigation (`src/components/Navigation/BottomNav.js`)
- [ ] Create folder `src/components/Navigation`.
- [ ] Implement `BottomNav.js` with React.
- [ ] Use FontAwesome icons (already used in project).
- [ ] Add CSS for `fixed-bottom` positioning and visibility toggle (hidden on desktop).

### 3. Integration (`src/app/layout.js`)
- [ ] Add `<BottomNav />` to the global layout so it persists across all pages.

### 4. Component Refactoring (Polish)
- [ ] Update `src/components/Slider/ModernSlider.js` to use CSS variables.
- [ ] Check `src/components/Header2/Header2.js` for color hardcoding and replace with variables.

## Verification Plan
### Manual Verification
- [ ] Open in Responsive Mode (Chrome DevTools).
- [ ] Verify Bottom Nav appears on Mobile width and disappears on Desktop.
- [ ] Check color consistency on all buttons.
- [ ] Verify links in Bottom Nav (Home, News, PMB, SIAKAD) work correctly.
