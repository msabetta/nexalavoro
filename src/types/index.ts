// ========================
// Tipi per le sezioni UI
// ========================

export interface FeatureItem {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
  tag: string;
  tagClass: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatarBg: string;
  initials: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  ctaClass: string;
  featured: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Skill {
  name: string;
  active: boolean;
}

export interface ProfileStats {
  skillRelevance: number;
  ethicalProjects: number;
  hiddenFees: number;
  burnoutRisk: 'low' | 'medium' | 'high';
}

// ========================
// Tipi per il chatbot
// ========================

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: number;
}

export interface ChatbotRequest {
  message: string;
}

export interface ChatbotResponse {
  reply: string;
}

// ========================
// Tipi per le API
// ========================

export interface NewsletterRequest {
  email: string;
}

export interface NewsletterResponse {
  message: string;
  error?: string;
}

export interface CommentRequest {
  comment: string;
}

export interface CommentResponse {
  message: string;
  error?: string;
}

// ========================
// Tipi per il database (Mongoose models)
// ========================

export interface INewsletter {
  email: string;
  subscribedAt: Date;
}

export interface IComment {
  text: string;
  createdAt: Date;
}

// ========================
// Utility generiche
// ========================

export type Status = 'idle' | 'loading' | 'success' | 'error';