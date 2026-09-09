export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category?: string;
  size?: "large" | "medium" | "small";
  description?: string;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
  category?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  description?: string;
  category?: string;
}

export interface BakerInfo {
  name: string;
  role: string;
  description: string;
  category?: string;
}