import Image from './image';

interface Feature {
  id: number;
  ctaText: string;
  ctaLink: string;
  title: string;
  description: string;
  desktopImage: Image;
  mobileImage: Image;
  orderId: number;
  features: string[];
}

export default Feature;
