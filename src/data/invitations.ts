export const BUSINESS_NAME = 'Sri Lanka Digital Invitations';
export const WHATSAPP_NUMBER_DISPLAY = '+94 76 614 8615';
export const WHATSAPP_BASE_URL = 'https://wa.me/94766148615';

export const INTRO_WHATSAPP_MESSAGE =
  "Hello Sri Lanka Digital Invitations! I'm interested in creating a digital invitation. Could you please share more information?";

export function getWhatsAppUrl(message: string = INTRO_WHATSAPP_MESSAGE): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function getPackageWhatsAppUrl(packageName: string): string {
  return getWhatsAppUrl(
    `Hello Sri Lanka Digital Invitations! I'm interested in the ${packageName} package. Could you please share more details?`,
  );
}

export type ScreenTone = 'dark' | 'ivory';

export interface InvitationCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  screenTone: ScreenTone;
}

export interface InvitationTemplate {
  id: string;
  slug: string;
  name: string;
  categoryLabel: string;
  categorySlug: string;
  shortDescription: string;
  startingPrice: string;
  image: string;
  screenTone: ScreenTone;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  featured?: boolean;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: 'palette' | 'smartphone' | 'share' | 'tag';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const CATEGORIES: InvitationCategory[] = [
  {
    id: 'cat-wedding',
    slug: 'wedding',
    title: 'Wedding Invitations',
    subtitle: 'Poruwa, church, and reception invitations crafted for your big day.',
    image: '/src/assets/images/tpl_luxury_wedding_1794909135084.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'cat-homecoming',
    slug: 'homecoming',
    title: 'Homecoming Invitations',
    subtitle: 'Regal crimson and gold accents honouring family traditions.',
    image: '/src/assets/images/tpl_homecoming_1794909137135.jpg',
    screenTone: 'dark',
  },
  {
    id: 'cat-birthday',
    slug: 'birthday',
    title: 'Birthday Invitations',
    subtitle: 'Floral, milestone, and themed birthday invites guests love opening.',
    image: '/src/assets/images/tpl_floral_birthday_1794909137351.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'cat-bridetobe',
    slug: 'bride-to-be',
    title: 'Bride-to-Be Invitations',
    subtitle: 'Chic high-tea, bridal shower, and bachelorette celebrations.',
    image: '/src/assets/images/tpl_bridetobe_1794909138634.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'cat-engagement',
    slug: 'engagement',
    title: 'Engagement Invitations',
    subtitle: 'Romantic keepsakes announcing your next chapter together.',
    image: '/src/assets/images/tpl_engagement_1794909138201.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'cat-baby-shower',
    slug: 'baby-shower',
    title: 'Baby Shower Invitations',
    subtitle: 'Soft botanical and pastel stationery welcoming little ones.',
    image: '/src/assets/images/tpl_baby_shower_1794909139058.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'cat-party',
    slug: 'party',
    title: 'Party Invitations',
    subtitle: 'Anniversaries, cocktail evenings, and private celebrations.',
    image: '/src/assets/images/tpl_party_1794909145219.jpg',
    screenTone: 'dark',
  },
  {
    id: 'cat-corporate',
    slug: 'corporate',
    title: 'Corporate Event Invitations',
    subtitle: 'Polished executive gala, summit, and launch invitations.',
    image: '/src/assets/images/tpl_corporate_gala_1794909141223.jpg',
    screenTone: 'dark',
  },
];

export const TEMPLATES: InvitationTemplate[] = [
  {
    id: 'tpl-1',
    slug: 'burgundy-elegance',
    name: 'Burgundy Elegance',
    categoryLabel: 'Wedding Invitation',
    categorySlug: 'wedding',
    shortDescription:
      'Deep burgundy silk, gleaming gold rings, and a glitter-sealed floral monogram.',
    startingPrice: 'From LKR 2,500',
    image: '/assets/aistudio/Screenshot_2026-11-17_101018_63bc5747.png',
    screenTone: 'dark',
  },
  {
    id: 'tpl-2',
    slug: 'royal-purple-romance',
    name: 'Royal Purple Romance',
    categoryLabel: 'Wedding Invitation',
    categorySlug: 'wedding',
    shortDescription:
      'Rich royal purple silk with a gold laurel wreath envelope and timeless finish.',
    startingPrice: 'From LKR 2,500',
    image: '/assets/aistudio/Screenshot_2026-11-17_101148_8b3f79ae.png',
    screenTone: 'dark',
  },
  {
    id: 'tpl-3',
    slug: 'golden-serenity',
    name: 'Golden Serenity',
    categoryLabel: 'Luxury Wedding Invitation',
    categorySlug: 'wedding',
    shortDescription:
      'Champagne gold and warm ivory florals blending traditional grace with modern luxury.',
    startingPrice: 'From LKR 4,000',
    image: '/src/assets/images/tpl_golden_serenity_1794911429970.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'tpl-4',
    slug: 'enchanted-garden',
    name: 'Enchanted Garden',
    categoryLabel: 'Wedding Invitation',
    categorySlug: 'wedding',
    shortDescription:
      'Soft sage eucalyptus, olive greenery, and white garden roses for romantic weddings.',
    startingPrice: 'From LKR 2,500',
    image: '/src/assets/images/tpl_enchanted_garden_1794911430017.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'tpl-5',
    slug: 'blush-romance',
    name: 'Blush Romance',
    categoryLabel: 'Engagement Invitation',
    categorySlug: 'engagement',
    shortDescription:
      'Dusty pink peonies, rose gold framing, and soft cream textures for engagements.',
    startingPrice: 'From LKR 2,500',
    image: '/src/assets/images/tpl_blush_romance_1794911431229.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'tpl-6',
    slug: 'birthday-bliss',
    name: 'Birthday Bliss',
    categoryLabel: 'Birthday Invitation',
    categorySlug: 'birthday',
    shortDescription:
      'Pastel pink and warm peach silk adorned with joyful florals and gold accents.',
    startingPrice: 'From LKR 2,500',
    image: '/src/assets/images/tpl_birthday_bliss_1794911432726.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'tpl-7',
    slug: 'royal-celebration',
    name: 'Royal Celebration',
    categoryLabel: 'Bride-to-Be Invitation',
    categorySlug: 'bride-to-be',
    shortDescription:
      'Lavender silk, champagne gold bows, and pearl florals for chic bridal celebrations.',
    startingPrice: 'From LKR 2,500',
    image: '/src/assets/images/tpl_royal_celebration_1794911433228.jpg',
    screenTone: 'ivory',
  },
  {
    id: 'tpl-8',
    slug: 'modern-elegance',
    name: 'Modern Elegance',
    categoryLabel: 'Corporate Event Invitation',
    categorySlug: 'corporate',
    shortDescription:
      'Minimalist black, crisp ivory, and champagne gold typography for executive events.',
    startingPrice: 'From LKR 4,000',
    image: '/src/assets/images/tpl_modern_elegance_1794911433582.jpg',
    screenTone: 'dark',
  },
];

export const UNDER_CONSTRUCTION_IMAGE =
  '/src/assets/images/under_construction_art_1794909141467.jpg';

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'pkg-essential',
    name: 'Essential',
    price: 'LKR 2,500',
    description: 'A beautiful digital invitation for your special occasion.',
  },
  {
    id: 'pkg-premium',
    name: 'Premium',
    price: 'LKR 4,000',
    description:
      'An elegant and personalised digital invitation with enhanced design details.',
    featured: true,
  },
  {
    id: 'pkg-luxury',
    name: 'Luxury',
    price: 'LKR 8,000',
    description:
      'A premium digital invitation experience with sophisticated visual styling and special design elements.',
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'why-designs',
    title: 'Beautiful Custom Designs',
    description: 'Invitations designed to match your special occasion.',
    icon: 'palette',
  },
  {
    id: 'why-mobile',
    title: 'Mobile Friendly',
    description: 'Beautifully presented on smartphones and other devices.',
    icon: 'smartphone',
  },
  {
    id: 'why-share',
    title: 'Easy to Share',
    description: 'Share your invitations easily through WhatsApp and social media.',
    icon: 'share',
  },
  {
    id: 'why-affordable',
    title: 'Affordable Packages',
    description: 'Beautiful digital invitations at affordable prices.',
    icon: 'tag',
  },
];

export const HOW_IT_WORKS: ProcessStep[] = [
  {
    number: '01',
    title: 'Choose Your Design',
    description: 'Browse our invitation designs and select your preferred style.',
  },
  {
    number: '02',
    title: 'Share Your Details',
    description:
      'Send us your event information, photographs, and design preferences.',
  },
  {
    number: '03',
    title: 'We Create Your Invitation',
    description:
      'Our team creates a personalised digital invitation for your special occasion.',
  },
  {
    number: '04',
    title: 'Share Your Invitation',
    description:
      'Receive your completed digital invitation and share it with your guests.',
  },
];
