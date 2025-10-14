// Google Analytics Helper Functions

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    })
  }
}

// Track CTA clicks
export const trackCTAClick = (ctaName, ctaLocation) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
    page_path: window.location.pathname
  })
}

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', {
    form_name: formName,
    page_path: window.location.pathname
  })
}

// Track external link clicks
export const trackExternalLink = (linkUrl, linkText) => {
  trackEvent('external_link_click', {
    link_url: linkUrl,
    link_text: linkText,
    page_path: window.location.pathname
  })
}

// Track downloads (PDFs, docs, etc)
export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    page_path: window.location.pathname
  })
}

// Track video plays
export const trackVideoPlay = (videoTitle, videoUrl) => {
  trackEvent('video_play', {
    video_title: videoTitle,
    video_url: videoUrl,
    page_path: window.location.pathname
  })
}

// Track scroll depth
export const trackScrollDepth = (scrollPercentage) => {
  trackEvent('scroll_depth', {
    scroll_percentage: scrollPercentage,
    page_path: window.location.pathname
  })
}

// Track PMB registration clicks
export const trackPMBClick = (source) => {
  trackEvent('pmb_registration_click', {
    source: source,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString()
  })
}

// Track WhatsApp clicks
export const trackWhatsAppClick = (source) => {
  trackEvent('whatsapp_click', {
    source: source,
    page_path: window.location.pathname
  })
}

// Track search queries
export const trackSearch = (searchQuery, resultsCount) => {
  trackEvent('search', {
    search_term: searchQuery,
    results_count: resultsCount
  })
}
