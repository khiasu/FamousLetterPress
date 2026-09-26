export interface StudioSiteSettings {
  studioName: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  hours: string;
  instagram: string;
  facebook: string;
  logoUrl: string;
  announcementBarText: string;
  announcementActive: boolean;
}

export const initialSiteSettings: StudioSiteSettings = {
  studioName: "Famous Letter Press",
  tagline: "Designers Turned Printers · Handcrafted in Nagaland",
  location: "Nagaland, India",
  email: "hello@famousletterpress.com",
  phone: "+91 98628 00000",
  whatsapp: "+91 98628 00000",
  hours: "Monday – Saturday: 9:30 AM – 6:00 PM IST",
  instagram: "https://www.instagram.com/famousletterpressindia/",
  facebook: "https://www.facebook.com/FamousLetterpress/",
  logoUrl: "https://famousletterpress.com/wp-content/uploads/2022/06/FMS-new-logo-1-100x100.png",
  announcementBarText: "New Season Wedding Sample Kits Now Dispatching Across India",
  announcementActive: false,
};
