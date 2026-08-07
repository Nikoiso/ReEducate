export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  size?: "large" | "medium" | "small";
  description?: string;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  description?: string;
}


export interface BakerInfo {
  name: string;
  role: string;
  description: string;
}