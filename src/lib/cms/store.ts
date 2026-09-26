import fs from "fs";
import path from "path";
import { servicesData } from "@/lib/data/services";
import { sampleKitsData } from "@/lib/data/sample-kits";
import { portfolioData } from "@/lib/data/portfolio";
import { journalArticles, JournalArticle } from "@/lib/data/articles";
import { initialFaqs, FAQSectionItem } from "@/lib/data/faqs";
import { initialSiteSettings, StudioSiteSettings } from "@/lib/data/settings";
import { ServiceItem, SampleKitItem, PortfolioPiece } from "@/types";

export interface CMSStoreData {
  services: Record<string, ServiceItem>;
  sampleKits: Record<string, SampleKitItem>;
  portfolio: PortfolioPiece[];
  articles: JournalArticle[];
  faqs: FAQSectionItem[];
  settings: StudioSiteSettings;
  leads: any[];
  orders: any[];
}

const STORE_PATH = path.join(process.cwd(), "src", "lib", "data", "cms-store.json");

const initialLeads = [
  {
    id: "1",
    ref: "EB-2026-8492",
    type: "Early Bride",
    name: "Arenla & Rongsen",
    email: "arenla@example.com",
    phone: "+91 98620 12345",
    eventOrService: "Wedding: Nov 2026 (Kohima) · 250 Guests",
    status: "NEW",
    notes: "Requires main suite (letterpress + champagne foil) and deckled edge menu cards.",
    date: "2026-09-24 16:15",
  },
  {
    id: "2",
    ref: "PRJ-2026-1039",
    type: "General Project",
    name: "Kevi Architecture Studio",
    email: "kevi@studio.in",
    phone: "+91 94360 54321",
    eventOrService: "Business Cards · 200 qty · 600gsm cotton with edge gilding",
    status: "CONTACTED",
    notes: "Vector files submitted via email; awaiting paper stock preference.",
    date: "2026-09-23 11:30",
  },
  {
    id: "3",
    ref: "EB-2026-5521",
    type: "Early Bride",
    name: "Imli & Narola",
    email: "narola.wedding@example.com",
    phone: "+91 98765 11223",
    eventOrService: "Wedding: Dec 2026 (Dimapur) · 400 Guests",
    status: "IN_DISCUSSION",
    notes: "Sample kit ordered and delivered. Discussing custom monogram blind deboss.",
    date: "2026-09-22 14:00",
  },
  {
    id: "4",
    ref: "PRJ-2026-0988",
    type: "Channel Partner",
    name: "Vogue Events Curators",
    email: "planner@vogueevents.in",
    phone: "+91 98111 22334",
    eventOrService: "Trade Collaboration: Luxury Wedding Planning",
    status: "PROPOSAL_SENT",
    notes: "Requested Trade Swatch Box for destination weddings in Northeast.",
    date: "2026-09-20 09:45",
  },
];

const initialOrders = [
  {
    id: "ord-1",
    orderNumber: "FLP-2026-1044",
    kitName: "Wedding Sample Kit",
    customerName: "Temsu Jamir",
    customerEmail: "temsu@example.com",
    customerPhone: "+91 98628 11223",
    shippingAddress: "House 42, Circular Road, Dimapur, Nagaland - 797112",
    amount: 1500,
    paymentStatus: "PAID",
    fulfillmentStatus: "DISPATCHED",
    trackingNumber: "DTDC-NL-8492019",
    createdAt: "2026-09-24 10:14",
  },
  {
    id: "ord-2",
    orderNumber: "FLP-2026-1043",
    kitName: "Business Card Sample Kit",
    customerName: "Pooja Mehta",
    customerEmail: "pooja.mehta@studio.design",
    customerPhone: "+91 98201 44556",
    shippingAddress: "Flat 4B, Silver Arch, Bandra West, Mumbai, Maharashtra - 400050",
    amount: 1000,
    paymentStatus: "PAID",
    fulfillmentStatus: "AWAITING_PACKING",
    createdAt: "2026-09-23 18:22",
  },
];

function getDefaultStore(): CMSStoreData {
  return {
    services: servicesData,
    sampleKits: sampleKitsData,
    portfolio: portfolioData,
    articles: journalArticles,
    faqs: initialFaqs,
    settings: initialSiteSettings,
    leads: initialLeads,
    orders: initialOrders,
  };
}

export function readCMSStore(): CMSStoreData {
  try {
    if (fs.existsSync(STORE_PATH)) {
      const content = fs.readFileSync(STORE_PATH, "utf8");
      const parsed = JSON.parse(content);
      return {
        ...getDefaultStore(),
        ...parsed,
      };
    }
  } catch (error) {
    console.error("Error reading CMS store file, using defaults:", error);
  }
  return getDefaultStore();
}

export function writeCMSStore(data: CMSStoreData): boolean {
  try {
    const dir = path.dirname(STORE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error writing CMS store file:", error);
    return false;
  }
}

export function getCMSPortfolio(): PortfolioPiece[] {
  return readCMSStore().portfolio;
}

export function getCMSServices(): Record<string, ServiceItem> {
  return readCMSStore().services;
}

export function getCMSSampleKits(): Record<string, SampleKitItem> {
  return readCMSStore().sampleKits;
}

export function getCMSArticles(): JournalArticle[] {
  return readCMSStore().articles;
}

export function getCMSFAQs(): FAQSectionItem[] {
  return readCMSStore().faqs;
}

export function getCMSSettings(): StudioSiteSettings {
  return readCMSStore().settings;
}

