# Implementation Plan: Modern Hybrid Slider

We are replacing the jQuery Slick slider with a React-native Swiper.js implementation featuring text-based navigation and progress indicators.

## User Review Required
> [!IMPORTANT]
> None. Plan follows the approved design from 2026-02-14.

## Proposed Changes

### Dependencies
- `swiper` is already installed (v11.2.8).

### Styles
- Update `src/app/globals.css` to include styles for:
    - `.modern-slider-container`
    - `.slider-nav-row` (Flex container for titles)
    - `.nav-item` (Active states, typography)
    - `.progress-line-container` and `.progress-line-fill`

### Components
- Create `src/components/Slider/ModernSlider.js`:
    - Implement Swiper with Fade effect.
    - Custom controller for sync between Swiper and Navigation row.
    - Progress bar animation logic using `useEffect` and CSS transitions.

### Integration
- Update `src/app/page.js` (or wherever Slider is used) to use the new `ModernSlider`.

## Verification Plan

### Automated Tests
- N/A (Manual visual check required for animation smoothness).

### Manual Verification
- Run `npm run build` to ensure no SSR/hydration issues.
- Verify autoplay transitions correctly.
- Verify clicking "Kegiatan" navigates to the third slide.
- Verify progress bar resets on manual navigation.
