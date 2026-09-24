// Core TypeScript types for Famous Letterpress

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  shortDesc: string;
  fullDescription: string[];
  materials: string[];
  techniques: string[];
  leadTime: string;
  sampleKitHref?: string;
  featuredImage?: string;
  galleryImages?: string[];
  features?: string[];
  processSteps?: { title: string; desc: string }[];
  faqs?: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

export interface SampleKitItem {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  price: number; // in INR
  description: string;
  includedItems: string[];
  materials: string[];
  shippingInfo: string;
  featuredImage: string;
  galleryImages: string[];
  stockAvailable: boolean;
  featured: boolean;
  metaTitle: string;
  metaDescription: string;
}

export interface PortfolioPiece {
  id: string;
  title: string;
  slug: string;
  category: "weddings" | "business-cards" | "personalised";
  categoryLabel: string;
  clientOrProject?: string;
  description: string;
  techniques: string[];
  paperStock?: string;
  featuredImage: string;
  galleryImages?: string[];
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "weddings" | "business-cards" | "personalised" | "sample-kits" | "process" | "shipping" | "general";
}

export interface EarlyBrideFormData {
  coupleNames: string;
  email: string;
  phone: string;
  weddingDate: string;
  weddingLocation: string;
  estimatedGuestCount: string;
  stationeryNeeds: string[];
  designStatus: string;
  estimatedBudget: string;
  aestheticVision: string;
  preferredContact: "WhatsApp" | "Email" | "Phone";
}

export interface GeneralEnquiryFormData {
  name: string;
  email: string;
  phone?: string;
  city?: string;
  serviceNeeded: string;
  quantity?: string;
  timeline?: string;
  budget?: string;
  message: string;
  preferredContact: "WhatsApp" | "Email" | "Phone";
}

export interface PartnerEnquiryFormData {
  partnerName: string;
  businessName: string;
  businessType: "Wedding Planner" | "Design Studio" | "Event Stylist" | "Brand Agency" | "Other";
  email: string;
  phone: string;
  location: string;
  websiteOrSocial?: string;
  collaborationVision: string;
}

export interface SiteConfig {
  studioName: string;
  tagline: string;
  location: string;
  contactEmail: string;
  phone: string;
  whatsapp: string;
  businessHours: string;
  instagram: string;
  facebook: string;
}
