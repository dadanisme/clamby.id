/**
 * Application constants for Clamby
 * Centralized location for all internal and external links, and assets
 */

// Internal navigation links
export const NAV_LINKS = {
  ABOUT_US: "#about-us",
  MILESTONES: "#milestones",
  REVIEWS: "#reviews",
  CONTACT_US: "#contact-us",
  WAITLIST: "#waitlist",
} as const;

// External links
export const EXTERNAL_LINKS = {
  // App Store links (placeholder)
  APP_STORE: "https://apps.apple.com/app/clamby",
  GOOGLE_PLAY: "https://play.google.com/store/apps/details?id=com.clamby",

  // Social media (placeholder)
  INSTAGRAM: "https://instagram.com/clamby",
  TWITTER: "https://twitter.com/clamby",
  FACEBOOK: "https://facebook.com/clamby",

  // Contact
  MAP: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.7601866007828!2d115.17530328595734!3d-8.737009289297397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd245ca9067d533%3A0xfd47d89b17f0fd0f!2sApple%20Developer%20Academy%20%40BINUS%20-%20Bali!5e0!3m2!1sen!2sid!4v1762326396888!5m2!1sen!2sid",
} as const;

// Brand information
export const BRAND = {
  NAME: "CLAMBY",
  TAGLINE: "Your Digital Wardrobe Assistant",
} as const;

// Asset paths (images, icons, etc.)
export const ASSETS = {
  LOGO_WITH_TEXT: "/logo-with-text.png",
  LOGO_WITH_TEXT_WHITE: "/logo-with-text-white.png",
  LOGO_WITH_TEXT_BLACK: "/logo-with-text-black.png",
  HERO_IMAGE: "/hero.png",
  OG_IMAGE: "/og.png",
  ICON: "/icon.png",
  PLACEHOLDER_VIDEO: "/placeholder-video.mp4",
  QR_CODE: "/qrcode.png",
  APP_STORE_BADGE: "/apple.png",
  GOOGLE_PLAY_BADGE: "/google-play.png",
  WELCOME_IMAGE: "/welcome.webp",
} as const;
