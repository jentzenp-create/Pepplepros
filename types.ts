
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  content: string;
  rating: number;
}

export interface ValueProp {
  title: string;
  description: string;
}
